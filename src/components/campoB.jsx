import React from 'react';
// import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
// import Typeahead from 'react-typeahead';
// import Downshift from 'downshift/preact';
import './campoB.scss';

//creo el metodo que guardará el valor inicial del Input.
class inputChanges extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', Estilo: {} };
        
    }


    //funcion que va a guardar el valor que digite el usuario.
    hdchange = (event) => {
    // console.log(event.target.value);
        let Style = {}
        if (event.target.value.length >= 1) {
            console.log('Hola a hangetodos');
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
        this.setState({ value: event.target.value, Estilo: Style });
    }

    //para hacer peticiones a la API
    getValue() {
        return this.state.value;
    };

    render() {

        return (
            <div className="place">
            

            {/* <Typeahead
                onChange={(selected) => {
                    this.setState({selected});
                }}
                options={['joa', 'negro', 'ecmascript']}
                selected={this.state.selected}
                caseSensitive
                ignoreDiacritics = { false } 
            /> */}
                <input className="dir" type="text" onChange={this.hdchange} value={this.state.value}/>
                <label style={this.state.Estilo}>DESTINO</label>
            </div>
        );
    }
}

export default inputChanges;