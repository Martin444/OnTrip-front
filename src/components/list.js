import React, { Component } from 'react'
import ListItems from './ListItems'


export default class list extends Component {
    render() {
        const newTrip = this.props.trips
        const clearList = this.props
        console.log(clearList)
        return(
            <div>
                <h3>Destinos</h3>
                    <div>
                <ul className="list-group my-5">
                {
            newTrip.map(trip =>{
                return(
                    <ListItems key={trip.id} title={trip.destino}></ListItems>
                )
                })
        }
        <button type="button" className="btn-primary" onClick={clearList}>Limpiar</button>
        </ul>
    </div>
            </div>
        )
    }}
