import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
  }

  handleClick(props) {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }

  render() {
    const count = this.state.clickCount;
    let btnClass;
    if (count < 4) {
      btnClass = 'cold';
    } else if (count < 7) {
      btnClass = 'cool';
    } else if (count < 10) {
      btnClass = 'luke-warm';
    } else if (count < 13) {
      btnClass = 'warm';
    } else if (count < 16) {
      btnClass = 'hot';
    } else {
      btnClass = 'super-hot';
    }

    return (
      <div>
        <button onClick={this.handleClick.bind(this)} className={btnClass}>Hot Button</button>
      </div>
    );
  }
}

export default CustomButton;
