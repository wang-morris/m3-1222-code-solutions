import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('this.state:', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Username</label>
        <input type='text' value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
        <label>Password</label>
        <input type='text' value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
        <input type='submit' value='Sign Up' />
      </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm />);
