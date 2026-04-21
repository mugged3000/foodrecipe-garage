import React from "react";
import { Link } from "react-router-dom";
import useScrollToResult from "./PageScroll";
import PopularBtnPage from "../Component/PopularBtnDisplay";

const FEATURES = [
  { icon: "🥬", title: "Farm Fresh",    desc: "Ingredients sourced daily from local farms." },
  { icon: "⚡", title: "Fast Delivery", desc: "Hot food at your door in under 30 minutes." },
  { icon: "👨‍🍳", title: "Expert Chefs",  desc: "Trained culinary artists behind every dish." },
  { icon: "🌟", title: "5-Star Rated",  desc: "Over 2,400 happy customers and counting." },
];

const Mainsection = ({ searchTerm }) => {
  const menuRef = useScrollToResult(searchTerm);

  return (
    <>
      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="hero-section">
        <div className="blob" style={{ width:600, height:600, background:"rgba(240,165,0,0.08)", top:-150, right:-200 }} />
        <div className="blob" style={{ width:300, height:300, background:"rgba(224,92,58,0.07)", bottom:-80, left:-100 }} />
        <div className="hero-grid-lines" />

        <div className="wrap z1 hero-wrap">
          <div className="hero-grid">

            {/* LEFT — text */}
            <div className="hero-text">
              <div className="eyebrow" style={{ marginBottom: 20 }}>🔥 Now Serving</div>

              <h1 className="hero-h1">
                Yummy <em>Tasty</em><br />Burger in Town
              </h1>

              <div className="hero-badges">
                {[{l:"Best Seller",c:"var(--green)"},{l:"Hot Deal",c:"var(--amber)"},{l:"Limited Offer",c:"var(--red)"}].map(b => (
                  <span key={b.l} className="hero-badge" style={{ color:b.c, background:`${b.c}20`, border:`1px solid ${b.c}40` }}>
                    {b.l}
                  </span>
                ))}
              </div>

              <p className="hero-p">
                Fresh premium ingredients, crafted with passion. Every bite tells a story of flavour, fire and dedication.
              </p>

              <ul className="hero-features">
                {["Fresh Ingredients Daily","Lightning Fast Delivery","24/7 Customer Support"].map(f => (
                  <li key={f}>
                    <span className="check">✓</span> {f}
                  </li>
                ))}
              </ul>

              <div className="hero-btns">
                <Link to="/food" className="btn-amber">Explore Menu →</Link>
                <Link to="/steps" className="btn-ghost">View Recipes</Link>
              </div>
            </div>

            {/* RIGHT — image: eager + fetchpriority=high = instant LCP */}
            <div className="hero-img-side">
              <div className="hero-img-frame img-wrap img-loaded">
                <img
                  src="/buger6.webp"
                  alt="Burger"
                  loading="eager"
                  fetchpriority="high"
                  width="600"
                  height="500"
                  className="loaded"
                />
              </div>
              <div className="hero-float-badge">
                <div className="badge-icon">🍔</div>
                <div>
                  <div className="badge-title">Premium Burgers</div>
                  <div className="badge-sub">⭐ 4.9 · 2.4k reviews</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════ */}
      <section className="section" style={{ background:"var(--bg2)" }}>
        <div className="blob" style={{ width:400,height:400,background:"rgba(240,165,0,0.07)",top:-100,left:-100 }} />
        <div className="wrap z1">
          <div className="sec-head">
            <div className="eyebrow">Why Us</div>
            <h2 className="sec-title">More Than Just <em>Food</em></h2>
            <p className="sec-sub">We combine great taste with great service — every single time.</p>
          </div>
          <div className="features-grid">
            {FEATURES.map(f => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          POPULAR MENU
      ══════════════════════════════ */}
      <div ref={menuRef}>
        <PopularBtnPage searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default Mainsection;
