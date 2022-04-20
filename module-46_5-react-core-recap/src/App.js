//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <Loadpost></Loadpost>
        <Post></Post>
        <District name="Dhaka" speciality ="Traffic Jam and Hijack" ></District>
        <District name="Narayanganj" speciality ="Industrial Area" ></District>
        <District name="Munsiganj" speciality ="Potato and Hilsha Fish" ></District>
    </div>
  );
}

function Loadpost(){
  const [posts, setPosts] = useState([]);
  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return(
    <div>
      <h1>Users Post Showing Here</h1>
      <h2><small>Available Post : {posts.length}</small></h2>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  );
}

function Post(props){
  return(
    <div className='posts'>
      <h2>Title - {props.title} </h2>
      <h3>Body - {props.body} </h3>
    </div>
  );
}


const styles = {
  color : '#605b5b',
  backgroundColor : 'lightblue',
  padding: '20px',
  width : '700px',
  margin : '10px auto',
  borderRadius : '10px',
  fontSize : '17px',
}

function District(props){
  const [power, setPower] = useState(1)
  const boostPower = () => {
    const newPower = power * 2
    setPower(newPower)
  }
  return (
    <div style={styles}>
      <h2>Name : {props.name} </h2>
      <h2><small>Speciality : {props.speciality}</small></h2>
      <h2><small>Power : {power}</small></h2>
      <button onClick={boostPower} className='btn btn-danger'>Boost The Power</button>
    </div>
  );
}



































































export default App;