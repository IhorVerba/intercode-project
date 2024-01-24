import { CarouselMain } from "../CarouselMain/CarouselMain";
import { useEffect } from "react";
import { News } from "../News/News";
import { ProductList } from "../ProductList";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home">
      <CarouselMain />
      <ProductList />

      <News />
    </div>
  );
};
