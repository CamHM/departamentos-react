import React, {Component} from 'react';

import { getDepartamentos } from '../utils/api';

class LocateSelector extends Component {
    
    constructor(){
        super();
        this.state = {
            departamentos: [],
            municipios: []
        }
    }

    handleInput(e) {
        //console.log(e.target.value)
        //console.log(this.state.departamentos);
    }

    componentDidMount(){
        getDepartamentos()
            .then( res => {
                this.setState ({
                    departamentos: res.data,
                    municipios: []
                });
            })
        .catch((err) => console.log(err))
    }

    render() {
        const { departamentos, municipios} = this.state;
        return (
            <div className="form-group col-md-12">
                <div>
                    <select 
                        name="departamento"
                        className="form-control"
                        onChange={this.handleInput}>
                        {departamentos.map(depto => (
                            <option key={depto.departamento}>{depto.departamento}</option>
                        ))}
                    </select>
                </div>                
                <div className="mt-4">
                    <select 
                        name="municipio"
                        className="form-control"
                        onChange={this.handleInput}>
                        <option>Medellin</option>
                        <option>Tunja</option>
                        <option>Paipa</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default LocateSelector;