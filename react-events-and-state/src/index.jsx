import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  handleClick(props) {
    this.setState({ isClicked: true });
    return (
      <div>
        <button> a different button</button>
      </div>
    );
  }

  render() {
    if (!this.state.isClicked) {
      return (
        <div>
          <button onClick={this.handleClick.bind(this)}>this is a button</button>
        </div>
      );
    } else {
      return (
        <button>also a button</button>
      );
    }

  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
