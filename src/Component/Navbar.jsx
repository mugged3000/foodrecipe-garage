import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const links = [
    { to: "/",        label: "Home"        },
    { to: "/food",    label: "Foods"       },
    { to: "/about",   label: "Top Sellers" },
    { to: "/cookers", label: "Chefs"       },
    { to: "/steps",   label: "Recipes"     },
  ];

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">

        {/* Logo */}
        <Link to="/" className="nav-logo">
          <div className="logo-flame">🔥</div>
          Recipe<span>Garage</span>
        </Link>

        {/* Nav links — mobile dropdown includes search, desktop does not */}
        <ul className={`nav-links${open ? " open" : ""}`}>
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={location.pathname === l.to ? "active" : ""}
              >
                {l.label}
              </Link>
            </li>
          ))}
          {/* Search visible only inside mobile dropdown */}
          <li className="nav-search-mobile-item">
            <div className="nav-search" style={{ width: "100%" }}>
              <input
                type="text"
                placeholder="Search food..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <button onClick={() => setSearchTerm("")}>
                {searchTerm ? "✕" : "🔍"}
              </button>
            </div>
          </li>
        </ul>

        {/* Desktop-only search bar */}
        <div className="nav-search nav-search-desktop">
          <input
            type="text"
            placeholder="Search food..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button onClick={() => setSearchTerm("")}>
            {searchTerm ? "✕" : "🔍"}
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={`hmbgr${open ? " open" : ""}`}
          onClick={() => setOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
