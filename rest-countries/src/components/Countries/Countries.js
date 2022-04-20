import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [country, setCountries] = useState([])
    useEffect( () => {
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Hey !! This is Rest Countries</h1>
        </div>
    );
};

export default Countries;