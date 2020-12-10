import React from 'react';


const colors = ['purple', 'light-purple', 'red', 'orange', 'yellow', 'white'];

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.handleClick = this.handleClick.bind(this); // binds this
  }

  handleClick() {
    if (this.state.clicks > 18) this.state.clicks = 0
    this.setState({
      clicks: this.state.clicks +1
    });

  }

  render() {
    let colorClass = null
    if (this.state.clicks === 3) colorClass = 'purple'
    else if (this.state.clicks === 6) colorClass = 'light-purple'
    else if (this.state.clicks === 9) colorClass = 'red'
    else if (this.state.clicks === 12) colorClass = 'orange'
    else if (this.state.clicks === 15) colorClass = 'yellow'
    else if (this.state.clicks === 18) colorClass = 'white'
    return <button class={colorClass} onClick={this.handleClick}>I Miss Core HTML/JS</button>;
  }
}
export default HotButton;
