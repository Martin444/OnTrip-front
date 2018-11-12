import React from 'react'

const API = 'http://31.220.59.183:8080/locations?filter=';
const DEFAULT_QUERY = 'LON';

class consulta extends React.Component {
    constructor(){
        // eslint-disable-next-line
        super();
            this.state = { Loc: null, isLoading: false };

        this.getLoc();
    }

    getLoc(){
        let Loc = fetch(API + DEFAULT_QUERY).then((res)=>{
            res.json().then((res)=>{
                console.log(res.data)
                this.setState({Loc:res.data})
            })
        })
        
    }

    render(){
        return(
            <div>
            {
                this.state.Loc ?
                this.state.Loc.map((items)=>
                <div>
                    <input type="text" value="joder"/>
                    <li>{items.subType} - {items.address.countryName}</li>
                </div>
                )
                :
                <li>Espere por favor :v</li>
            }

            </div>
        );
    }

}
   

export default consulta;