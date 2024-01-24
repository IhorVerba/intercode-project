import "./ConfiguratorMain.scss";
import { useParams } from "react-router-dom";
import { productsData } from "../../api/products";
import { colors } from "../../api/products";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const ConfiguratorMain = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const car = productsData.find((c) => c.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const buildImagePath = (model, color, wheel) => {
    return `/Configurator/${model[color.value][0][wheel.value].src}`;
  };

  const [configuration, setConfiguration] = useState({
    selectedColor: car.color[0],
    selectedWheel: car.wheels[0],
    imagePath: buildImagePath(car.models[0], car.color[0], car.wheels[0]),
  });
  
  
  const handleColorChange = (color) => {
    setConfiguration((prevConfig) => ({
      ...prevConfig,
      selectedColor: color,
      imagePath: buildImagePath(car.models[0], color, prevConfig.selectedWheel),
    }));
  };
  
  const handleWheelChange = (wheel) => {
    setConfiguration((prevConfig) => ({
      ...prevConfig,
      selectedWheel: wheel,
      imagePath: buildImagePath(car.models[0], prevConfig.selectedColor, wheel),
    }));
  };

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  } 
  
  const totalPrice =
  car.price + configuration.selectedColor.price + configuration.selectedWheel.price;
  
  return (
    <div className="ConfiguratorMain">
      <div className="ConfiguratorMain__container">
        <div className="ConfiguratorMain__imageContainer">
          <img src={configuration.imagePath} alt={`${car.name}`} />
        </div>
        <div className="ConfiguratorMain__optionsContainer">
          <div className="ConfiguratorMain__optionsWrapper">
            <p className="ConfiguratorMain__optionsTitle">{t("configuratorColor")}</p>
            <div className="ConfiguratorMain__options">
              <ul>
                {colors.map((color, index) => (
                  <li
                    key={index}
                    onClick={() => handleColorChange(color)}
                    className={color === configuration.selectedColor ? "selected" : ""}
                  >
                    <img src={`/Configurator/${color.img}`} alt={color.name} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="ConfiguratorMain__options--text">
              {`${configuration.selectedColor.label} `}
              <b>{`UAH ${formatNumber(configuration.selectedColor.price)}`}</b>
              <p></p>
            </div>
          </div>

          <div className="ConfiguratorMain__optionsWrapper">
            <p className="ConfiguratorMain__optionsTitle">{t("configuratorWheels")}</p>
            <div className="ConfiguratorMain__options">
              <ul>
                {car.wheels.map((wheel, index) => (
                  <li
                    key={index}
                    onClick={() => handleWheelChange(wheel)}
                    className={wheel === configuration.selectedWheel ? "selected" : ""}
                  >
                    <img
                      src={`/Configurator/wheels/${wheel.src}`}
                      alt={wheel.label}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="ConfiguratorMain__options--text">
              {`${configuration.selectedWheel.label} `}
              <b>{`UAH ${formatNumber(configuration.selectedWheel.price)}`}</b>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="ConfiguratorMain__footer">
        <div>
          <span>
          {t("configuratorPrice")} <b>UAH {formatNumber(totalPrice)}</b>
          </span>
        </div>
      </div>
    </div>
  );
};
