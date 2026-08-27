export default function LoadingScreen({ exiting = false }) {
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black ${
        exiting ? "animate-loader-exit" : ""
      }`}
      aria-busy="true"
      aria-label="Loading"
    >
      {/* Soft ambient blush — top-left */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(480px at 40px 32px, rgba(30, 58, 138, 0.28), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative flex flex-col items-center gap-5 animate-loader-pop">
        <p className="text-sm tracking-[0.28em] uppercase text-gray-400 animate-loader-label">
          Loading
        </p>

        <div className="h-[2px] w-28 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-loader-progress" />
        </div>
      </div>
    </div>
  );
}
