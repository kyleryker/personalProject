import React from 'react';
import axios from 'axios';
import "../public/index.css";
let data = 5;

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
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({data: this.state.value})
    }
    componentDidMount() {
        axios.get('http://localhost:3002/inventory/turnover?value=' + this.state.value).then((res) => {
            console.log(res);
            this.setState({data:res.data[0]})
        });
    }
        render() {
            return (
                <div className="main1">
                    <input type='text' value={this.state.value} placeholder='fiscal year' onChange={this.handleChange}/>
                    <input type='submit' value='Submit'/> {this.state.data}
                </div>
            )
        }
};
