import { Link } from "react-router-dom";
import "./Aside.scss";
import { useTranslation } from "react-i18next";

export const Aside = ({ closeMenu }) => {
  const { t } = useTranslation();

  return (
    <aside className="menu">
      <div className="container">
        <div className="menu__top top-bar">
          <div className="top-bar__icons">
            <div className="icon icon--cross" onClick={closeMenu}></div>
            <div className="top-bar__text--menu">{t("close")}</div>
          </div>
        </div>

        <nav className="menu__nav">
          <ul className="menu__nav-list">
            <li className="menu__list-item">
              <Link to="/" className="menu__nav-link" onClick={closeMenu}>
                {t("home")}
              </Link>
            </li>

            <li className="menu__list-item">
              <Link
                to="not-found"
                className="menu__nav-link"
                onClick={closeMenu}
              >
                {t("modelRange")}
              </Link>
            </li>

            <li className="menu__list-item">
              <Link to="/" className="menu__nav-link" onClick={closeMenu}>
                {t("news")}
              </Link>
            </li>

            <li className="menu__list-item">
              <Link
                to="not-found"
                className="menu__nav-link"
                onClick={closeMenu}
              >
                {t("servicesAndAccessories")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
