import React from 'react';
import ReactDOM from 'react-dom';


function NotClicked(props) {
  return (
    <button onClick={props.handleClick}>
      Login
    </button>
  );
}

function Clicked(props) {
  return (
    <button onClick={props.handleClick}>
      Logout
    </button>
  );
}

class CustomButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isClicked: false }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(state => ({
      isClicked: !state.isClicked
    }));
  }

  render() {
    const isClicked = this.state.isClicked
    let button = null
    return isClicked ? button = <button onClick={this.handleClick}>Thanks!</button> : button = <button onClick={this.handleClick}>Click me!</button>
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
