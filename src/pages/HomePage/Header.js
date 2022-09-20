import React from "react";

//Images
import logo from "../../images/logo.svg";
import RectangleImage1 from "../../images/Rectangle-1.svg";
import RectangleImage2 from "../../images/Rectangle-2.svg";
import RectangleImage3 from "../../images/Rectangle-3.svg";
import RectangleImage4 from "../../images/Rectangle-4.svg";
import RectangleImage5 from "../../images/Rectangle-5.svg";

//CSS
import "../HomePage.css";

//components
import PicCard from "../../components/PicCard";

const Header = () => {
  return (
    <header id="header" className="header__color">
      <section id="Navbar" className="navbar__style">
        <div>
          <img
            src={logo}
            style={{ width: "6rem", padding: ".5rem", marginTop: ".2rem" }}
          />
        </div>
        <ul className="nav__link">
          <li className="nav__link-list">
            <a>Product</a>
          </li>
          <li className="nav__link-list">
            <a>Service</a>
          </li>
          <li className="nav__link-list">
            <a>About</a>
          </li>
          <button className="nav__link-button">Log in</button>
        </ul>
      </section>

      <section id="header__content">
        <div className="header__content-text">
          <p className="header__text-1">
            We love to make great <br /> things, things that matter.
          </p>
          <p className="header__text-2">
            Funding handshake buyer business to business metrics iPad
            partnership, first mover advantage
          </p>
          <p className="header__text-2">
            innovator success deployment non disclosure
          </p>
        </div>
      </section>

      <section id="header__pictures">
        <div className="mosiac__pictures">
          <div className="topleft__mosiac-picture">
            <PicCard image={RectangleImage1} />
          </div>
          <div className="center__mosiac-picture">
            <PicCard image={RectangleImage2} />
          </div>
          <div className="topright__mosiac-picture">
            <PicCard image={RectangleImage3} />
          </div>
          <div className="bottomleft__mosiac-picture">
            <PicCard image={RectangleImage4} />
          </div>
          <div className="bottomright__mosiac-picture">
            <PicCard image={RectangleImage5} />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
