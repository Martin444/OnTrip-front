import React from 'react';
import 'react-reflux';
import CamSelect from './camSelect.jsx';
import LamSelect from './lamSelect.jsx';
import RangeCalendario from './rangeCalendario.js';
import RangeCalendario2 from './rangeCalendario2';
import './campoB.scss';

// const API = 'http://31.220.59.183:8080/locations?filter=';
// const DEFAULT_QUERY = "PAR";
class inputChanges extends React.Component {

    constructor(props) {
        super(props)
        this.state = { Loc: null , destino: '', EstiloDes: {} };

        this.hdChangeDestino = this.hdChangeDestino.bind(this)
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

    renderSelector(){
        
        if(this.props.destino.length >= 5){
            return(
                <div>
                    <CamSelect/>
                    <br/>
                    <LamSelect/>
                    <br/>
                    <RangeCalendario className="calendario"/>
                    <br/> <br/>
                    <RangeCalendario2/>
                </div>
            )
        }
    }

      renderDestino2(){
        const {destino, hdChangeDestino} = this.props
        if(this.props.origen.length >= 5){
            return(
                <div>
                    <input className="dest" list="browsers"
                    onChange={hdChangeDestino}
                    value={destino}/>
                    <label className="labdes" style={this.props.EstiloDes}>DESTINO</label>
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
            )
        }
      }
    
    render() { 
        return(
            <div>
                <div className="place"> 
                    <input className="dir" list="browsers"
                    onChange={this.props.hdchange} 
                    value={this.props.origen}/>
                        <label className="labori" style={this.props.Estilo}>ORIGEN</label>
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
                    <br/>
                    {this.renderDestino2()}
                    <br/>
                    {this.renderSelector()}
                </div>
            </div>
);

}
}

export default inputChanges;
