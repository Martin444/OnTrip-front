import React, { Component } from 'react'
import moment from 'moment';

const TripContext = React.createContext();

export default class TripProvider extends Component {

    state = {
        
            origen :"",
            destino: '', 
            passMen: '', passMax: '', 
            CalInicio: moment(), 
            CalFin: moment()

        
    }

    handleChange = event =>{
        const value = event.target.value

        this.setState({origen:value})
    }

    handleChangeDestino = event =>{
        const value = event.target.value

        this.setState({destino:value})
    }

    handleChangeSelect = event =>{
        const value = event.target.value

        this.setState({passMen:value})
    }

    handleChangeSelect2 = event =>{
        const value = event.target.value

        this.setState({passMax:value})
    }
    handleChangeSelect2 = event =>{
        const value = event.target.value

        this.setState({passMax:value})
    }

    handleChangeCalendarioIn = data =>{

        this.setState({CalInicio:data})
    }

    handleChangeCalendario = data =>{

        this.setState({CalFin:data})
    }

    handleSubmit = e => {
        e.preventDefault();
        const newTrip = {
            origen:this.state.origen,
            destino: this.state.destino,
            passMen: this.state.passMen,
            passMax: this.state.passMax,
            CalInicio: this.state.CalInicio,
            CalFin: this.state.CalFin
        }
        console.log(newTrip);

        const UpdateTrip = {...this.state.viajes, newTrip}

        this.setState({
            
            origen:'',
            destino: '', 
            passMen: '', 
            passMax: '', 
            CalInicio: moment(), 
            CalFin: moment()
            
        }, ()=> console.log(UpdateTrip))
    }


    render() {
        return (
            <TripContext.Provider value={{...this.state, 
            handleChange:this.handleChange,
            handleChangeDestino:this.handleChangeDestino,
            handleChangeSelect:this.handleChangeSelect,
            handleChangeSelect2:this.handleChangeSelect2,
            handleChangeCalendarioIn: this.handleChangeCalendarioIn,
            handleChangeCalendario: this.handleChangeCalendario,
            handleSubmit: this.handleSubmit
            }}>
              {this.props.children}
            </TripContext.Provider>
        )
    }
}

const TripConsumer = TripContext.Consumer

// export function withTripConsumer(Component){
//     return function ConsumerWrapper(props){
//         return <TripConsumer>
//             {value => <Component {...props} context={value}/>}
//         </TripConsumer>
//     }
// }

export{TripProvider, TripConsumer, TripContext}
