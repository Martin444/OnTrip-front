import React, { Component } from 'react';
import BoxSearch from './components/boxSearch.jsx';
import CampoB from './components/campoB';

// import Box from './Samples/box';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
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
hdChangeDestino = (e) =>{
  const {value} = e.target
  let Style2 = {}
  if (value.length >= 1) {
      Style2 = {
          top: '45px',
          left: '0',
          fontSize: '15px',
          fontWeight: 'bold',
          color: '#ffaa3b',
          transition: '.2s all'
      };
  } else {
      Style2 = {
          position: 'absolute',
          top: '45px',
          left: '2px',
          color: '#504f4e3f'
      };
  }

  this.setState({ destino: value,  EstiloDes: Style2  })
}


  render() {
    const {origen, Estilo, destino, EstiloDes} = this.state
    return (
      <div className="App">
        <BoxSearch/>
        <br/>
          <div className="box">
            <CampoB origen = {origen}
            destino = {destino}
            Estilo = {Estilo}
            EstiloDes={EstiloDes}
            hdChangeDestino={this.hdChangeDestino}
            hdchange ={this.hdchange} //esta es el primer componente donde se encuentra el formulario
            />
            </div>
              {/* <br/> <br/>
              <div className="cal-sel">
            <br/> 
            
              </div>
           </div>
           <Box className="estad"/> */}
      </div>
    );
  }
}

export default App;
