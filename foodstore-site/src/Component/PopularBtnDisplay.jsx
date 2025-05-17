

import React, { useState } from "react";
const popularCartgory = [
    { title: "Classic Burger", image: "/foodrecipe-garage/icetea.jpg", category: "Burger", rating: 5 },
    { title: "Margherita Pizza", image: "/foodrecipe-garage/maki.jpg", category: "Pizza", rating: 4 },
    { title: "Chicken Wrap", image: "/foodrecipe-garage/rice3.jpg", category: "Snacks", rating: 4 },
    { title: "Fresh Salad", image: "/foodrecipe-garage/buger3.jpg", category: "Snacks", rating: 3 },
    { title: "French Fries", image: "/foodrecipe-garage/coffe.jpg", category: "Snacks", rating: 5 },
    { title: "Iced Coffee", image: "/foodrecipe-garage/drinks-fruit.jpg", category: "Drinks", rating: 4 },
    { title: "Fruit Smoothie", image: "/foodrecipe-garage/delicuos.jpg", category: "Drinks", rating: 5 },
    { title: "Fried Chicken", image: "/foodrecipe-garage/spag.jpg", category: "Burger", rating: 4 },
    { title: "Cheese Sandwich", image: "/foodrecipe-garage/close-up.jpg", category: "Snacks", rating: 3 },
    { title: "Chocolate Cake", image: "/foodrecipe-garage/side-view.jpg", category: "Dessert", rating: 5 },
    { title: "Chocolate Cake", image: "/foodrecipe-garage/rice4.jpg", category: "Dessert", rating: 5 },
    { title: "Chocolate Cake", image: "/foodrecipe-garage/rice5.jpg", category: "Dessert", rating: 5 },
    { title: "Chocolate Cake", image: "/foodrecipe-garage/rice6.jpg", category: "Dessert", rating: 5 },
  ];
  
  

  const PopularBtnPage = ({ searchTerm }) => {
    const [selectedCategory, setSelectedCategory] = useState("All"); 
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
  
    const filteredFoods = popularCartgory.filter((food) => {
      const matchesSearch = food.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || food.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  
    return (
      <section className="py-5">
        <div className="container-fluid">
          <h2 className="text-center mb-5 fw-bold" style={{ color: "orange" }}>
            Popular Menu 🍕🍔🍟
          </h2>
  
          {/* Category Buttons */}
          <div className="text-center mb-4">
            {["All", "Burger", "Pizza", "Drinks", "Snacks", "Dessert"].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className="btn btn-outline-warning m-2"
              >
                {category}
              </button>
            ))}
          </div>
  
          {/* Food Cards */}
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
  
                    
                    <p>
                      {"⭐".repeat(item.rating)}
                    </p>
  
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
  
  export default PopularBtnPage;
  