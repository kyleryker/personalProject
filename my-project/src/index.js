import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Sales extends React.Component {
  componentDidMount(){
    axios.get(`./inventory.sql`)
    .then (function(res){
      console.log(res);
      let data = res;
    }
    );
  }
  render(){
    return (
      <div>
      <h1>
      </h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Sales />,
  document.getElementById('root')
);
