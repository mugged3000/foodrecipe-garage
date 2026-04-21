import React, { useState } from "react";

const items = [
  { title:"Classic Burger",   image:"/icetea.webp",        category:"Burger",  rating:5, price:"₦1,400" },
  { title:"Margherita Pizza", image:"/maki.webp",          category:"Pizza",   rating:4, price:"₦2,200" },
  { title:"Chicken Wrap",     image:"/rice3.webp",         category:"Snacks",  rating:4, price:"₦1,100" },
  { title:"Fresh Salad",      image:"/buger3.webp",        category:"Snacks",  rating:3, price:"₦900"   },
  { title:"French Fries",     image:"/coffe.webp",         category:"Snacks",  rating:5, price:"₦600"   },
  { title:"Iced Coffee",      image:"/drinks-fruit.webp",  category:"Drinks",  rating:4, price:"₦800"   },
  { title:"Fruit Smoothie",   image:"/delicuos.webp",      category:"Drinks",  rating:5, price:"₦1,000" },
  { title:"Fried Chicken",    image:"/spag.webp",          category:"Burger",  rating:4, price:"₦1,800" },
  { title:"Cheese Sandwich",  image:"/close-up.webp",      category:"Snacks",  rating:3, price:"₦750"   },
  { title:"Chocolate Cake",   image:"/side-view.webp",     category:"Dessert", rating:5, price:"₦1,500" },
  { title:"Rice Bowl",        image:"/rice4.webp",         category:"Dessert", rating:5, price:"₦1,200" },
  { title:"Special Rice",     image:"/rice5.webp",         category:"Dessert", rating:5, price:"₦1,300" },
];

const CATS = ["All","Burger","Pizza","Drinks","Snacks","Dessert"];

const PopularBtnPage = ({ searchTerm }) => {
  const [cat, setCat] = useState("All");

  const filtered = items.filter(f => {
    const matchSearch = f.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = cat === "All" || f.category === cat;
    return matchSearch && matchCat;
  });

  return (
    <section className="section" style={{ background:"var(--bg2)" }}>
      <div className="blob" style={{ width:400,height:400,background:"rgba(240,165,0,0.08)",top:-100,right:-100 }} />
      <div className="wrap z1">
        <div className="sec-head">
          <div className="eyebrow">Explore</div>
          <h2 className="sec-title">Popular <em>Menu</em></h2>
          <p className="sec-sub">Filter by category and find your next favourite meal.</p>
        </div>

        <div className="menu-filter-row">
          {CATS.map(c => (
            <button
              key={c}
              className={`menu-filter-btn${cat === c ? " active" : ""}`}
              onClick={() => setCat(c)}
            >{c}</button>
          ))}
        </div>

        <div className="menu-grid">
          {filtered.map((item, i) => (
            <div key={i} className="menu-card">
              <div className="menu-card-img img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width="320"
                  height="220"
                  onLoad={e => {
                    e.target.classList.add("loaded");
                    e.target.closest(".img-wrap")?.classList.add("img-loaded");
                  }}
                />
                <div className="menu-card-rating">{"⭐".repeat(item.rating)}</div>
              </div>
              <div className="menu-card-body">
                <div className="menu-card-cat">{item.category}</div>
                <h3 className="menu-card-title">{item.title}</h3>
                <div className="menu-card-footer">
                  <span className="menu-card-price">{item.price}</span>
                  <button className="btn-amber" style={{ padding:"8px 16px", fontSize:".82rem" }}>
                    Order →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBtnPage;
