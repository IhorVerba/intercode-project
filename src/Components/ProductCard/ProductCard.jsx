import "./ProductCard.scss";

export const ProductCard = ({ product: { name, buttonLink, img } }) => {
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
        <a href={buttonLink}>Огляд моделі</a>
      </div>
      <div className="ProductCard__button">
        <a href={buttonLink}>Сконфігурувати</a>
      </div>
    </div>
  );
};

// import { AddToFavButton } from '../AddToFavButton';
// import { AddToCartButton } from '../AddToCartButton';

// {/* <div className="ProductCard__buttons">
// <AddToCartButton product={product} />

// <AddToFavButton product={product} />
// </div> */}

