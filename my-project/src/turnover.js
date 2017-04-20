import React from 'react';
import axios from 'axios';
import "../public/index.css";


export default class Turnover extends React.Component {
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
        axios.get('http://localhost:3002/inventory/turnover?value=' + this.state.value).then((res) => {
            console.log(res);
            this.setState({data:res.data[0].cost})
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    componentDidMount() {
        axios.get('http://localhost:3002/inventory/turnover?value=' + this.state.value).then((res) => {
            console.log(res);
            this.setState({data:res.data[0].cost})
        });
    }
        render() {
            return (
                <div className="main1">
                <div className='title'>
                Inventory Turnover
                </div>
                <div className='input'>
                    <input type='text' value={this.state.value} placeholder='fiscal year' onChange={this.handleChange}/>

                    </div>
                    <div className='text1'>
                    {this.state.data} turnovers per year
                    </div>
                </div>
            )
        }
};
