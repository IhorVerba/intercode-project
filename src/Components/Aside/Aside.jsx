/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from "react-router-dom";
import "./Aside.scss";

export const Aside = () => {
  return (
    <aside class="menu" id="menu">
      <div class="container">
        <div class="menu__top top-bar">
          <div class="top-bar__icons">
            <a href="#header" class="icon icon--cross"></a>
          </div>
          <div className="top-bar__text--menu">Закрити</div>
        </div>

        <nav class="menu__nav">
          <ul class="menu__nav-list">
            <li class="menu__list-item">
              <Link to="#header" class="menu__nav-link">
                Головна
              </Link>
            </li>

            <li class="menu__list-item">
              <a href="123" class="menu__nav-link">
                Модельний ряд
              </a>
            </li>

            <li class="menu__list-item">
              <a href="#news" class="menu__nav-link">
                Новини
              </a>
            </li>

            <li class="menu__list-item">
              <a href="123" class="menu__nav-link">
                Сервіси та ексесуари 
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
