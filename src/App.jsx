import './App.scss';
import { Aside } from "./Components/Aside";
import { CarouselMain } from "./Components/CarouselMain/CarouselMain";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header";
import { ImportantInfo } from "./Components/ImportantInfo";
import { News } from "./Components/News/News";
import { ProductList } from './Components/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      

      <main className="main">
          <CarouselMain />
          <ProductList />

          <div className="section__verticalLine"></div>

          <News />

          <div className="section__verticalLine"></div>
          
          <ImportantInfo />
      </main>

      <Footer />
    </div>
  );
}

export default App;
