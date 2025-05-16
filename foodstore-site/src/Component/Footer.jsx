
import React from "react";

const FooterSection = () => {
  return (

    <footer className=" bg-color  text-light mt-5 ">
      <div className="container-fluid text-center">
        <div className="row mx-0">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-light">Our Story</a>
              </li>
              <li>
                <a href="#!" className="text-light">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Recipe Categories</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-light">Breakfast</a>
              </li>
              <li>
                <a href="#!" className="text-light">Lunch</a>
              </li>
              <li>
                <a href="#!" className="text-light">Dinner</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Social Media</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-light">Facebook</a>
              </li>
              <li>
                <a href="#!" className="text-light">Instagram</a>
              </li>
              <li>
                <a href="#!" className="text-light">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Subscribe</h5>
            <p>Get the latest recipes and updates!</p>
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
                <button className="btn btn-outline-light" type="button" id="button-addon2">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        <p>&copy; 2023 Recipe Book. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
