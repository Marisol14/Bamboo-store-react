import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />
    </div>
  );
};

export default App;


