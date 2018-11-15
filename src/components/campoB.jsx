import React from 'react';
import 'react-reflux';
import './campoB.scss';
import Select from 'react-select';

const API = 'http://31.220.59.183:8080/locations?filter=';
// const DEFAULT_QUERY = "PAR";

//creo el metodo que guardará el valor inicial del Input.
class inputChanges extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '', Estilo: {}, Loc: null , isLoading: false };
    
        // this.getLoc();
    }

    
    // getLoc(){
    //      fetch(API).then((res)=>{
    //         res.json().then((res)=>{
    //             console.log(res.data)
    //             this.setState({Loc:res.data})
    //         })
    //     })
        
    // }

    //funcion que va a guardar el valor que digite el usuario.
    hdchange = (event) => {
    // console.log(event.target.value);
        let Style = {}
        if (event.target.value.length >= 1) {
            console.log('estado');
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

        
        
        this.state.value.length >= 3 ?
            fetch(API + this.state.value)
            .then((res)=>{
                res.json()
                .then((res)=>{
                    res === 1 ?
                    console.log(res.data):
                    this.setState({Loc:res.data})
                    
                    
                    
                })
            }) 
            
        :
        console.log("Sigue buscando")

        

        return(
        <div className="place">
            <input className="dir" list="browsers"
            onChange={this.hdchange} 
            value={this.state.value}/>
                <label style={this.state.Estilo}>DESTINO</label>
            <div>
                <datalist id="browsers">
                                        {
                    this.state.Loc ?
             this.state.Loc.map((items)=>
            <React.Fragment>
                    <option className="lista" value={(items.name) + ", " + (items.address.countryName)}/>
                
            </React.Fragment>
                            )
                            :null
                                            }
                </datalist>
            </div>
        </div>
);

}
}

export default inputChanges;
