import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="section-bottom shadow-sm bg-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <h2 className="bodyMedium">Legals</h2>
              <p className="my-2">
                <Link className="nav-link" to="/">
                  About
                </Link>
              </p>
              <p className="my-2">
                <Link className="nav-link" to="/">
                  Refund Policy
                </Link>
              </p>
              <p className="my-2">
                <Link className="nav-link" to="/">
                  Terms
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <h1 className="bodyMedium">Information</h1>
              <p className="my-2">
                <Link className="nav-link" to="/">
                  How to buy
                </Link>
              </p>
              <p className="my-2">
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </p>
              <p className="my-2">
                <Link className="nav-link" to="/">
                  Complain
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <h1 className="bodyMedium">About</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </p>
              <img
                className="w-75"
                src="https://thumbs.dreamstime.com/z/delhi-india-february-popular-credit-card-companies-logos-including-mastercard-visa-american-express-more-211749084.jpg?ct=jpeg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark py-3 text-center">
        <p className="text-white bodySmal">
          &copy; Jahid Hasan - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
