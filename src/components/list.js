import React, { Component } from 'react'
import ListItems from './ListItems'


export default class list extends Component {

 

    
    render() {
        const newTrip = this.props.trips
        console.log( Object.values(newTrip));
        return(
            <div>
                <h3>Destinos</h3>
                    <div>
                <ul className="list-group my-5">
                {
            Object.values(newTrip).map(trip =>{
                return(
                    <ListItems key={trip.id} title={trip.destino}></ListItems>
                )
                })
        }
        <button type="button" className="btn btn-danger btn-block">limpiar destinos</button>
        </ul>
    </div>
                
            </div>
        )
        
    
    }}
