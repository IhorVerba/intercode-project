import {
  Route,
  Routes,
} from 'react-router-dom';
import "./App.scss";
import { Aside } from "./Components/Aside";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header";
import { Home } from './Components/Home/Home';
import { ConfiguratorMain } from './Components/ConfiguratorMain/ConfiguratorMain';
import { NotFoundPage } from './Components/NotFoudPage/NotFoundPage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Aside />

      <main className="main-content">
        <div className="main-content__container">
          
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/not-found" element={<NotFoundPage />}/>
            <Route path="/configurator/:id" element={<ConfiguratorMain />} />
          </Routes>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
