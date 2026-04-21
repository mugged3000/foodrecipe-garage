import React from "react";

const items = [
  { title:"Classic Burger",   image:"/icetea.webp",        tag:"Fan Favourite" },
  { title:"Margherita Pizza", image:"/maki.webp",          tag:"Bestseller"    },
  { title:"Chicken Wrap",     image:"/side-view.webp",     tag:"Healthy Pick"  },
  { title:"Fresh Salad",      image:"/buger3.webp",        tag:"Light & Fresh" },
  { title:"French Fries",     image:"/coffe.webp",         tag:"Classic Side"  },
  { title:"Iced Coffee",      image:"/drinks-fruit.webp",  tag:"Top Drink"     },
  { title:"Fruit Smoothie",   image:"/delicuos.webp",      tag:"Refreshing"    },
  { title:"Fried Chicken",    image:"/spag.webp",          tag:"Crispy & Hot"  },
  { title:"Cheese Sandwich",  image:"/close-up.webp",      tag:"Quick Bite"    },
  { title:"Chocolate Cake",   image:"/snacks2.webp",       tag:"Sweet Treat"   },
];

const PopularMenu = ({ searchTerm }) => {
  const filtered = items.filter(f =>
    f.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="section" style={{ background:"var(--bg3)" }}>
      <div className="blob" style={{ width:350,height:350,background:"rgba(224,92,58,0.07)",bottom:-80,left:-80 }} />
      <div className="wrap z1">
        <div className="sec-head">
          <div className="eyebrow">Most Loved</div>
          <h2 className="sec-title">Search Your <em>Favourite</em></h2>
          <p className="sec-sub">Our most-ordered items — loved by thousands of happy customers.</p>
        </div>

        <div className="popular-grid">
          {filtered.map((item, i) => (
            <div key={i} className="popular-card">
              <div className="popular-card-img img-wrap">
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
              </div>
              <div className="popular-card-body">
                <div className="popular-card-tag">{item.tag}</div>
                <h4 className="popular-card-title">{item.title}</h4>
                <div className="popular-card-love">❤️ Most Loved</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
