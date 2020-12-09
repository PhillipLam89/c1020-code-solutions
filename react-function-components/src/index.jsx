import React from 'react';
import ReactDOM from 'react-dom';
const $root = document.querySelector('#root');

function ClickMeButton() {
  return <button>Click Me!</button>;
}

const button = <ClickMeButton />;
ReactDOM.render(
  button,
  $root
);
