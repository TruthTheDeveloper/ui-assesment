import React from "react";



const Footer = () => {
  return (
    <section id="footer" className="footer__container">
      <div className="footer__content-logo">
        <div>
          <img src={'https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/logoImage2.svg?alt=media&token=d2a486ac-b201-4fce-8385-797bb18be2a6'} loading="lazy"/>
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
