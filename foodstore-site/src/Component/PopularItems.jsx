


import React from "react";

const popularItems = [
  { title: "Classic Burger", image: "/icetea.jpg" },
  { title: "Margherita Pizza", image: "/maki.jpg" },
  { title: "Chicken Wrap", image: "/side-view.jpg" },
  { title: "Fresh Salad", image: "/buger3.jpg" },
  { title: "French Fries", image: "/coffe.jpg" },
  { title: "Iced Coffee", image: "/drinks-fruit.jpg" },
  { title: "Fruit Smoothie", image: "/delicuos.jpg" },
  { title: "Fried Chicken", image: "/spag.jpg" },
  { title: "Cheese Sandwich", image: "/close-up.jpg" },
  { title: "Chocolate Cake", image: "/snacks2.jpg" },
];

const PopularMenu = ({searchTerm}) => {
  const filteredFoods = popularItems.filter((food) =>
    food.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section className="py-5">
      <div className="container-fluid">
        <h2 className="text-center mb-5 fw-bold" style={{ color: "orange" }}>
         SEARCH YOUR FAVORITE FOOD 😂😂 🍕🍔🍟
        </h2>
        <div className="row g-4 justify-content-center">
          {filteredFoods.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm border-0 rounded-4 popular-card">
                <img
                  src={item.image}
                  className="card-img-top img-fluid"
                  alt={item.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                />
                <div className="card-body text-center">
                  <h6 className="card-title fw-bold" style={{ color: "red" }}>
                    {item.title}
                  </h6>
                  <p className="text-muted">Most Loved ❤️</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
