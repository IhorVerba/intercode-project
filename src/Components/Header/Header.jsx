/* eslint-disable jsx-a11y/anchor-has-content */
import "./Header.scss";
import Logo from '../../assets/icons/1024px-Volkswagen_logo_2019.svg.png'

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
          <img className="top-bar__logo" src={Logo} alt="" />
        </div>
      </div>
    </header>
  );
};
