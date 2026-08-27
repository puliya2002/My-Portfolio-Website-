import React from "react";
import { NavLinks } from "../constants/index";
import { useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/pulindu-vidmal-57a7851a4/",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  { href: "https://github.com/puliya2002", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.instagram.com/p_u_l_i_y_a_official/",
    icon: SlSocialInstagram,
    label: "Instagram",
  },
  {
    href: "https://web.facebook.com/pulindu.vidmal.10",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "https://wa.me/qr/GGBM57BKKRIKL1",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
];

function Footer(props) {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-white/[0.06] mt-16">
      <div className="container max-w-7xl mx-auto px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold text-base">
              Pulindu Vidmal
            </span>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-1">
              {NavLinks.map((item) => (
                <li key={item.id}>
                  <button
                    className="px-3 py-1.5 text-sm text-gray-400 hover:text-white rounded-lg
                               hover:bg-white/[0.05] transition-all duration-200"
                    onClick={() => {
                      navigate(item.url2);
                      props.onNavClick(item.url);
                    }}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="p-2 rounded-lg border border-white/[0.07] bg-white/[0.03] text-gray-400
                           hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12]
                           transition-all duration-200"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-6">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Pulindu Vidmal. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
