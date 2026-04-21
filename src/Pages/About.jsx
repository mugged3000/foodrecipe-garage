import React from "react";
import { Link } from "react-router-dom";

// External iStock thumbnail URLs have been replaced with local WebP assets
// to avoid cross-origin fetch latency and unreliable third-party URLs.
const TopSeller = [
  { image:"/buger5.webp",     text:"Rancho Burger",    taste:"Smoky, rich & indulgent",   price:1400, badge:"🏆 #1 Seller" },
  { image:"/buger4.webp",     text:"Meat Smash Burger", taste:"Crispy edges, juicy centre", price:1500, badge:"🔥 Hot Pick"   },
  { image:"/buger3.webp",     text:"Foodish's Burger",  taste:"Good & Yummy classic",       price:1900, badge:"⭐ Premium"   },
];

const REVIEWS = [
  { name:"Chisom A.", stars:5, text:"Best burger I've ever had. The Rancho is absolutely divine!" },
  { name:"David O.",  stars:5, text:"Fast delivery, hot food, amazing taste. Will definitely order again." },
  { name:"Ngozi M.",  stars:4, text:"The smash burger was perfectly crispy. Great value for money." },
];

const BurgerCard = ({ searchTerm }) => {
  const filtered = TopSeller.filter(f =>
    f.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* ══════════════════════════════
          TOP SELLERS
      ══════════════════════════════ */}
      <section className="section" style={{ background:"var(--bg)" }}>
        <div className="blob" style={{ width:450,height:450,background:"rgba(240,165,0,0.09)",top:-100,left:-150 }} />
        <div className="wrap z1">
          <div className="sec-head">
            <div className="eyebrow">Best Of The Best</div>
            <h2 className="sec-title">Top <em>Sellers</em></h2>
            <p className="sec-sub">Our most-ordered items — tried, tested, and absolutely loved by our regulars.</p>
          </div>

          <div className="sellers-grid">
            {filtered.map((item, i) => (
              <div key={i} className="seller-card">
                <div className="seller-badge">{item.badge}</div>
                <div className="seller-img img-wrap">
                  <img
                    src={item.image}
                    alt={item.text}
                    loading="lazy"
                    width="500"
                    height="380"
                    onLoad={e => {
                      e.target.classList.add("loaded");
                      e.target.closest(".img-wrap")?.classList.add("img-loaded");
                    }}
                  />
                </div>
                <div className="seller-body">
                  <h3 className="seller-title">{item.text}</h3>
                  <p className="seller-taste">{item.taste}</p>
                  <div className="seller-footer">
                    <span className="seller-price">₦{item.price.toLocaleString()}</span>
                    <button className="btn-amber" style={{ padding:"10px 22px" }}>Order Now →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CUSTOMER REVIEWS
      ══════════════════════════════ */}
      <section className="section" style={{ background:"var(--bg2)" }}>
        <div className="wrap z1">
          <div className="sec-head">
            <div className="eyebrow">What People Say</div>
            <h2 className="sec-title">Customer <em>Reviews</em></h2>
            <p className="sec-sub">Real feedback from people who've tried our food.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:22 }}>
            {REVIEWS.map((r,i) => (
              <div key={i} style={{
                background:"var(--card)", border:"1px solid var(--border)",
                borderRadius:"var(--r-xl)", padding:"28px 26px", transition:"var(--t)",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="var(--border2)"; e.currentTarget.style.transform="translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform=""; }}
              >
                <div style={{ display:"flex", gap:3, marginBottom:14 }}>
                  {[...Array(r.stars)].map((_,si) => <span key={si} style={{ color:"var(--amber)", fontSize:"1rem" }}>⭐</span>)}
                </div>
                <p style={{ fontFamily:"var(--ff-display)", fontStyle:"italic", color:"var(--ink2)", fontSize:"1rem", lineHeight:1.75, marginBottom:18 }}>"{r.text}"</p>
                <div style={{ fontWeight:700, color:"var(--ink)", fontSize:".9rem" }}>— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA
      ══════════════════════════════ */}
      <section className="section" style={{ background:"var(--bg3)", textAlign:"center" }}>
        <div className="wrap z1" style={{ maxWidth:580, margin:"0 auto" }}>
          <div className="eyebrow">Ready to Order?</div>
          <h2 className="sec-title">Taste the <em>Difference</em></h2>
          <p className="sec-sub" style={{ margin:"0 auto 36px" }}>
            Don't just read about it — place your order now and experience the flavour yourself.
          </p>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <Link to="/food" className="btn-amber">Order Now →</Link>
            <Link to="/cookers" className="btn-ghost">Meet the Chefs</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BurgerCard;
