import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/Home/Home';
// import { Route, Routes } from 'react-router-dom';
// import Search from './components/Search/Search';
//import Blog from './components/Blog/Blog';
import Mobile from './components/Mobile/Mobile';



function App() {

  return (
    <div>
      {/* <Routes>
        <Route path='/search' element={<Search></Search>}></Route>
      </Routes> */}
      {/* <Blog title="How React Works in Browsers" author="Admin" decs="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."></Blog>

      <Blog title="What is MERN Technology ?" author="Shahidul" decs="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."></Blog>

      <Blog title="Are You Ready For Learn React in 2022 ?" author="Editor" decs="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."></Blog> */}
      <Mobile></Mobile>
    </div>

  );
}

export default App;
