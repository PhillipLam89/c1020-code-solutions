import React from 'react'
import ReactDOM from 'react-dom'
const $root = document.querySelector('#root')
const newH1 = React.createElement(
  'h1',
  null,
  'Hello, React!'
);


console.log(newH1);

ReactDOM.render(newH1, $root);
