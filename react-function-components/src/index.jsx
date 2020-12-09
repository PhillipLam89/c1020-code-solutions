import React from 'react';
import ReactDOM from 'react-dom';
const $root = document.querySelector('#root');
const newButton = React.createElement(
  'button',
  null,
  'Click Me!'
);

ReactDOM.render(newButton, $root);
