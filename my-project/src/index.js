import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Turnover from './turnover.js';
import Writeoff from './writeoff.js';
import Holding from './holding.js';
import AvgInventory from './avginventory.js';
import DaysToSell from './daysToSell.js';
import "../public/index.css";


class Root extends React.Component {
  // componentDidMount(){
  //   axios.get(`./inventory.sql`)
  //   .then (function(res){
  //     console.log(res);
  //     let data = res;
  //   }
  //   );
  // }
  render(){
    return (
      <div>
<Writeoff />
      <Turnover />
      <Holding />
      <AvgInventory />
      <DaysToSell />
      </div>
    )
  }
}

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);
