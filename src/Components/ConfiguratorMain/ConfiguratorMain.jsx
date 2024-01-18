import "./ConfiguratorMain.scss";

import Golf from "../../assets/images/Configurator/golf-black.png";

export const ConfiguratorMain = () => {
  return (
    <div className="ConfiguratorMain">
      <div className="ConfiguratorMain__container">
        <div className="ConfiguratorMain__imageContainer">
          <img src={Golf} alt="golf" />
        </div>
        <div className="ConfiguratorMain__optionsContainer">
          <p className="ConfiguratorMain__optionsTitle"></p>
          <ul>
            
          </ul>
        </div>
      </div>
    </div>
  );
};
