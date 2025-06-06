
import React from "react";

const TopSeller = [
  {
    image: "/buger5.jpg",
    text: "Rancho Burger",
    taste: "Delicious Burger",
    price: 1400,
    order: "Order Now"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrsswSWK6sU0-Qczvehd0lz7Yoi_FBgU1HA&s",
    text: "Meat Smash Burger",
    taste: "Has a special taste",
    price: 1500,
    order: "Order Now"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsne0cQsj4aHG8cO5_HR9UsvaVhvZwuwtSQw&s",
    text: "Foodish's Burger",
    taste: "Good & Yummy",
    price: 1900,
    order: "Order Now"
  }
];

const BurgerCard = ({searchTerm}) => {
  const filteredFoods = TopSeller.filter((food) =>
    food.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section className="py-5 animate__animated animate__fadeIn">
      <div className="container-fluid">
        <h2 className="text-center mb-5 fw-bold animate__animated animate__fadeInDown">
          Top Sellers
        </h2>

        <div className="row g-4 justify-content-center">
          {filteredFoods.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-4 d-flex animate__animated animate__zoomIn animate__delay-1s"
            >
              <div className="card-hover h-100 shadow-sm rounded-5 border-0 w-100 custom-bottom-rounded">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.text}
                  style={{
                    height: "150px",
                    objectFit: "cover",
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem"
                  }}
                />
                <div className="card-body text-center d-flex flex-column bg-white">
                  <h5
                    className="card-title mb-2 fw-bold"
                    style={{ color: "orange" }}
                  >
                    {item.text}
                  </h5>
                  <p className="card-text text-muted mb-3">{item.taste}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 fw-bold" style={{ color: "black" }}>
                      ${(item.price / 100).toFixed(2)}
                    </h5>
                    <button className="btn btn-primary rounded-pill">
                      {item.order}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    
  );
};

export default BurgerCard;
