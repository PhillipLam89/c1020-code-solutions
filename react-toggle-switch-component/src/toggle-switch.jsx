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
    let switchPosition = '';
    let currentStatus = '';
    if (this.state.switchIsOn) {
      switchPosition = 'switch-is-on';
      currentStatus = 'ON';
    } else {
      switchPosition = 'switch-is-off';
      currentStatus = 'OFF';
    }

    return (
      <div className="container">
        <div className={switchPosition} onClick={this.handleClick}>
          <div className="back-part-of-switch"></div>
          <div className="circular-icon"></div>
        </div>
        <p>{currentStatus}</p>
      </div>
    );
  }
}
export default ToggleSwitch;
