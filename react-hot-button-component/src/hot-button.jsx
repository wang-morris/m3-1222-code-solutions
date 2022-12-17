import React from 'react';
let clickCount = 0;

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  handleClick(props) {
    this.setState({ isClicked: true });
  }

  render() {
    clickCount++;
    if (clickCount < 4) {
      return (
        <div>
          <button onClick={this.handleClick.bind(this)} className="cold">Hot Button</button>
        </div>
      );
    } else if (clickCount < 7) {
      return (
        <div>
          <button onClick={this.handleClick.bind(this)} className="cool">Hot Button</button>
        </div>
      );
    } else if (clickCount < 10) {
      return (
        <div>
          <button onClick={this.handleClick.bind(this)} className="luke-warm">Hot Button</button>
        </div>
      );
    } else if (clickCount < 13) {
      return (
        <div>
          <button onClick={this.handleClick.bind(this)} className="warm">Hot Button</button>
        </div>
      );
    } else if (clickCount < 16) {
      return (
        <div>
          <button onClick={this.handleClick.bind(this)} className="hot">Hot Button</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.handleClick.bind(this)} className="super-hot">Hot Button</button>
        </div>
      );
    }
  }
}

export default CustomButton;
