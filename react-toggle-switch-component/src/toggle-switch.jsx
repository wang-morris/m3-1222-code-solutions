import React from 'react';
let clickCount = 0;

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    clickCount++;
    if (clickCount % 2 === 0) {
      return (
        <div>
          <div className="button-container">
            <button onClick={this.handleClick.bind(this)} className="on"></button>
            <div onClick={this.handleClick.bind(this)} className="on-circle"></div>
          </div>
          <p>ON</p>
        </div>
      );
    } else if (clickCount % 2 === 1) {
      return (
        <div>
          <div className="button-container">
            <button onClick={this.handleClick.bind(this)} className="off"></button>
            <div onClick={this.handleClick.bind(this)} className="off-circle"></div>
          </div>
          <p>OFF</p>
        </div>
      );
    }
  }
}

export default ToggleSwitch;
