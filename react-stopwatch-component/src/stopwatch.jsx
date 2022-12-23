import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      count: 0
    };
  }

  startCount() {
    this.setState({
      running: true
    });
    this.interval = setInterval(() => {
      (this.setState({ count: this.state.count + 1 }));
    }, 1000);
  }

  stopCount() {
    this.setState({
      running: false
    });
    clearInterval(this.interval);
  }

  handleClick() {
    if (!this.state.running) {
      this.startCount();
    } else {
      this.stopCount();
    }
  }

  circleClick() {
    if (!this.state.running) {
      this.setState({ count: 0 });
    }
  }

  render() {
    let playButton;
    const number = this.state.count;
    if (!this.state.running) {
      playButton = <i className="fa-solid fa-play fa-2xl"></i>;
    } else {
      playButton = <i className="fa-solid fa-pause fa-2xl"></i>;
    }
    return (
      <div className='watch-container'>
        <div onClick={this.circleClick.bind(this)} className='timer-container'>
          <div className='timer-face'></div>
          <div className='number'>{number}</div>
        </div>
        <div onClick={this.handleClick.bind(this)}>{playButton}</div>
      </div>
    );
  }
}

export default Stopwatch;
