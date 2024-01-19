/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import "./Header.scss";
import Logo from '../../assets/icons/1024px-Volkswagen_logo_2019.svg.png'
import { Link } from "react-router-dom";

export const Header = () => {
  const handleClick = () => {
    window.location.href = "#menu";
  };

  return (
    <header className="Header">
      <div className="container">
        <div className="Header__top top-bar">
          <div className="top-bar__icons">
            <div onClick={handleClick} className="icon icon--menu"></div>
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
