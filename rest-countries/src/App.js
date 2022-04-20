//import logo from './logo.svg';
//import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';
//import Person from './components/Person/Person';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Country></Country>
    </div>
  );
}

// function Load(){
//   const [countries,setCountries ] = useState([])

//   useEffect( () => {
//     fetch(`https://restcountries.com/v3.1/all`)
//     .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])

//   return(
//     <div>
//       <h1>Visiting Every Country OF the World</h1>
//       <h2>Available Countries : {countries.length}</h2>
//       {
//         countries.map(country => <Country name={country.name.common} official={country.name.official} capital = {country.capital}></Country>)
//       }
//     </div>
//   );
// }

// function Country(props){
//   return (
//     <div>
//       <h1>Country Name : {props.name}</h1>
//       <h2>Official Name : {props.official}</h2>
//       <h3>Capital Name :  {props.capital}</h3>
//     </div>
//   );
// }


export default App;
