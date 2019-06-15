import React, { Component } from 'react'
import ListItems from './ListItems'


export default class list extends Component {

 

    
    render() {
        const newTrip = this.props.trips
        console.log( newTrip);
        return(
            <div>
                {
                    newTrip?
            Array.from(newTrip).map(trip =>{
                return(
                    <div>
                <ul className="list-group my-5">
                    <h3>Destinos</h3>

                    <ListItems key={trip.newTrip.id} title={trip.newTrip.destino}></ListItems>
    
                    <button type="button" className="btn btn-danger btn-block">limpiar destinos</button>
                </ul>
            </div>
                )
            })
        :
          
                <div>
                    hubo un error
                </div>
            
        }
                
            </div>
        )
        
    
    }}
