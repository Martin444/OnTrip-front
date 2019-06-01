import React from 'react';
import 'react-reflux';
import CamSelect from './camSelect.jsx';
import LamSelect from './lamSelect.jsx';
import RangeCalendario from './rangeCalendario.js';
import RangeCalendario2 from './rangeCalendario2';
import Form from './form.js'
import './campoB.scss';

// const API = 'http://31.220.59.183:8080/locations?filter=';
// const DEFAULT_QUERY = "PAR";
class inputChanges extends React.Component {

    
    render() { 
        
        return(
            <div>
                <div className="place">
                {/* <form onSubmit={handleSubmit}>
                    <input className="dir" list="browsers"
                    onChange={hdchange} 
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
                    <button type="submit">Enviar</button>
                </form>  */}
                <Form/>
                </div>
            </div>
);

}
}

export default inputChanges;
