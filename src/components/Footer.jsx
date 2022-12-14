import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="container grid-12 text-grey">
        <nav>
          <a href="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/shared/desktop/logo.svg`}
              alt=""
              className="logo"
            />
          </a>
          <div className="nav-links text-light">
            <a href="/" className="link link-primary">
              Home
            </a>
            <a href="/categories/headphones" className="link link-primary">
              Headphones
            </a>
            <a href="/categories/speakers" className="link link-primary">
              Speakers
            </a>
            <a href="/categories/earphones" className="link link-primary">
              Earphones
            </a>
          </div>
        </nav>
        <p className="about">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="social">
          <a href="https://github.com/fidelbanks66" className="social-button">
            <img
              src={`${process.env.PUBLIC_URL}/images/shared/desktop/icon-facebook.svg`}
              alt="fb"
            />
          </a>
          <a href="https://github.com/fidelbanks66" className="social-button">
            <img
              src={`${process.env.PUBLIC_URL}/images/shared/desktop/icon-twitter.svg`}
              alt="tw"
            />
          </a>
          <a href="https://github.com/fidelbanks66" className="social-button">
            <img
              src={`${process.env.PUBLIC_URL}/images/shared/desktop/icon-instagram.svg`}
              alt="insta"
            />
          </a>
        </div>
        <a
          className="build-by"
          href="https://github.com/Fidelbanks66"
          target="blank"
        >
          Built with React by Fidelis
        </a>
      </div>
    </footer>
  );
};

export default Footer;
