import React from 'react';
import axios from 'axios';
import "../public/index.css";


export default class Writeoff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '2'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        axios.get(`http://138.68.229.153/inventory/writeoff?value=` + this.state.value).then((res) => {
            console.log(res);
            this.setState({data:res.data[0].lbkum});
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    componentDidMount() {
        axios.get(`http://138.68.229.153/inventory/writeoff?value=` + this.state.value).then((res) => {
            console.log(res);
            this.setState({data:res.data[0].lbkum});
        });
    }
        render() {
            return (
                <div className="main2">
                <div className='title'>
                Inventory Writeoff
                </div>
                <div className='input'>
                    <input type='text' value={this.state.value} placeholder='Sales Period' onChange={this.handleChange}/>

                    </div>
                    <div className='text2'>
                    ${this.state.data} written off
                    </div>
                </div>
            )
        }

};
