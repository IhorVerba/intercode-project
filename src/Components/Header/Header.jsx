import React from "react";
import "./Header.scss";
import Logo from "../../assets/icons/vwlogo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Header = ({ onClickMenu }) => {
  const { t, i18n } = useTranslation();

  const changeLanguageUK = () => {
    const nextLanguage = i18n.language === "en" ? "uk" : "";
    i18n.changeLanguage(nextLanguage);
  };

  const changeLanguageEN = () => {
    const nextLanguage = i18n.language === "uk" ? "en" : "";
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <header className="Header">
      <div className="container">
        <div className="Header__top top-bar">
          <div className="top-bar__icons">
            <div onClick={onClickMenu} className="icon icon--menu"></div>
            <div className="top-bar__text">{t("menu")}</div>
          </div>
          <button
            className={`top-bar__button ${
              i18n.language === "uk" ? "selected" : ""
            }`}
            onClick={changeLanguageUK}
          >
            {t("toggleLanguageUK")}
          </button>
          <button
            className={`top-bar__button ${
              i18n.language === "en" ? "selected" : ""
            }`}
            onClick={changeLanguageEN}
          >
            {t("toggleLanguageEN")}
          </button>
          <Link to="/" className="top-bar__logo">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
      </div>
    </header>
  );
};
