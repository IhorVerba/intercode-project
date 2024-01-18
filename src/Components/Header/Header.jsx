/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import "./Header.scss";
import Logo from '../../assets/icons/1024px-Volkswagen_logo_2019.svg.png'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <div className="Header__top top-bar">
          <div className="top-bar__icons">
            <a href="#menu" class="icon icon--menu"></a>
          </div>
          <div className="top-bar__text">
            Меню
          </div>
          <Link to="/" className="top-bar__logo">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
      </div>
    </header>
  );
};
