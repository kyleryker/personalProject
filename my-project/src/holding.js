import React from 'react';
import axios from 'axios';
import "../public/index.css";


export default class Holding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '1'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        axios.get('http://138.68.229.153/inventory/holding?value=' + this.state.value).then((res) => {
            console.log(res);
            this.setState({data:res.data[0].kalkl});
        });
    }

    handleSubmit(event) {
        event.preventDefault();

    }
    componentDidMount() {
        axios.get('http://138.68.229.153/inventory/holding?value=' + this.state.value).then((res) => {
            console.log(res);
            this.setState({data:res.data[0].kalkl});
        });
    }
        render() {
            return (
                <div className="main3">
                <div className='title'>
                Holding Costs
                </div>
                <div className='input'>
                    <input type='text' value={this.state.value} placeholder='item number' onChange={this.handleChange}/>

                    </div>
                    <div className="text3">
                    ${this.state.data}
                    </div>
                </div>
            )
        }
    };
