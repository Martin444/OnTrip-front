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
  constructor(){
    super();
    this.state = { origen:'', Estilo: {}, EstiloDes: {}, destino: '', passMen: null, passMax: null, 
    CalInicio: null, CalFin: null}
  }

  hdchange = (e) => {
    const { value } = e.target
    let Style = {}
    if (value.length >= 1) {
       Style = {
            top: '-15px',
            left: '0',
            fontSize: '15px',
            fontWeight: 'bold',
            color: '#ffaa3b',
            transition: '.2s all'
        };
    } else {
        Style = {
            position: 'absolute',
            top: '5px',
            left: '2px',
            color: '#504f4e3f'
        };
    }
    this.setState({ origen: value, Estilo: Style });
}




  render() {

    const {origen, Estilo} = this.state
    return (
      <div className="App">

        <BoxSearch/>
        <br/>
          <div className="box">
            <CampoB origen = {origen}
            Estilo = { Estilo}
            hdchange ={this.hdchange}
            />
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
