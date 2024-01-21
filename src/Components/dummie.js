// App.js
import React from ‘react’;
import { BrowserRouter as Router, Route, Link, Switch } from ‘react-router-dom’;
import MainPage from ‘./MainPage’;
import CarDetailsPage from ‘./CarDetailsPage’;
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to=“/”>Головна</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path=“/” exact component={MainPage} />
          <Route path=“/car/:id” component={CarDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;


// MainPage.js
import React from ‘react’;
import { Link } from ‘react-router-dom’;
const cars = [
  { id: 1, brand: ‘Toyota’, model: ‘Camry’ },
  { id: 2, brand: ‘Honda’, model: ‘Civic’ },
  // Додайте інші машини
];
const MainPage = () => {
  return (
    <div>
      <h1>Список машин</h1>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <Link to={`/car/${car.id}`}>{`${car.brand} ${car.model}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MainPage;


// CarDetailsPage.js
import React from ‘react’;
import { useParams } from ‘react-router-dom’;
const cars = [
  { id: 1, brand: ‘Toyota’, model: ‘Camry’, details: ‘Деталі про Toyota Camry’ },
  { id: 2, brand: ‘Honda’, model: ‘Civic’, details: ‘Деталі про Honda Civic’ },
  // Додайте інші машини
];
const CarDetailsPage = () => {
  const { id } = useParams();
  const car = cars.find(c => c.id === parseInt(id));
  if (!car) {
    return <div>Машина не знайдена</div>;
  }
  return (
    <div>
      <h1>{`${car.brand} ${car.model}`}</h1>
      <p>{car.details}</p>
    </div>
  );
}
export default CarDetailsPage;