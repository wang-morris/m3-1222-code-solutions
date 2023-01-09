import React from 'react';

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    const value = event.target.value;
    this.setState({ password: value });
  }

  render() {
    let symbol;
    let requirement;
    if (this.state.password.length === 0) {
      symbol = <i className="fa-solid fa-xmark x-symbol"></i>;
      requirement = 'A password is required.';
    } else if (this.state.password.length < 8) {
      symbol = <i className="fa-solid fa-xmark x-symbol"></i>;
      requirement = 'Your password is too short.';
    } else if (this.state.password.length >= 8) {
      symbol = <i className="fa-solid fa-check checkmark"></i>;
      requirement = '';
    }
    return (
      <form>
        <label>Password</label>
        <div className='password-container'>
          <input type='password' value={this.state.password} onChange={this.handlePasswordChange}></input>
          <div>{symbol}</div>
        </div>
        <p>{requirement}</p>
      </form>
    );
  }
}

export default Password;
