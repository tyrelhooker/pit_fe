import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Pencil from './components/Pencil';
import pencilsService from './services/pencils';
import './App.css';

function App() {
  const [pencils, setPencils] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    pencilsService
      .getAll()
      .then(initialPencils => setPencils(initialPencils))
      .catch(error => {
        setMessage(`${error}: Failed to retrieve pencils.`);
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
  }, [searchResult]);

  const handleSearch = (searchInput) => {
    const addSearchResult = (result) => {
      const foundPencilCo = result();
      setSearchResult(foundPencilCo);
    };

    const findPencilCo = () => {
      searchInput = searchInput.toUpperCase();
      return pencils.filter(pencil => pencil.company.toUpperCase().includes(searchInput));
    }

    const noPencilCoFound = () => {
      return console.log('No pencil company found');
    }

    findPencilCo
      ? addSearchResult(findPencilCo)
      : noPencilCoFound();
  }

  return (
    <div className="App">
      <h1>Pencil Inventory Tracker</h1>
      <h2>Manufacturer/Company Name Search</h2>
      <Filter handleSearch={handleSearch} searchResult={searchResult} />
      <h3>Results</h3>
      <Pencil searchResult={searchResult} />
    </div>
  );
}

export default App;
