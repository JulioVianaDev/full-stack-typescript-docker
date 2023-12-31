import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
function App() {
  useEffect(()=>{
    // ipv4
    // axios.get('http://backend:3001')
    //   .then(res=>console.log(res.data))
    //   .catch(err=>console.log(err.message))
    // ipv6
    axios.get('http://[::1]:3001')
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err.message))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          funciona por favor editei dnv
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
