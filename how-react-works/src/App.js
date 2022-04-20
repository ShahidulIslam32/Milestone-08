//import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
        <Device name="Samsung" price="20000" model ="Galaxy Note 10" storage="4Gb Ram"></Device>
        <Watch></Watch>
    </div>
  );
}

export default App;
