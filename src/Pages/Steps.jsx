import React, { useState } from "react";
import { Link } from "react-router-dom";

const burgerSteps = [
  { title:"Gather Ingredients",  desc:"Ground beef, salt, pepper, buns, cheese, lettuce, tomato, onion, pickles, and your favourite sauces.", icon:"🛒", time:"5 min" },
  { title:"Prepare the Patties", desc:"Shape ground beef into patties slightly larger than your buns — they'll shrink while cooking.", icon:"🥩", time:"5 min" },
  { title:"Season Generously",   desc:"Sprinkle both sides with salt and freshly cracked black pepper. Don't be shy.", icon:"🧂", time:"2 min" },
  { title:"Preheat the Grill",   desc:"Heat your grill or cast iron pan to medium-high heat before adding the patties.", icon:"🔥", time:"5 min" },
  { title:"Cook the Patties",    desc:"Grill 3–4 minutes per side. Add cheese after flipping if you want it melted just right.", icon:"🍳", time:"8 min" },
  { title:"Toast the Buns",      desc:"Lightly butter and toast buns cut-side down until golden brown. This step is non-negotiable.", icon:"🍞", time:"2 min" },
  { title:"Assemble the Burger", desc:"Layer: bun → sauce → lettuce → patty → cheese → tomato → onion → pickles → top bun.", icon:"🍔", time:"3 min" },
  { title:"Add Condiments",      desc:"Apply ketchup, mustard, mayo, sriracha — whatever speaks to your soul.", icon:"🧴", time:"1 min" },
  { title:"Serve & Enjoy",       desc:"Serve hot alongside crispy fries or a fresh salad. You earned this.", icon:"🎉", time:"0 min" },
];

const TIPS = [
  { icon:"🌡️", tip:"Use a meat thermometer — 160°F for well-done." },
  { icon:"🧊",  tip:"Keep patties cold until they hit the grill." },
  { icon:"🧀",  tip:"Add cheese in the last 60 seconds for perfect melt." },
  { icon:"🛑",  tip:"Never press the patty while cooking — you'll lose the juices." },
];

const Steps = () => {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* ══════════════════════════════
          STEPS SECTION
      ══════════════════════════════ */}
      <section className="section" style={{ background:"var(--bg)" }}>
        <div className="blob" style={{ width:500,height:500,background:"rgba(240,165,0,0.08)",top:-120,right:-150 }} />
        <div className="blob" style={{ width:300,height:300,background:"rgba(224,92,58,0.06)",bottom:-80,left:-80 }} />
        <div className="wrap z1">
          <div className="sec-head">
            <div className="eyebrow">How It's Done</div>
            <h2 className="sec-title">Step-by-Step <em>Recipe</em></h2>
            <p className="sec-sub">Follow these 9 steps and you'll have the most perfect burger you've ever made. Tap a step to expand it.</p>
          </div>

          {/* Recipe meta bar */}
          <div className="recipe-meta">
            {[{l:"Total Time",v:"~31 min"},{l:"Difficulty",v:"Easy"},{l:"Servings",v:"2–4 people"},{l:"Cuisine",v:"American"}].map(d => (
              <div key={d.l} className="recipe-meta-item">
                <div className="recipe-meta-value">{d.v}</div>
                <div className="recipe-meta-label">{d.l}</div>
              </div>
            ))}
          </div>

          {/* Steps grid */}
          <div className="steps-grid">
            {burgerSteps.map((step, i) => (
              <div
                key={i}
                className={`step-card${active === i ? " active" : ""}`}
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="step-header">
                  <div className={`step-icon${active === i ? " active" : ""}`}>{step.icon}</div>
                  <div>
                    <div className="step-meta">Step {i+1} · {step.time}</div>
                    <h3 className="step-title">{step.title}</h3>
                  </div>
                </div>
                <p className={`step-desc${active === i ? " open" : ""}`}>
                  {active === i ? step.desc : `${step.desc.slice(0,60)}…`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PRO TIPS
      ══════════════════════════════ */}
      <section className="section" style={{ background:"var(--bg2)" }}>
        <div className="wrap z1">
          <div className="sec-head">
            <div className="eyebrow">Chef Secrets</div>
            <h2 className="sec-title">Pro <em>Tips</em></h2>
            <p className="sec-sub">Little tricks that make a big difference in your final result.</p>
          </div>
          <div className="tips-grid">
            {TIPS.map((t,i) => (
              <div key={i} className="tip-card">
                <div className="tip-icon">{t.icon}</div>
                <p className="tip-text">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA — try more recipes
      ══════════════════════════════ */}
      <section className="section" style={{ background:"var(--bg3)" }}>
        <div className="wrap z1" style={{ textAlign:"center", maxWidth:600, margin:"0 auto" }}>
          <div className="eyebrow">Hungry for More?</div>
          <h2 className="sec-title">Explore Our Full <em>Menu</em></h2>
          <p className="sec-sub" style={{ margin:"0 auto 36px" }}>
            Now that you've mastered the burger, dive into our full food menu and discover more flavours.
          </p>
          <Link to="/food" className="btn-amber" style={{ display:"inline-flex" }}>
            Browse All Foods →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Steps;
