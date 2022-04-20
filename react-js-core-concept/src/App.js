//import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Person name="kalachan"></Person>
      <Person name="Dholachan"></Person>
      <New></New>
    </div>
  );
}

function Person(props){
  console.log(props);
  return (
      <div className='amra'>
        <h1>{props.name}</h1>
        <h2>A Modern Web technologies FrameWork !!</h2>
      </div>
  );
}

function New(){
  return (
    <div className='amra'>
        <h1>This is Another Component</h1>
        <h3>React, A Modern Web Tool</h3> 
    </div>
  );
}



export default App;
