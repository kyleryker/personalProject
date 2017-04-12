
var React = require('react');
var ReactDOM = require('react-dom');

var MyComponentClass = React.createClass({
  render: function(){
    return <h1>Hello world</h1>;
  }
});

ReactDOM.render(
<MyComponentClass />,
document.getElementById('app'));


// import React from 'react';
// // const ReactDOM = require ('react-dom');
//
// class Sales extends React.component{
//   render(){
//     return (
//       <div>
//         <h1>Hello World</h1>
//       </div>
//     )
//   };
// };
//
// React.render(<Sales />, document.getElementById('sales'));

// import axios from 'axios';
// import rd3 from 'rd3';
//
// class Sales extends React.Component {
//   componentDidMount(){
//     axios.get(`./inventory.sql`)
//     .then (function(res){
//       console.log(res);
//       let data = res;
//     }
//     .catch(err){
//       console.console.log(err);
//     }
//     });
//   }
//   render(){
//     return (
//       <div>
//       <h1>
//       {this.props.data}
//       </h1>
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(<Sales />, document.getElementById(''));
