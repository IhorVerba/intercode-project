import "./ConfiguratorMain.scss";
import { useParams } from "react-router-dom";
import { productsData } from "../../api/products";
import Golf from "../../assets/images/Configurator/golf-black-w16.png";

import Grey from "../../assets/images/Configurator/color-grey.png";
import White from "../../assets/images/Configurator/color-white.png";
import Black from "../../assets/images/Configurator/color-black.png";

const BASE_URL = "../../assets/images/Configurator/";

export const ConfiguratorMain = () => {
  const { id } = useParams();
  const car = productsData.find((c) => c.id === parseInt(id));
  return (
    <div className="ConfiguratorMain">
      <div className="ConfiguratorMain__container">
        <div className="ConfiguratorMain__imageContainer">
          <img src={Golf} alt="golf" />
        </div>
        {/* <img src={`${BASE_URL}${car.wheels.img}`} alt={`${car.name}`} /> */}
        <img src={`/Configurator/${car.wheels[0].img}`} alt={`${car.name}`} />
        <p>Current name is {car.name}</p> 
        <p>Current id is {car.id}</p> 
        <div className="ConfiguratorMain__optionsContainer">
          <p className="ConfiguratorMain__optionsTitle">Колір</p>
          <div className="ConfiguratorMain__optionsColors">
            <ul>
              <li label="grey">
                <img src={Grey} label="grey" alt="Grey" />
              </li>
              <li>
                <img src={White} alt="White" />
              </li>
              <li>
                <img src={Black} alt="Wlack" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// const CarDetailsPage = () => {
//   const { id } = useParams();
//   const car = cars.find(c => c.id === parseInt(id));
//   if (!car) {
//     return <div>Машина не знайдена</div>;
//   }
//   return (
//     <div>
//       <h1>{`${car.brand} ${car.model}`}</h1>
//       <p>{car.details}</p>
//     </div>
//   );
// }
