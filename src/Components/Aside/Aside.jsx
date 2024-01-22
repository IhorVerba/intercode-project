/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from "react-router-dom";
import "./Aside.scss";



export const Aside = () => {
  const closeMenu = () => {
    window.location.hash = "";
  };
  
  return (
    <aside class="menu" id="menu">
      <div class="container">
        <div class="menu__top top-bar">
          <div className="top-bar__icons">
            <Link to="/" className="icon icon--cross" onClick={closeMenu}></Link>
          </div>
          <div className="top-bar__text--menu">Закрити</div>
        </div>

        <nav class="menu__nav">
          <ul class="menu__nav-list">
            <li class="menu__list-item">
              <Link to="/" class="menu__nav-link" onClick={closeMenu}>
                Головна
              </Link>
            </li>

            <li class="menu__list-item">
              <Link to="not-found" class="menu__nav-link" onClick={closeMenu}>
                Модельний ряд
              </Link>
            </li>

            <li class="menu__list-item">
              <Link to="/" class="menu__nav-link" onClick={closeMenu}>
                Новини
              </Link>
            </li>

            <li class="menu__list-item">
              <Link to="not-found" class="menu__nav-link" onClick={closeMenu}>
                Сервіси та ексесуари 
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
