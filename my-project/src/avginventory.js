import React from 'react';
import axios from 'axios';
import "../public/index.css";


export default class AvgInventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '2017'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        axios.get('http://138.68.229.153:3002/inventory/avginventory?value=' + this.state.value).then((res) => {
            console.log(res);
            this.setState({data: res.data[0].avg});
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    componentDidMount() {
        axios.get('http://138.68.229.153:3002/inventory/avginventory?value=' + this.state.value).then((res) => {
            console.log(res);
            this.setState({data: res.data[0].avg});
        });
    }
        render() {
            return (
                <div className="main4">
                <div className='title'>
                Average Inventory Per Year
                </div>
                <div className='input'>
                    <input type='text' value={this.state.value} placeholder="Fiscal Year" onChange={this.handleChange}/>

                    </div>
                    <div className="text4">
                    {this.state.data}
                    </div>
                </div>
            )
        }
};
