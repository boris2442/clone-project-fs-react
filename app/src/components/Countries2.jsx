import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from "../components/Card"

const Countries = () => {
    //Le useEffect se joue lorsque le composant est monté
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceana'];
    const [selectedRadio, setSelectedRadio] = useState("");
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((res) => setData(res.data))

    }, [])
    return (
        <div>
            {/* <h1 className="text-3xl text-center">COUNTRIES</h1> */}
            {/* <ul className='flex w-[80%] justify-around bg-green-400 mx-auto p-2 rounded-full text-white font-bold mb-4 shadow-2xs' >
                <input type="range" min='1' max='250' defaultValue={rangeValue} onChange={((e =>
            
                    setRangeValue(e.target.value)))}
                />
         
                {radios.map((continent) => (
                    <li >

                        <input type="radio" id={continent} name='continentRadio' onChange={(e) => setSelectedRadio(e.target.id)}
                            checked={continent === selectedRadio} />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}
         
                {
                    setSelectedRadio && (
                        <button onClick={() => setSelectedRadio('')}>anuler la recherche</button>
                    )
                }
            </ul> */}

<ul className='flex flex-col md:flex-row w-[90%] justify-around bg-green-400 mx-auto p-4 rounded-2xl text-white font-bold mb-4 shadow-md gap-4'>

  {/* Input range */}
  <div className="flex flex-col items-center">
    <input 
      type="range" 
      min='1' 
      max='250' 
      value={rangeValue}
      onChange={(e) => setRangeValue(e.target.value)}
      className="w-full md:w-48"
    />
    <span className="text-sm mt-1">Valeur : {rangeValue}</span>
  </div>

  {/* Radio buttons */}
  <div className="flex flex-col md:flex-row gap-2 items-center">
    {radios.map((continent, index) => (
      <li key={index} className="list-none flex items-center gap-1">
        <input 
          type="radio" 
          id={continent} 
          name='continentRadio' 
          onChange={(e) => setSelectedRadio(e.target.id)}
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











            <ul className="flex flex-wrap gap-3 mx-auto w-[100vw] justify-center">
                {/* {
                    data.map((country, index) => (<li key={index}>{country.translations.fra.common}</li>)
                    )
                    } */}
                {
                    data
                        // .slice(0,5)

                        .filter((country) => country.continents[0].includes(selectedRadio))
                        .sort((a, b) => b.population - a.population)
                        .slice(0, rangeValue)
                        .map((country, index) => (
                            <Card key={index} country={country} />
                        ))
                }
            </ul>
        </div>
    );
};

export default Countries;