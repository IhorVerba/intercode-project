/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from "react-router-dom";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer class="Footer">
      <div class="container">
        <div class="Footer__content">
          <div class="Footer__section Footer__section--navlist">
            <nav>
              <ul class="Footer__navlist">
                <li class="Footer__navlist-item">
                  <a href="#header" class="Footer__link Footer__title">
                    Volkswagen
                  </a>
                </li>

                <li class="Footer__navlist-item">
                  <Link to="configurator" class="Footer__link">
                    Спеціальні пропозиції
                  </Link>
                </li>

                <li class="Footer__navlist-item">
                  <a href="#events" class="Footer__link">
                    Новини
                  </a>
                </li>

                <li class="Footer__navlist-item">
                  <a href="#news" class="Footer__link">
                    Склад авто в Україні
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="Footer__section Footer__section--navlist">
          <nav>
              <ul class="Footer__navlist">
                <li class="Footer__navlist-item">
                  <p class="Footer__title">
                    Сервіс
                  </p>
                </li>

                <li class="Footer__navlist-item">
                  <Link to="not-found" class="Footer__link">
                    Пошук дилера
                  </Link>
                </li>

                <li class="Footer__navlist-item">
                  <Link to="not-found" class="Footer__link">
                    Відгуки та пропозиції
                  </Link>
                </li>

                <li class="Footer__navlist-item">
                  <Link to="not-found" class="Footer__link">
                    Підписка на новини 
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="Footer__section Footer__section--navlist">
          <nav>
              <ul class="Footer__navlist">
                <li class="Footer__navlist-item">
                  <a href="#header" class="Footer__link Footer__title">
                    Підтримка
                  </a>
                </li>

                <li class="Footer__navlist-item">
                  <a href="#exhibitions" class="Footer__link">
                    Volkswagen в Україні
                  </a>
                </li>

                <li class="Footer__navlist-item">
                  <a href="#events" class="Footer__link">
                    Конфіденційність персональних данних
                  </a>
                </li>

                <li class="Footer__navlist-item">
                  <a href="#news" class="Footer__link">
                    Система повідомлення порушень
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

// {/* <div class="Footer__copyright">
//   <p class="Footer__copyright-paragraph">© ТОВ "Порше Україна" 2023</p>
//   <a href="#134" class="Footer__link">
//     Privacy — Terms
//   </a>
// </div>
// <a href="#123" class="Footer__scroll-up"></a> */}

// <div class="Footer__section Footer__section--contacts">
//   <h5 class="Footer__title">Соціальні мережі</h5>
//   <ul>
//     <li>
//       <a
//         href="123"
//         target="_blank"
//         class="Footer__link" rel="noreferrer"
//       >
//       </a>
//     </li>

//     <li>
//       <a href="tel:278-13-57" class="Footer__link">тел. 278-13-57,</a>
//       <a href="tel:278-74-54" class="Footer__link">278-74-54</a>
//     </li>

//     <li>
//       <a href="mailto:info@namu.kyiv.ua" class="Footer__link">info@namu.kyiv.ua</a>
//     </li>
//   </ul>
//   <div class="Footer__social-links">
//     <a
//       href="https://www.facebook.com/namu.museum/?locale=uk_UA"
//       target="_blank"
//       class="Footer__social-link" rel="noreferrer"
//     >
//       <img src="images/facebook.png" alt="facebook" />
//     </a>
//     <a
//       href="https://twitter.com/NAMU_120/status/1655573073775456257"
//       target="_blank"
//       class="Footer__social-link" rel="noreferrer"
//     >
//       <img src="images/twitter.png" alt="twitter" />
//     </a>
//     <a
//       href="https://t.me/s/namu_museum120"
//       target="_blank"
//       class="Footer__social-link" rel="noreferrer"
//     >
//       <img src="images/telegram.png" alt="telegram" />
//     </a>
//     <a
//       href="https://www.instagram.com/namu.museum/"
//       target="_blank"
//       class="Footer__social-link" rel="noreferrer"
//     >
//       <img src="images/instagram.png" alt="instagram" />
//     </a>
//   </div>
// </div>