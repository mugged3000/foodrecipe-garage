import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const [show, setShow] = useState(false);
  const yr = new Date().getFullYear();

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <footer className="site-footer">
        <div className="wrap">
          <div className="ft-grid">
            <div className="ft-brand">
              <Link to="/" style={{ fontFamily:"var(--ff-display)", fontSize:"1.3rem", fontWeight:700, color:"var(--ink)", letterSpacing:"-.03em", display:"inline-flex", alignItems:"center", gap:9 }}>
                <span style={{ fontSize:"1.2rem" }}>🔥</span>
                Recipe<span style={{ color:"var(--amber)" }}>Garage</span>
              </Link>
              <p>Authentic recipes, real flavours. Explore our curated menu of burgers, pizzas, drinks and more.</p>
            </div>
            <div className="ft-col">
              <h4>Navigate</h4>
              <ul className="ft-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/food">Foods</Link></li>
                <li><Link to="/about">Top Sellers</Link></li>
                <li><Link to="/cookers">Chefs</Link></li>
                <li><Link to="/steps">Recipes</Link></li>
              </ul>
            </div>
            <div className="ft-col">
              <h4>Categories</h4>
              <ul className="ft-list">
                <li><a href="#">Burgers</a></li>
                <li><a href="#">Pizzas</a></li>
                <li><a href="#">Drinks</a></li>
                <li><a href="#">Desserts</a></li>
                <li><a href="#">Snacks</a></li>
              </ul>
            </div>
            <div className="ft-col ft-newsletter">
              <h4>Stay Updated</h4>
              <p>Get weekly recipes and exclusive deals.</p>
              <div className="ft-newsletter-row">
                <input type="email" placeholder="your@email.com" />
                <button>→</button>
              </div>
            </div>
          </div>
          <div className="ft-bottom">
            <p>© {yr} RecipeGarage. All rights reserved.</p>
            <div className="ft-socials">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="Twitter">tw</a>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="#top"
        className={`btt${show ? " on" : ""}`}
        onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        aria-label="Back to top"
      >↑</a>
    </>
  );
};
export default FooterSection;
