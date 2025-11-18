import React from "react";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header className="py-3 shadow-sm"
      style={{
        background: "linear-gradient(90deg, #000000ff, #141f2bff)",
        color: "white",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">

        {/* LEFT TITLE */}
        <h4 className="m-0 fw-bold" style={{ letterSpacing: "1px" }}>
          ⚙️ ADMIN PANEL
        </h4>

        {/* NAV LINKS */}
        <nav className="d-flex gap-2">

          <Link className="btn btn-outline-light btn-sm px-3 rounded-pill" to="/ad">
            Dashboard
          </Link>

          <Link className="btn btn-outline-light btn-sm px-3 rounded-pill" to="/ad/project">
            Project
          </Link>

          <Link className="btn btn-outline-light btn-sm px-3 rounded-pill" to="/ad/client">
            Client
          </Link>

          <Link className="btn btn-outline-light btn-sm px-3 rounded-pill" to="/ad/contact">
            Contact
          </Link>

          <Link className="btn btn-outline-light btn-sm px-3 rounded-pill" to="/ad/subscribe">
            Newsletter
          </Link>

        </nav>

      </div>
    </header>
  );
};

export default AdminHeader;
