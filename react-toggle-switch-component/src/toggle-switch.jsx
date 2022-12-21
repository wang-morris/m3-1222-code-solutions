import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
  }

  handleClick() {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }

  render() {
    const count = this.state.clickCount;
    let btn;
    let circleType;
    let wordType;
    if (count % 2 === 0) {
      btn = 'off';
      circleType = 'off-circle';
      wordType = 'OFF';
    } else {
      btn = 'on';
      circleType = 'on-circle';
      wordType = 'ON';
    }

    return (
      <div>
        <div className="button-container">
          <button onClick={this.handleClick.bind(this)} className={btn}></button>
          <div onClick={this.handleClick.bind(this)} className={circleType}></div>
        </div>
        <p>{wordType}</p>
      </div>
    );
  }
}

export default ToggleSwitch;
