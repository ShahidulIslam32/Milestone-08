import React from 'react';

const Country = (props) => {         
   return (
     <div>
      <h1>Country Name :  {props.name}</h1>
      <h2>Official Name : {props.official}</h2>
      <h3>Capital Name :  {props.capital}</h3>
    </div>  
    );
 }

export default Country;