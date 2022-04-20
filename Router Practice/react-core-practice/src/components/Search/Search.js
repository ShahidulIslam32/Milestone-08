import React, { useEffect, useState } from 'react';
import Show from './../Show/Show';
import './Search.css'

const Search = () => {
    const [photos , setPhotos] = useState([])
    useEffect( () => {
        let url =  `https://www.themealdb.com/api/json/v1/1/search.php?s=beef`
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setPhotos(data.meals))
    },[])
    return (
        <div>
            {
                photos.map(photo => <Show key={photo.idMeal} photo={photo}></Show>)
            }
        </div>
    );
};

export default Search;