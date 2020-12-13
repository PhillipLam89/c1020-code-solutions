import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      time: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.pressPlayOrPause = this.pressPlayOrPause.bind(this);
    this.unpause = this.unpause.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  handleClick() {
    this.setState({
      isRunning: !this.state.isRunning
    },
    function () {
      if (this.state.isRunning) {
        this.startCount = setInterval(
          () => this.pressPlayOrPause(), 1000);
      } else if (!this.state.isRunning) {
        clearInterval(this.startCount);
        this.unpause();
      }
    });
  }

  pressPlayOrPause() {
    this.setState({
      time: this.state.time + 1
    });
  }

  unpause() {
    if (!this.state.isRunning) {
      this.setState({
        time: this.state.time
      });
    }
  }

  resetTimer() {
    if (!this.state.isRunning) {
      clearInterval(this.startCount);
      this.setState({ time: 0 });
    }

  }

  render() {
    let buttonImage = '';
    this.state.isRunning ? buttonImage = 'fas fa-pause' : buttonImage = 'fas fa-play-circle';
    return (
      <div className="wrapper">
        <div onClick={this.resetTimer} className="container">
          <div className="tooltip">
            <span className="tool-tip-text">Pause and Click face to restart timer</span>
          </div>
          <p className="number-counts">{this.state.time}</p>
        </div>
        <div className="logo-wrapper">
          <p ><i onClick={this.handleClick} className={buttonImage}></i></p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.getElementById('root')
);
