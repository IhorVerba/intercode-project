import { Link } from "react-router-dom";
import "./ProductCard.scss";

export const ProductCard = ({ product: { id, name, buttonLink, img } }) => {
  return (
    <div className="ProductCard">
      <div className="ProductCard__photo">
        <img
          src={`/CarModels2/${img}`}
          alt="Product"
          className="ProductCard__photo-item"
        />
      </div>
      <div className="ProductCard__title">
        <h4 className="ProductCard__title-item">{name}</h4>
      </div>
      <div className="ProductCard__button">
        <Link to={`/configurator/${id}`}>Огляд моделі</Link>
      </div>
      <div className="ProductCard__button">
        <Link to={`/configurator/${id}`}>Сконфігурувати</Link>
      </div>
    </div>
  );
};
