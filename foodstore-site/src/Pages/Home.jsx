

import React from "react";
import useScrollToResult from "../pages/PageScroll"
import PopularBtnPage from "../Component/PopularBtnDisplay"; 


const Mainsection = ({searchTerm}) => {
  const menuRef = useScrollToResult(searchTerm);

  return (
   <>
   
   <section className="text-light pt-5 pb-5 p-lg-0">
      <div className="container-fluid">
        <div className="bg-secondary row align-items-center rounded">
          
          
          <div className="col-lg-6 col-md-6 col-12 p-lg-5 p-md-4 p-3 order-lg-1 order-md-1 order-2">
            <h2 className="fs-2 fw-bold mb-3">
              Yummy tasty <br />🍔 <span style={{ color: "orange" }}>burger</span> in town
            </h2>
            
            <div className="mb-4">
              <span className="badge bg-success me-2 animate__animated animate__fadeInDown">Best Seller</span>
              <span className="badge bg-warning text-dark me-2 animate__animated animate__fadeInDown animate__delay-1s">Hot Deal</span>
              <span className="badge bg-danger animate__animated animate__fadeInDown animate__delay-2s">Limited Offer</span>
            </div>

            <p className="lead fs-5 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>

            {/* Feature Points */}
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>Fresh Ingredients
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>Fast Delivery
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>24/7 Support
              </li>
            </ul>

            {/* Buttons */}
            <div className="d-flex flex-column flex-lg-row flex-md-row align-items-center justify-content-center justify-content-lg-start justify-content-md-start">
              <button 
                type="button" 
                className="btn btn-primary btn-lg me-lg-3 me-md-3 mb-2 mb-lg-0 mb-md-0" 
                style={{ minWidth: '200px', transition: "0.3s" }}
              >
                Recipe Page
              </button>
              <button 
                type="button" 
                className="btn btn-success btn-lg" 
                style={{ minWidth: '200px', transition: "0.3s" }}
              >
                Recipe Adventure
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6 col-md-6 col-12 text-center order-lg-2 order-md-2 order-1">
            <img 
              src="/foodrecipe-garage/buger6.jpg" 
              className="img-fluid rounded w-100 animate__animated animate__zoomIn" 
              style={{ maxHeight: '450px', objectFit: 'cover' }} 
              alt="burger" 
            />
          </div>

        </div>
      </div>
    </section>
    <div ref={menuRef}>
        <PopularBtnPage searchTerm={searchTerm} />
      </div>
   </>
     
   
  );
};

export default Mainsection;
