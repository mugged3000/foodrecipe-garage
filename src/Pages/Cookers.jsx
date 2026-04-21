import React from "react";
import { Link } from "react-router-dom";

// External iStock URLs replaced with local WebP assets to eliminate
// cross-origin latency and avoid broken images if iStock blocks hotlinking.
const Chef = [
  { id:1, img:"/buger2.webp",     name:"Smith Aren",    experience:"21 years", specialty:"Grill Master",  rating:"4.9", dishes:142, quote:"Cooking is love made visible." },
  { id:2, img:"/side-view.webp",  name:"Susan Lithiua", experience:"9 years",  specialty:"Pastry Chef",   rating:"4.7", dishes:89,  quote:"Baking is science, pastry is art." },
  { id:3, img:"/delicuos.webp",   name:"Arrevin Kuan",  experience:"8 years",  specialty:"Asian Fusion",  rating:"4.8", dishes:117, quote:"Flavour has no boundaries." },
];

const STATS = [
  { value:"15+", label:"Years Combined Experience" },
  { value:"3",   label:"Expert Chefs on Team"       },
  { value:"300+",label:"Dishes Mastered"            },
  { value:"4.8", label:"Average Rating"             },
];

const ChefCookers = () => (
  <>
    {/* ══════════════════════════════
        CHEFS SECTION
    ══════════════════════════════ */}
    <section className="section" style={{ background:"var(--bg2)" }}>
      <div className="blob" style={{ width:400,height:400,background:"rgba(240,165,0,0.08)",top:-80,right:-100 }} />
      <div className="wrap z1">
        <div className="sec-head">
          <div className="eyebrow">The Team</div>
          <h2 className="sec-title">Meet Our <em>Chefs</em></h2>
          <p className="sec-sub">Passionate culinary artists who pour their heart into every dish they create.</p>
        </div>

        <div className="chefs-grid">
          {Chef.map(chef => (
            <div key={chef.id} className="chef-card">
              <div className="chef-avatar img-wrap">
                <img
                  src={chef.img}
                  alt={chef.name}
                  loading="lazy"
                  width="400"
                  height="300"
                  onLoad={e => {
                    e.target.classList.add("loaded");
                    e.target.closest(".img-wrap")?.classList.add("img-loaded");
                  }}
                />
              </div>
              <div className="chef-body">
                <div className="chef-specialty">{chef.specialty}</div>
                <h3 className="chef-name">{chef.name}</h3>
                <p className="chef-quote">"{chef.quote}"</p>
                <div className="chef-meta">
                  <span>🕐 {chef.experience}</span>
                  <span>🍽 {chef.dishes} dishes</span>
                  <span>⭐ {chef.rating}</span>
                </div>
                <Link to={`/chef/${chef.id}`} className="btn-ghost" style={{ width:"100%", justifyContent:"center", marginTop:20 }}>
                  View Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════════════════════
        TEAM STATS
    ══════════════════════════════ */}
    <section className="section" style={{ background:"var(--bg)" }}>
      <div className="wrap z1">
        <div className="sec-head">
          <div className="eyebrow">By The Numbers</div>
          <h2 className="sec-title">Our Team <em>At a Glance</em></h2>
        </div>
        <div className="team-stats">
          {STATS.map(s => (
            <div key={s.label} className="team-stat-card">
              <div className="team-stat-value">{s.value}</div>
              <div className="team-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════════════════════
        JOIN THE TEAM CTA
    ══════════════════════════════ */}
    <section className="section" style={{ background:"var(--bg2)" }}>
      <div className="wrap z1" style={{ textAlign:"center", maxWidth:640, margin:"0 auto" }}>
        <div className="eyebrow">Careers</div>
        <h2 className="sec-title">Love <em>Cooking?</em></h2>
        <p className="sec-sub" style={{ margin:"0 auto 36px" }}>
          We're always on the lookout for passionate chefs to join our growing team. Apply today.
        </p>
        <Link to="/contact" className="btn-amber" style={{ display:"inline-flex" }}>
          Apply Now →
        </Link>
      </div>
    </section>
  </>
);

export default ChefCookers;
