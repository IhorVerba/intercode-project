import { CarouselMain } from "../CarouselMain/CarouselMain";
import { News } from "../News/News";
import { ProductList } from "../ProductList";

export const Home = () => {
  return (
    <div className="Home">
      <CarouselMain />
      <ProductList />

      <News />
    </div>
  );
};
