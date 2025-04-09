import React, { useEffect, useState } from 'react';
import axios from "axios";

const Countries = () => {
    //Le useEffect se joue lorsque le composant est monté
    const [data, setData]=useState([]);
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((res) => setData(res.data))

    }, [])
    return (
        <div>
            <h1 className="text-3xl text-center">COUNTRIES</h1>
        </div>
    );
};

export default Countries;