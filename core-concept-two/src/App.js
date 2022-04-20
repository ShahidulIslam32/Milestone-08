//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  // const products = [
  //   {name : 'laptop' , price : 45000},
  //   {name : 'mobile' , price : 5000},
  //   {name : 'Desktop' , price : 40000},
  //   {name : 'Headphone' , price : 1000},
  // ]
  return (
    <div className="App">
        <Counter></Counter>
    </div>
  );
}

function Counter(){
  const [count , setCount] = useState(0)
  const increaseCount = () => {
    let newCount = count + 1;
    setCount(newCount)
  }
    return(
      <div>
        <h1>Count The Number :  {count}</h1>
        <button onClick={increaseCount}>Increase</button>
      </div>
    );
}




















// function Products(props){
//   return(
//     <div className='Products'>
//         <p>Name : {props.name} </p>
//         <p>Price : {props.price}</p>
//     </div>
//   );
// }

export default App;
