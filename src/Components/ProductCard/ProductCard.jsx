import { Link } from "react-router-dom";
import "./ProductCard.scss";
import { useTranslation } from "react-i18next";

export const ProductCard = ({ product: { id, name, img } }) => {
  const { t } = useTranslation();

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
        <Link to={`/configurator/${id}`} className="ProductCard__buttonText">
          {t("cardButtonText_1")}
        </Link>
      </div>
      <div className="ProductCard__button">
        <Link to={`/configurator/${id}`} className="ProductCard__buttonText">
          {t("cardButtonText_2")}
        </Link>
      </div>
    </div>
  );
};
