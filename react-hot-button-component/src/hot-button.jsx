import React from 'react';

let counter = 0;
let statusTracker = 0;
const colors = ['purple', 'light-purple', 'red', 'orange', 'yellow', 'white'];

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null // default color
    };
    this.handleClick = this.handleClick.bind(this); // binds this
  }

  handleClick() {
    counter++;
    if (counter === 3) {
      counter = 0; // resets every 3 clicks as per requirements
      statusTracker++; // every 3 click will change color
      this.setState({
        status: colors[statusTracker] // sets className which is linked to CSS colors
      });
    }
  }

  render() {
    return <button className={this.state.status} onClick={this.handleClick}>I Miss Core HTML/JS</button>;
  }
}
export default HotButton;
