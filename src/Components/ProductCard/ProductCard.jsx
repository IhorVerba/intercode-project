import { Link } from "react-router-dom";
import "./ProductCard.scss";

export const ProductCard = ({ product: { id, name, img } }) => {
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
        <p className="ProductCard__title-item">{name}</p>
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
