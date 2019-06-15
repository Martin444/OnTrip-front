import React, { Component } from 'react'
import ListItems from './ListItems'


export default class list extends Component {

 

    
    render() {
        const newTrip = this.props.trips
        console.log( typeof newTrip);
        if(newTrip){
            newTrip.map(trip =>{
                return(
                    <div>
                <ul className="list-group my-5">
                    <h3>Destinos</h3>

                    <ListItems key={trip.id} title={trip.destino}></ListItems>
    
                    <button type="button" className="btn btn-danger btn-block">limpiar destinos</button>
                </ul>
            </div>
                )
            })
        }else{
            return(
                <div>
                    hubo un error
                </div>
            )
        }
    
    }}
