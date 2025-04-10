import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from "../components/Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceana'];
  const [selectedRadio, setSelectedRadio] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => setData(res.data));
  }, []);

  // Fermer le menu automatiquement quand l’écran devient plus large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.id);
    setMenuOpen(false); // Ferme le menu après sélection
  };

  return (
    <div>
      {/* Icône burger visible uniquement sur mobile */}
      <div className="md:hidden flex justify-end px-4 py-2">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-green-600 text-2xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Menu de filtres - visible sur desktop ou sur mobile quand menuOpen est true */}
      {(menuOpen || window.innerWidth >= 768) && (
        <ul className="flex flex-col md:flex-row w-[90%] justify-around bg-green-400 mx-auto p-4 rounded-2xl text-white font-bold mb-4 shadow-md gap-4 transition-all duration-300">
          {/* Input range */}
          <div className="flex flex-col items-center">
            <input
              type="range"
              min="1"
              max="250"
              value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
              className="w-full md:w-48"
            />
            <span className="text-sm mt-1">Valeur : {rangeValue}</span>
          </div>

          {/* Radios */}
          <div className="flex flex-col md:flex-row gap-2 items-center">
            {radios.map((continent, index) => (
              <li key={index} className="list-none flex items-center gap-1">
                <input
                  type="radio"
                  id={continent}
                  name="continentRadio"
                  onChange={handleRadioChange}
                  checked={continent === selectedRadio}
                  className="accent-white"
                />
                <label htmlFor={continent}>{continent}</label>
              </li>
            ))}
          </div>

          {/* Bouton annuler */}
          {selectedRadio && (
            <button
              onClick={() => setSelectedRadio('')}
              className="bg-white text-green-600 px-3 py-1 rounded-full shadow hover:bg-green-100 transition"
            >
              Annuler la recherche
            </button>
          )}
        </ul>
      )}

      {/* Liste des cartes pays */}
      <ul className="flex flex-wrap gap-3 mx-auto w-[100vw] justify-center">
        {data
          .filter((country) =>
            selectedRadio ? country.continents[0].includes(selectedRadio) : true
          )
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
