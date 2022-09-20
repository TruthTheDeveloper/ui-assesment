import React from "react";
import Logo2 from "../../images/Logo2.svg";

const Footer = () => {
  return (
    <section id="footer" className="footer__container">
      <div className="footer__content-logo">
        <div>
          <img src={Logo2} />
        </div>
        <p className="footer__content-logo-text">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
        <p>All rights reserved.</p>
      </div>
      <div>
        <h1>Landings</h1>
        <div className="footer__content">
          <p>Home</p>
          <p>Product</p>
          <p>Services</p>
        </div>
      </div>
      <div>
        <h1>Company</h1>
        <div className="footer__content">
          <p>Home</p>
          <p>
            Careers <span className="footer__span">Hiring!</span>
          </p>
          <p>Services</p>
        </div>
      </div>
      <div>
        <h1>Resources</h1>
        <div className="footer__content">
          <p>Blog</p>
          <p>Products</p>
          <p>Services</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
