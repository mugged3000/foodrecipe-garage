
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Chef = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/1095131624/photo/homemade-hamburgers-on-electric-grill.jpg?s=2048x2048&w=is&k=20&c=6gpFBXvPSBlEygyn25O9V17o1dTBNs1J6VBNcuriwQ0=",
    name: "Smith Aren",
    experience: "21 years of experience",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/1281058607/photo/cooking-for-internet-vlogg.webp?s=612x612&w=is&k=20&c=7DvArnFYuBYBeydvrXYQLW6WbVpey5-fCbPo6p-ESdQ=",
    name: "Susan Lithiua",
    experience: "9 years of experience",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/690900360/photo/young-adult-preparing-meal-in-the-kitchen.jpg?s=2048x2048&w=is&k=20&c=b_GKpzQdIUwbYFJ8Ps34-aS-qRqL-JCh8PngJ0S1WbU=",
    name: "Arrevin Kuan",
    experience: "8 years of experience",
  },
];

const ChefCookers = () => {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <h2 className="text-center pb-3" style={{ color: "black" }}>
          See Who Cooks For You 👩‍🍳👨‍🍳
        </h2>

        <div className="row g-4 justify-content-center">
          {Chef.map((user) => (
            <div key={user.id} className="col-12 col-sm-6 col-md-4 col-lg-4 card-hover">
              <div 
                className="card h-100 shadow-sm text-center animate__animated animate__fadeInUp"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <img
                  src={user.img}
                  className="card-img-top mx-auto mt-3"
                  alt={user.name}
                  style={{
                    width: "190px",
                    height: "190px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    transition: "transform 0.4s ease"
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mt-3" style={{ color: "orange" }}>
                    {user.name}
                  </h5>
                  <p className="card-text text-muted mb-4">{user.experience}</p>
                  <Link to={`/chef/${user.id}`} className="btn btn-primary mt-auto">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefCookers;
