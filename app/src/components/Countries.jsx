import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from "../components/Card"

const Countries = () => {
    //Le useEffect se joue lorsque le composant est monté
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((res) => setData(res.data))

    }, [])
    return (
        <div>
            {/* <h1 className="text-3xl text-center">COUNTRIES</h1> */}
            <ul>
                <input type="range" name="" id="" min='1' max='250' />
            </ul>
            <ul className="flex flex-wrap gap-3 mx-auto w-[100vw] justify-around">
                {/* {
                    data.map((country, index) => (<li key={index}>{country.translations.fra.common}</li>)
                    )
                    } */}
                    {
                        data.map((country, index)=>(
                            <Card key={index} country={country} />
                        ))
                    }
            </ul>
        </div>
    );
};

export default Countries;