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
      }
    });
  }

  pressPlayOrPause() {
    this.setState({
      time: this.state.time + 1
    });
  }

  resetTimer() {
    if (!this.state.isRunning) {
      clearInterval(this.startCount);
      this.setState({ time: 0 });
    }

  }

  render() {

    const buttonImage = this.state.isRunning ? 'fas fa-pause' : 'fas fa-play-circle';
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
