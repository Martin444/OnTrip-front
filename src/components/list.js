import React, { Component } from 'react'
import {TripContext} from '../context'

export default class list extends Component {
    
    state = {
        viajes: []
    }
    
    static contextType = TripContext;

    componentDidUpdate = () => {
        const {newTrip} = this.props
            
        if(newTrip === null){
            console.log("hubo un error");
        }else {
                this.setState({
                    viajes: newTrip
                },()=> console.log(this.state.viajes))
        }
        
    }
    
    
    render() {
        const {viajes} = this.state
        
        return(
            <div>{viajes.map(item => {return(
                <div>
                    <p>{item.origen}</p>
                </div>
            )})

            }
            </div>
               
        )
    
    }
    
    }
