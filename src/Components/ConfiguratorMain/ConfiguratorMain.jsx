import "./ConfiguratorMain.scss";
import { useParams } from "react-router-dom";
import { productsData } from "../../api/products";
import { colors } from "../../api/products";
import Golf from "../../assets/images/Configurator/golf-black-w16.png";

export const ConfiguratorMain = () => {
  const { id } = useParams();
  const car = productsData.find((c) => c.id === parseInt(id));
  return (
    <div className="ConfiguratorMain">
      <div className="ConfiguratorMain__container">
        <div className="ConfiguratorMain__imageContainer">
          <img src={Golf} alt="golf" />
          <img src={`/Configurator/${car.img}`} alt={`${car.name}`} />
          {/* <span>Current name is {car.name}</span> */}
          {/* <span>Current id is {car.id}</span> */}
        </div>
        <div className="ConfiguratorMain__optionsContainer">
          <div className="ConfiguratorMain__optionsWrapper">
            <p className="ConfiguratorMain__optionsTitle">Обрати колір</p>
            <div className="ConfiguratorMain__options">
              <ul>
                {colors.map((color, index) => (
                  <li key={index}>
                    <img src={`/Configurator/${color.img}`} alt={color.name} />
                  </li>
                ))}
              </ul>
            </div>
              <div className="ConfiguratorMain__options--text">
                {`COLOR NAME `}
                <b>{`UAH COLOR PRICE`}</b>
                <p></p>
              </div>
          </div>

          <div className="ConfiguratorMain__optionsWrapper">
            <p className="ConfiguratorMain__optionsTitle">Обрати колеса</p>
            <div className="ConfiguratorMain__options">
              <ul>
                {car.wheels.map((wheel, index) => (
                  <li className="ConfiguratorMain__wheels" key={index}>
                    <img
                      src={`/Configurator/wheels/${wheel.src}`}
                      alt={wheel.label}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="ConfiguratorMain__options--text">
                {`Wheel NAME `}
                <b>{`UAH WHEEL PRICE`}</b>
                <p></p>
              </div>
          </div>
        </div>
      </div>
      <div className="ConfiguratorMain__footer">
        <div>
          <span>
            Загальна ціна: <b>UAH {car.price}</b>
          </span>
        </div>
      </div>
    </div>
  );
};
