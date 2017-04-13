import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import "../public/index.css";


  export default class Turnover extends React.Component {
    // componentDidMount(){
    //   axios.get(`./inventory.sql`)
    //   .then (function(res){
    //     console.log(res);
    //     let data = res;
    //   }
    //   );
    // }
    render() {
      return (
        <div className = "main1">
        Inventory Turnover
        </div>
      )
    }
  };
