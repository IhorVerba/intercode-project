import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import React from 'react';
import App from './App';


export const Root = () => (
  <Router>
    <Routes>
      <Route
        path="/home"
        element={<Navigate to="/" replace />}
      />

      <Route
        path="/"
        element={(
          <App />
        )}
      >
        
      </Route>
    </Routes>
  </Router>
);