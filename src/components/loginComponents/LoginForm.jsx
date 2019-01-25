import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocusedEmail: false,
      isFocusedPassword: false,
    };
    this.onFocusEmail = this.onFocusEmail.bind(this);
    this.onFocusPassword = this.onFocusPassword.bind(this);
  }


  onFocusEmail() {
    let localIsFocused = !this.state.isFocusedEmail;
    this.setState({
      isFocusedEmail: localIsFocused,
    });

  }

  onFocusPassword() {
    let localIsFocused = !this.state.isFocusedPassword;
    this.setState({
      isFocusedPassword: localIsFocused,
    });
  }

  render() {
    return(
      <React.Fragment>
        <h1>Login please</h1>
        <p>{this.props.errorMessage}</p>
        <div className={this.props.styles.labelInputWrapper}>
          <label className={this.state.isFocusedEmail || this.props.emailInput !== "" ?
            this.props.styles.labelPositionerFocused :
            this.props.styles.labelPositioner}
          >
            {this.props.emailLabel}
          </label>
          <input
            autoFocus
            type="email"
            onBlur={this.onFocusEmail}
            onChange={this.props.handleEmailInput}
            onFocus={this.onFocusEmail}
            onKeyDown={this.logMeInOnEnter}
            value={this.props.emailInput}
            />
        </div>

        <div className={this.props.styles.labelInputWrapper}>
          <label className={this.state.isFocusedPassword || this.props.passwordInput !== "" ?
            this.props.styles.labelPositionerFocused :
            this.props.styles.labelPositioner}
          >
            {this.props.passwordLabel}
          </label>
          <input
            type="password"
            onBlur={this.onFocusPassword}
            onChange={this.props.handlePasswordInput}
            onFocus={this.onFocusPassword}
            onKeyDown={this.logMeInOnEnter}
            value={this.props.passwordInput}
          />
        </div>
        <div className={this.props.styles.button}>
          <button type="submit" className="btn btn-primary">{this.props.loginButtonName}</button>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;