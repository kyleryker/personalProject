import React from 'react';
import ReactDOM from 'react-dom';
import Turnover from './turnover.js';
import Writeoff from './writeoff.js';
import Holding from './holding.js';
import AvgInventory from './avginventory.js';
import DaysToSell from './daysToSell.js';
import Chart from './graph.js'
import "../public/index.css";

class Root extends React.Component {
    render() {
        return (
            <div>
                <AvgInventory/>
                <Writeoff/>
                <Turnover/>
                <Holding/>
                <DaysToSell/>
            </div>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
