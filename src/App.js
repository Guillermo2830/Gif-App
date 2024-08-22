import React, { useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route, useLocation } from 'wouter';
import SearchBar from './components/SearchBar';

function App() {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();

  const handleReset = () => {
    setKeyword(''); // Resetea el estado del keyword
    pushLocation('/'); // Vuelve a la página principal
  };

  return (
    <div className="App">
      <section className="App-content">

      <div className='menu-content'>
      <h1>GIF APP</h1>

      {keyword && (
          <button onClick={handleReset} className="reset-button">
          +
        </button>
      )}
     

      <SearchBar keyword={keyword} setKeyword={setKeyword}/>

      {/*
        <Link to='/gif/colombia'>Gifs de Colombia</Link>
        <Link to='/gif/rick'>Gifs de Rick</Link>
        <Link to='/gif/valorant'>Gifs de valorant</Link>
      */} 

      </div>
  
      <Route
        component={ListOfGifs}
        path="/gif/:keyword"
      />

      </section>
    </div>
  );
}

export default App;
