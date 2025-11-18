import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header
      className="shadow-sm"
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <nav className="navbar navbar-expand-lg container py-2">

        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          
          <span className="fw-bold fs-5 text-primary">WebWorks</span>
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-center gap-lg-3">

            <li className="nav-item">
              <Link className="nav-link fw-semibold nav-hover" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold nav-hover" to="/services">Services</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold nav-hover" to="/about-project">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold nav-hover" to="/testimonials">Reviews</Link>
            </li>

            <li className="nav-item ms-lg-3">
              <Link
                className="btn btn-primary px-3 py-1 rounded-pill shadow-sm"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>

          </ul>
        </div>

      </nav>

      {/* Extra Nav Animation CSS */}
      <style>{`
        .nav-hover {
          position: relative;
          padding-bottom: 4px;
          transition: color .3s;
        }
        .nav-hover::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0%;
          height: 2px;
          background: #0d6efd;
          transition: width .3s;
        }
        .nav-hover:hover::after {
          width: 100%;
        }
        .nav-hover:hover {
          color: #0d6efd !important;
        }
      `}</style>

    </header>
  );
};

export default Header;
