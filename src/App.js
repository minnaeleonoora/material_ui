import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import AutoGrid from './Components/AutoGrid';
import 'typeface-roboto';


class App extends Component {
  render(){
  return (
    <div>
     <Header />
     <AutoGrid />
    </div>
  );
}
}

export default App;
