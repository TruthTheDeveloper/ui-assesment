import React from "react";



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
            src={'https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/logoImage.svg?alt=media&token=06dd11fc-597a-42dd-8d21-29f672b7ad78'}
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
            <PicCard image={'https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Rectangle%201270.png?alt=media&token=bc467910-a60b-4b25-9799-77c44e4429e7'} />
          </div>
          <div className="center__mosiac-picture">
            <PicCard image={'https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Rectangle%201271.png?alt=media&token=a58278ee-fe6e-4b56-8c2a-2c7309df4211'} />
          </div>
          <div className="topright__mosiac-picture">
            <PicCard image={'https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Rectangle3.svg?alt=media&token=910e625d-425c-4d61-aeca-541efe95fe20'} />
          </div>
          <div className="bottomleft__mosiac-picture">
            <PicCard image={'https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Rectangle4.svg?alt=media&token=9855105a-9f7a-4ad3-917b-e0ea2ee0767b'} />
          </div>
          <div className="bottomright__mosiac-picture">
            <PicCard image={'https://firebasestorage.googleapis.com/v0/b/naruto-208e5.appspot.com/o/Rectangle%201274.png?alt=media&token=43c76242-4cca-4d8e-8dab-8a0440a55d55'} />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
