import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '' // menu starts off as closed
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const password = this.state.password;
    let icon = '';
    let responseText = '';
    if (!password) {
      icon = 'fas fa-times';
      responseText = 'A password is required, 8+ characters and at least ONE special character a special character (!, @, #, $, %, ^, &, *, (, or ))';
    } else if (password.length < 8) {
      icon = 'fas fa-times';
      responseText = 'Password is too short, 8 characters or longer required';
    } else if (password.length >= 8 && (!password.includes('@') || !password.includes('!') || !password.includes('#') || !password.includes('$') || !password.includes('%') || !password.includes('^') || !password.includes('&') || !password.includes('*') || !password.includes('(') || !password.includes(')'))) {
      icon = 'fas fa-times';
      responseText = 'Please add at least ONE special character (!, @, #, $, %, ^, &, *, (, or ))';
    }
    if (password.length >= 8 && (password.includes('@') || password.includes('!') || password.includes('#') || password.includes('$') || password.includes('%') || password.includes('^') || password.includes('&') || password.includes('*') || password.includes('(') || password.includes(')'))) {
      icon = 'fas fa-check';
      responseText = ' ';
    }
    return (
      <form className="wrapper">
        <div className="modal-container">
          <label htmlFor="password" className="password-label">Password</label>
          <input type="password" id="password" onChange={this.handleChange} value={this.state.password}></input>
          <p className="response-text">{responseText}</p>
        </div>
        <div className="status-logo"><i className={icon}></i></div>
      </form>
    );
  }
}

export default ValidatedInput;
