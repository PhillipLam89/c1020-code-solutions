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
    let isPasswordValid = '';
    let responseText = '';
    if (password.length >= 8 && (password.includes('@') || password.includes('!') || password.includes('#') || password.includes('$') || password.includes('%') || password.includes('^') || password.includes('&') || password.includes('*') || password.includes('(') || password.includes(')'))) {
      icon = 'fas fa-check';
      responseText = 'Password requirements met';
      isPasswordValid = 'yes';
    } else if (!password) {
      icon = 'fas fa-times';
      responseText = 'Cannot be left blank as a password is required, with 8+ characters and at least ONE special character  (!, @, #, $, %, ^, &, *, (, or ))';
    } else if (password.length < 8) {
      icon = 'fas fa-times';
      responseText = 'Password is too short, 8+ characters and at least ONE special character (!, @, #, $, %, ^, &, *, (, or )) is required';
    } else {
      icon = 'fas fa-times';
      responseText = 'Password length acceptable, but please add add at least ONE  of the following special characters to it : !, @, #, $, %, ^, &, *, ( , or )';
    }

    return (
      <div className="wrapper">
        <form>
          <div className="modal-container">
            <label htmlFor="password" className="password-label">Password</label>
            <input type="password" id="password" onChange={this.handleChange} value={this.state.password}></input>
            <div className="status-logo"><i className={icon}></i></div>
          </div>
        </form>
        <p className={isPasswordValid}>{responseText}</p>
      </div>
    );
  }
}

export default ValidatedInput;
