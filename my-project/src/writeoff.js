import React from 'react';
import axios from 'axios';
import "../public/index.css";
let data = 5;

export default class Writeoff extends React.Component {
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
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({data:this.state.value});
    }
    componentDidMount() {
        axios.get(`http://localhost:3002/inventory/writeoff?value=` + this.state.value).then((res) => {
            console.log(res);
            this.setState({data:res.data[0]});
        });
    }
        render() {
            return (
                <div className="main2">
                    <input type='text' value={this.state.value} placeholder='Sales Period' onChange={this.handleChange}/>
                    <input type='submit' value='Submit'/> {this.state.data}
                </div>
            )
        }

};
