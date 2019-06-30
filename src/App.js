import React, { Component } from 'react';
import List from './components/list'
import Form from './components/form'
import Brows from './components/brows'
import './App.css';

import {Route, Switch} from 'react-router-dom'




class App extends Component {

  state={
    trips:[]
  }


newTrip = (trip) => {
  let trips = this.state.trips;
  trips.push(trip)
  this.setState({
    trips: trips,
  })
}


  render() {
    return (
      <div className="App">
        {/* <BoxSearch/> */}
        <br/>
          <div className="box">
          <Form
          newTrip={this.newTrip}
          />
          </div>
            <Switch>
          <div className="box">
               <List
               clearList ={this.clearList} 
               trips={this.state.trips}/>
            <Route path="/results" component={Brows}/>
          </div>
            </Switch>
      </div>
    );
  }
}

export default App;
