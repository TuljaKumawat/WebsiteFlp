import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-white py-4 mt-5"
      style={{
        background: "linear-gradient(90deg, #0b0f19, #1a1f2b)",
      }}
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">

        {/* LEFT */}
        <div className="mb-3 mb-md-0 small opacity-75">
          &copy; {new Date().getFullYear()} WebWorks. All Rights Reserved.
        </div>

        {/* CENTER - Brand Name */}
        <div className="fw-bold fs-4 text-primary">
          WebWorks
        </div>

        {/* RIGHT - Social */}
        <div className="d-flex gap-3">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-5 social-icon"
          >
            <FaTwitter />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-5 social-icon"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-5 social-icon"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-5 social-icon"
          >
            <FaInstagram />
          </a>
        </div>

      </div>

      {/* Icon Hover Effect CSS */}
      <style>{`
        .social-icon {
          transition: 0.3s;
        }
        .social-icon:hover {
          color: #0d6efd !important;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
