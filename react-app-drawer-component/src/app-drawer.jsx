import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (!this.state.isOpened) {
      this.setState({ isOpened: true });
    } else {
      this.setState({ isOpened: false });
    }
  }

  render() {
    let menuBar;
    if (!this.state.isOpened) {
      menuBar = 'fa-solid fa-bars three-bars';
    } else {
      menuBar = '';
    }
    return (
      <div>
        <div className={`menu-container ${this.state.isOpened ? 'open' : 'close'}`} onClick={this.handleClick}>
          <h2>Menu</h2>
          <a className='link'>About</a>
          <a className='link'>Get Started</a>
          <a className='link'>Sign In</a>
        </div>
        <div>
          <div className={`small-menu ${this.state.isOpened ? 'opened' : 'closed'}`} onClick={this.handleClick}>
            <i className={menuBar}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
