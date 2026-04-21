import React from "react";
import { Link } from "react-router-dom";
import useScrollToResult from "./PageScroll";
import PopularMenu from "../Component/PopularItems";

// All images now point to local optimised WebP files.
// External Google thumbnail URLs have been replaced with local assets
// that are visually similar (same food category).
const FoodsStore = [
  { title:"Burger",  image:"/rice1.webp",  desc:"Juicy, flame-grilled perfection",  price:"₦1,400" },
  { title:"Burger",  image:"/rice2.webp",  desc:"Double patty smash burger",         price:"₦1,800" },
  { title:"Burger",  image:"/rice3.webp",  desc:"BBQ ranch classic",                 price:"₦1,600" },
  { title:"Pizza",   image:"/maki.webp",   desc:"Stone-baked Margherita",            price:"₦2,200" },
  { title:"Salad",   image:"/delicuos.webp", desc:"Fresh garden greens",             price:"₦900"   },
  { title:"Fries",   image:"/snacks1.webp", desc:"Crispy golden fries",              price:"₦600"   },
  { title:"Drinks",  image:"/drinks.webp", desc:"Cold refreshing beverages",         price:"₦500"   },
  { title:"Snacks",  image:"/close-up.webp", desc:"Crunchy bites & sides",           price:"₦700"   },
];

const FoodCard = ({ searchTerm }) => {
  const menuRef = useScrollToResult(searchTerm);

  const filtered = FoodsStore.filter(f =>
    f.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section className="section" style={{ background:"var(--bg)" }}>
        <div className="blob" style={{ width:500,height:500,background:"rgba(240,165,0,0.09)",top:-150,right:-150 }} />
        <div className="wrap z1">
          <div className="sec-head">
            <div className="eyebrow">Our Menu</div>
            <h2 className="sec-title">Food <em>Garage</em></h2>
            <p className="sec-sub">Everything on our menu is made fresh, every single day. No compromises.</p>
          </div>

          <div className="food-grid">
            {filtered.map((food, i) => (
              <div key={i} className="food-card">
                <div className="food-card-img img-wrap">
                  <img
                    src={food.image}
                    alt={food.title}
                    loading="lazy"
                    width="400"
                    height="280"
                    onLoad={e => {
                      e.target.classList.add("loaded");
                      e.target.closest(".img-wrap")?.classList.add("img-loaded");
                    }}
                  />
                </div>
                <div className="food-card-body">
                  <h3 className="food-card-title">{food.title}</h3>
                  <p className="food-card-desc">{food.desc}</p>
                  <div className="food-card-footer">
                    <span className="food-card-price">{food.price}</span>
                    <button className="btn-amber" style={{ padding:"9px 18px", fontSize:".84rem" }}>
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          DAILY SPECIALS
      ══════════════════════════════ */}
      <section className="section" style={{ background:"var(--bg2)" }}>
        <div className="wrap z1">
          <div className="sec-head">
            <div className="eyebrow">Limited Time</div>
            <h2 className="sec-title">Today's <em>Specials</em></h2>
            <p className="sec-sub">Fresh deals updated daily — don't miss out.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:20 }}>
            {[
              { emoji:"🔥", title:"Burger Combo Deal", desc:"Burger + Fries + Drink for just ₦2,200", tag:"Save 20%" },
              { emoji:"🍕", title:"Pizza Family Pack", desc:"2 large pizzas + 2 drinks for ₦5,500",   tag:"Save 15%" },
              { emoji:"🥤", title:"Drinks Bundle",     desc:"Any 3 drinks for the price of 2",        tag:"Hot Deal" },
            ].map(d => (
              <div key={d.title} style={{
                background:"var(--card)", border:"1px solid var(--border)",
                borderRadius:"var(--r-xl)", padding:"28px 24px", transition:"var(--t)",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="var(--amber)"; e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow="var(--shadow-amber)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=""; }}
              >
                <div style={{ fontSize:"2.5rem", marginBottom:14 }}>{d.emoji}</div>
                <div style={{ background:"var(--amber-g)", color:"var(--amber)", border:"1px solid rgba(240,165,0,.3)", borderRadius:50, padding:"3px 12px", fontSize:".72rem", fontFamily:"var(--ff-mono)", fontWeight:700, letterSpacing:".1em", display:"inline-block", marginBottom:12 }}>{d.tag}</div>
                <h3 style={{ fontFamily:"var(--ff-display)", fontSize:"1.1rem", fontWeight:700, color:"var(--ink)", marginBottom:8 }}>{d.title}</h3>
                <p style={{ color:"var(--ink3)", fontSize:".9rem", lineHeight:1.65, marginBottom:20 }}>{d.desc}</p>
                <button className="btn-amber" style={{ width:"100%", justifyContent:"center" }}>Claim Deal →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div ref={menuRef}>
        <PopularMenu searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default FoodCard;
