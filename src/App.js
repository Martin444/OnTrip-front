import React, { Component } from 'react';
import BoxSearch from './components/boxSearch.jsx';
import CampoB from './components/campoB';
import RangeCalendario from './components/rangeCalendario.js';
import RangeCalendario2 from './components/rangeCalendario2';
import CamSelect from './components/camSelect.jsx';
import LamSelect from './components/lamSelect.jsx';
import Box from './Samples/box';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <BoxSearch/>
        <br/>
          <div className="box">
            <CampoB/>
              <br/> <br/>
              <div className="cal-sel">
            <CamSelect/>
            <br/>
            <LamSelect/>
            <br/> 
            <br/>
            <RangeCalendario className="calendario"/>
            <br/> <br/>
            <RangeCalendario2/>
              </div>
              
           </div>
           <Box className="estad"/>
           
      </div>
    );
  }
}

export default App;
