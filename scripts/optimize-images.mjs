import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const MAX_WIDTH = 1920;
const PHOTO_QUALITY = 85;

const CONVERT_EXTS = new Set([".jpg", ".jpeg", ".png"]);

function formatBytes(n) {
  if (n < 1024) return `${n}B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)}K`;
  return `${(n / 1024 / 1024).toFixed(2)}M`;
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

async function encodeWebp(inputPath, { lossless = false } = {}) {
  const img = sharp(inputPath, { limitInputPixels: false, failOn: "none" });
  const meta = await img.metadata();
  let pipeline = sharp(inputPath, { limitInputPixels: false, failOn: "none" });

  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
      kernel: sharp.kernel.lanczos3,
    });
  }

  if (lossless) {
    pipeline = pipeline.webp({ lossless: true, effort: 6 });
  } else {
    pipeline = pipeline.webp({
      quality: PHOTO_QUALITY,
      alphaQuality: 100,
      effort: 6,
      smartSubsample: true,
    });
  }

  return pipeline.toBuffer();
}

const searchDirs = [path.join(ROOT, "src/assets"), path.join(ROOT, "public")];
const files = (await Promise.all(searchDirs.map(walk))).flat();

let saved = 0;
const report = [];

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  const rel = path.relative(ROOT, file);
  const stat = await fs.stat(file);
  const isLogo = rel.startsWith("public/logo");

  if (CONVERT_EXTS.has(ext)) {
    const dest = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    const destExists = await fs
      .access(dest)
      .then(() => true)
      .catch(() => false);

    if (destExists && dest !== file) {
      await fs.unlink(file);
      saved += stat.size;
      report.push({
        action: "delete duplicate",
        rel: `${rel} (webp already exists)`,
        before: stat.size,
        after: 0,
      });
      continue;
    }

    const buffer = await encodeWebp(file, { lossless: isLogo });
    let out = buffer;
    if (isLogo) {
      const lossy = await encodeWebp(file, { lossless: false });
      if (lossy.length < out.length) out = lossy;
    }
    await fs.writeFile(dest, out);
    if (dest !== file) await fs.unlink(file);
    saved += stat.size - out.length;
    report.push({
      action: "convert",
      rel: `${rel} → ${path.relative(ROOT, dest)}`,
      before: stat.size,
      after: out.length,
    });
    continue;
  }

  if (ext !== ".webp") continue;

  const meta = await sharp(file, { limitInputPixels: false, failOn: "none" }).metadata();
  const needsResize = meta.width && meta.width > MAX_WIDTH;
  if (!needsResize) continue;

  const buffer = await encodeWebp(file);
  if (buffer.length < stat.size) {
    await fs.writeFile(file, buffer);
    saved += stat.size - buffer.length;
    report.push({
      action: needsResize ? "recompress+resize" : "recompress",
      rel,
      before: stat.size,
      after: buffer.length,
    });
  } else {
    report.push({
      action: "skip (already smaller)",
      rel,
      before: stat.size,
      after: stat.size,
    });
  }
}

console.log("\nOptimized images:\n");
for (const row of report) {
  const delta = row.after - row.before;
  const pct = row.before ? ((delta / row.before) * 100).toFixed(0) : "0";
  console.log(
    `${row.action.padEnd(22)} ${formatBytes(row.before).padStart(7)} → ${formatBytes(row.after).padStart(7)} (${pct}%)  ${row.rel}`,
  );
}
console.log(`\nTotal saved: ${formatBytes(saved)}`);
