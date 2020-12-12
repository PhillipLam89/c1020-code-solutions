import React from 'react';
import ReactDOM from 'react-dom';
import AppDrawer from './app-drawer';
const menuOptions = [
  {
    key: 1,
    value: 'About'
  },
  {
    key: 2,
    value: 'Get Started'
  },
  {
    key: 3,
    value: 'Sign In'
  }
];

ReactDOM.render(
  <AppDrawer menuOptions={menuOptions} />,
  document.getElementById('root')
);
