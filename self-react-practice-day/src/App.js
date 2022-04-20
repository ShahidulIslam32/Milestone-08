import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <Photos></Photos>
     <Show></Show>
    </div>
  );
}

function Photos(){
  const[photos , setPhotos] = useState([])
  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(res => res.json())
    .then(data => setPhotos(data))
  }, [])
  return (
    <div>
      <h1>Available Photos  : {photos.length}</h1>
      {
        photos.map(photo => <Show name={photo.thumbnailUrl} title={photo.title} url={photo.url}></Show>)
      }
    </div>
  );
}

function Show(props){
  return(
    <div>
      <img src={props.thumbnailUrl} alt="" />
      <h3>Title : {props.title}</h3>
      <h4>IMG Url : {props.url}</h4>
    </div>
  );
}


export default App;
