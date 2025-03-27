import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaCopy, FaCheck } from "react-icons/fa";
import NavBar from "./NavBar";

function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = "vidmalpulindu@gmail.com";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyEmail = () => {
    // Copy email to clipboard
    navigator.clipboard.writeText(email).then(() => {
      // Show copied state
      setCopied(true);

      // Reset copied state after 2 seconds
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);

      // Clean up the timer
      return () => clearTimeout(timer);
    });
  };

  return (
    <div>
      <NavBar />
      <div className="container max-w-3xl mx-auto justify-center p-5 pt-14 content-center z-50 h-screen">
        <div className="bg-gradient-to-br from-gray-500/30 to-gray-500/20 border-white/5 border-2 rounded-xl shadow p-5 items-center justify-center flex-items-center flex flex-col py-20">
          <p className="text-2xl font-medium pb-2">Send an Email</p>
          <div className="items-center justify-center flex-items-center flex flex-col">
            <div className="flex items-center gap-3">
              <a
                href="mailto:vidmalpulindu@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center border-[1.7px] rounded-full px-3 py-1 border-gray-700 cursor-pointer hover:bg-gray-500/50 bg-gray-500/10 my-5 w-fit hover:scale-95"
              >
                <p className="text-lg">{email}</p>
                <FaExternalLinkAlt />
              </a>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-full bg-gray-500/20 hover:bg-gray-500/30 transition-all duration-200 border-[1.7px] border-gray-700 cursor-pointer hover:scale-95"
                aria-label="Copy email"
              >
                {copied ? (
                  <FaCheck className="text-green-500" />
                ) : (
                  <FaCopy className="text-gray-200 hover:text-gray-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
