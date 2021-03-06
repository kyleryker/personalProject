import React from 'react';
import axios from 'axios';
import "../public/index.css";


export default class daysToSell extends React.Component {
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
        axios.get('http://138.68.229.153:3002/inventory/daystosell?value=' + this.state.value).then((res) => {
            console.log(res);
            this.setState({data:res.data[0].days});
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    componentDidMount() {
        axios.get('http://138.68.229.153:3002/inventory/daystosell?value=' + this.state.value).then((res) => {
            console.log(res);
            this.setState({data:res.data[0].days});
        });
    }
        render() {
            return (
                <div className="main5">
                <div className='title'>
                Days to Sell Ratio
                </div>
                <div className='input'>
                    <input type='text' value={this.state.value} placeholder='Fiscal Year' onChange={this.handleChange}/>

                    </div>
                    <div className='text5'>
                    {this.state.data*365}
                    </div>
                </div>
            )
        }
};
