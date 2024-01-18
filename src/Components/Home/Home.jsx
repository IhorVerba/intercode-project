import { CarouselMain } from "../CarouselMain/CarouselMain";
import { ImportantInfo } from "../ImportantInfo";
import { News } from "../News/News";
import { ProductList } from "../ProductList";

export const Home = () => {
  return (
    <div className="Home">
      <CarouselMain />
      <ProductList />

      <div className="section__verticalLine"></div>

      <News />

      <div className="section__verticalLine"></div>

      <ImportantInfo />
    </div>
  );
};
