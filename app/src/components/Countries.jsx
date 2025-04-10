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
            <ul>
                <input type="range" min='1' max='250' defaultValue={rangeValue} onChange={((e =>
                    // console.log(e.target.value)))}
                    setRangeValue(e.target.value)))}
                />
                {radios.map((continent) => (
                    <li>

                        <input type="radio" id={continent} name='continentRadio' onChange={(e) => setSelectedRadio(e.target.id)} 
                        checked={continent===selectedRadio}/>
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}
            </ul>
            {
                setSelectedRadio && (
                    <button onClick={() => setSelectedRadio('')}>anuler la recherche</button>
                )
            }
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