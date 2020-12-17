import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      imageIndex: 0
    });
    this.handleClick = this.handleClick.bind(this);
    this.startCarousel = this.startCarousel.bind(this)
    this.handleDotsClick = this.handleDotsClick.bind(this)
  }
  handleClick(event) {
    if (event.target.className === 'fas fa-chevron-left arrow') {
      this.state.imageIndex <= 0 ?
       this.setState({ imageIndex: this.props.pics.length - 1 }) :
       this.setState({ imageIndex: this.state.imageIndex - 1 })
    }
    else if (event.target.className === 'fas fa-chevron-right arrow') {
      this.state.imageIndex >= this.props.pics.length-1 ?
       this.setState({ imageIndex: 0 }) :
       this.setState({ imageIndex: this.state.imageIndex + 1 })
    }
  }

  startCarousel() {
    clearInterval(this.state.intervalID)
    this.state.intervalID = setInterval( () => {
      this.state.imageIndex >= this.props.pics.length - 1 ?
       this.setState({ imageIndex: 0 }) :
       this.setState({ imageIndex: this.state.imageIndex + 1 })
    }, 2000)
  }

  handleDotsClick(event) {
    if (event.target.className !== 'selected-dot') {
      clearInterval(this.state.intervalID)
      this.setState({ imageIndex: Number(event.target.className)})
    }
  }

  componentDidMount() {
this.startCarousel()
}

  render() {
    this.startCarousel()
      let key = 0
      const pics = this.props.pics
      const dots = pics.map((val, idx) =>{

        if (idx !== this.state.imageIndex) {
          key = idx
          return <button onClick={this.handleDotsClick}  className={key}></button>
        }
        else if (idx === this.state.imageIndex) {
          return <button className="selected-dot"></button>
        }
      })
      return (
        <div className="wrapper">
          <div className="container" >
            <i onClick={this.handleClick} className="fas fa-chevron-left arrow"></i>
            <img src={this.props.pics[this.state.imageIndex]}></img>
            <i onClick={this.handleClick} className="fas fa-chevron-right arrow"></i>
          </div>
          <div>
            <div className="container dots-container">{dots}</div>
          </div>
        </div>
      );
    }


}

export default Carousel;
