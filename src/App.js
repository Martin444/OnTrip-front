import React, { Component } from 'react';
import BoxSearch from './components/boxSearch.jsx';
import CampoB from './components/campoB';
import './App.css';


class App extends Component {

  
  

  render() {
    return (
      <div className="App">
        <BoxSearch/>
        <br/>
          <div className="box">
          <CampoB/>
            </div>
      </div>
    );
  }
}

export default App;
