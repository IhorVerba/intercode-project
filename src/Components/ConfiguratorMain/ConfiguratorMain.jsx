import "./ConfiguratorMain.scss";
import { useParams } from "react-router-dom";
import { productsData } from "../../api/products";
import { colors } from "../../api/products";
import { useState } from "react";

export const ConfiguratorMain = () => {
  const { id } = useParams();
  const car = productsData.find((c) => c.id === parseInt(id));

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
  
  const totalPrice =
  car.price + configuration.selectedColor.price + configuration.selectedWheel.price;
  
  return (
    <div className="ConfiguratorMain">
      <div className="ConfiguratorMain__container">
        <div className="ConfiguratorMain__imageContainer">
          {/* <img src={`/Configurator/${car.imgConfig}`} alt={`${car.name}`} /> */}
          {/* <img src={`/Configurator/${selectedColor.imgConfig}`}alt={`${car.name}`} /> */}
          {/* <img src={`/Configurator/${car.models[0].white[0].wheel_1.src}`} alt={`${car.name}`} /> */}
          <img src={configuration.imagePath} alt={`${car.name}`} />
        </div>
        <div className="ConfiguratorMain__optionsContainer">
          <div className="ConfiguratorMain__optionsWrapper">
            <p className="ConfiguratorMain__optionsTitle">Обрати колір</p>
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
              <b>{`UAH ${configuration.selectedColor.price}`}</b>
              <p></p>
            </div>
          </div>

          <div className="ConfiguratorMain__optionsWrapper">
            <p className="ConfiguratorMain__optionsTitle">Обрати колеса</p>
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
              <b>{`UAH ${configuration.selectedWheel.price}`}</b>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="ConfiguratorMain__footer">
        <div>
          <span>
            Загальна ціна: <b>UAH {totalPrice}</b>
          </span>
        </div>
      </div>
    </div>
  );
};
