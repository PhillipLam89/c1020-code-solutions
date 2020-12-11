import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchIsOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ switchIsOn: !this.state.switchIsOn });
  }

  render() {
    if (this.state.switchIsOn) {
      return <i className="fas fa-toggle-on switchIsOn" onClick={this.handleClick}>ON!!</i>;
    } else if (!this.state.switchIsOn) {
      return <i className="fas fa-toggle-off switchIsOn" onClick={this.handleClick}>OFF!!</i>;
    }
  }
}

export default ToggleSwitch;
