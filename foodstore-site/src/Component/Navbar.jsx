

import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 mx-auto mt-2 rounded">
      <div className="container-fluid px-4">
        {/* Logo */}
        <Link
          className="navbar-brand"
          to="/"
          style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
        >
          RECIPE <span style={{ color: "orange" }}>BOOKSITE</span>
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links and Input */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <div className="d-flex flex-column flex-lg-row align-items-end align-items-lg-center gap-3 w-100 justify-content-end">
            {/* Nav Links */}
            <ul className="navbar-nav d-flex flex-column flex-lg-row align-items-end align-items-lg-center gap-2 gap-lg-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/food">Foods</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cookers">Cookers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/steps">Steps</Link>
              </li>
            </ul>

            {/* Input field */}
            <div style={{ width: "250px", maxWidth: "100%" }}>
                <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Foods"
                  value={searchTerm}
                  aria-describedby="button-addon2"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={() => setSearchTerm("")}  
                >
                  Search Items
                </button>
              </div>
              </div>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;