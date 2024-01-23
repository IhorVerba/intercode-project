/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Header.scss";
import Logo from "../../assets/icons/1024px-Volkswagen_logo_2019.svg.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Header = ({ onClickMenu }) => {

  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const nextLanguage = i18n.language === "en" ? "uk" : "en";
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <header className="Header">
      <div className="container">
        <div className="Header__top top-bar">
          <div className="top-bar__icons">
            <div onClick={onClickMenu} className="icon icon--menu"></div>
          </div>
          <div className="top-bar__text">{t("menu")}</div>
          <button className="top-bar__button" onClick={changeLanguage}>{t("toggleLanguage")}</button>
          <Link to="/" className="top-bar__logo">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
      </div>
    </header>
  );
};
