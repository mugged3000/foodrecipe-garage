
import React from "react";
import useScrollToResult from "../Pages/PageScroll"
import PopularMenu from "../Component/PopularItems"
const FoodsStore = [
  { title: "Burger", image: "/rice1.jpg" },
  { title: "Burger", image: "/rice2.jpg" },
  { title: "Burger", image: "/rice3.jpg" },
  { title: "Pizza", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeo_JMT1ZvwUNMHneItLQcNgYbwRsSs2mqYA&s" },
  { title: "Salad", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4EkloJlvBMpQabC7FkJQQCC9C1syzqmqhMg&s" },
  { title: "Fries", image: "https://sausagemaker.com/wp-content/uploads/Homemade-French-Fries_8.jpg" },
  { title: "Drinks", image: "/drinks.jpg" },
  { title: "Snacks", image: "/snacks1.jpg" }
];

const FoodCard = ({searchTerm}) => {
  const menuRef = useScrollToResult(searchTerm);
  const filteredFoods = FoodsStore.filter((food) =>
    food.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
   <>
    <section className="py-5">
      <div className="container-fluid">
        <h2 className="text-center pb-4" style={{ color: "orange", fontWeight: "bold" }}>
        FOOD GARRAGE 😂😂 🍕🍔🍟
        </h2>
        <div className="row g-4 justify-content-center">
          {filteredFoods.map((food, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 card-hover">
              <div
                className="card shadow-sm border-0 rounded-4 animate__animated animate__fadeInUp h-100"
                style={{
                  minHeight: "320px", 
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={food.image}
                  className="card-img-top img-fluid"
                  alt={food.title}
                  style={{
                    height: "220px", 
                    objectFit: "cover",
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                />
                <div
                  className="card-body text-center p-3"
                  style={{
                    backgroundColor: "#fff",
                    borderBottomLeftRadius: "1rem",
                    borderBottomRightRadius: "1rem",
                  }}
                >
                  <h6
                    className="card-title mb-0"
                    style={{ color: "orange", fontSize: "1.2rem", fontWeight: "bold" }}
                  >
                    {food.title}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div ref={menuRef}>
   <PopularMenu searchTerm={searchTerm}/>
   </div>
   </>
  );
};

export default FoodCard;
