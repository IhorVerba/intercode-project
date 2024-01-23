import { CarouselMain } from "../CarouselMain/CarouselMain";
import { ImportantInfo } from "../ImportantInfo";
import { News } from "../News/News";
import { ProductList } from "../ProductList";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  return (
    <div className="Home">
      
      <CarouselMain />
      <ProductList />

      {/* <div className="section__verticalLine"></div> */}

      <News />

      {/* <div className="section__verticalLine"></div> */}

      {isEnglish && <ImportantInfo />}
    </div>
  );
};
