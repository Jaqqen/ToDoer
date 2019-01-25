import { connect } from "react-redux";
import { FETCH_LOCAL_USER } from "config/localStorageFile";

import * as loginActions from "actions/LoginActions";
import history from "config/history";
import LoginForm from "components/loginComponents/LoginForm";
import React, { Component } from "react";
import styles from "static/css/Login.css";

class Login extends Component {
  constructor() {
    super();
    //Bindings

    //checks if localStorage has a currentLoggedInUser and pushes the user to the
    //application page
    //currentLoggedInUser: contains the currently logged in firebase-user
    if (FETCH_LOCAL_USER) {
      history.push("/application");
    }
  }

  login(e) {
    //Prevents submit-event from refreshing page before firebase
    //authentication
    e.preventDefault();

    //logs the user in through the loginActions
    this.props.handleLogin(this.props.emailInput, this.props.passwordInput);
  }

  //same function when using enter instead of the button
  logMeInOnEnter(e) {
    if (
      e.key === "Enter" &&
      e.shiftKey === false &&
      (this.props.emailInput !== "" || this.props.passwordInput !== "")
    ) {
      this.login(e);
    }
  }

  render() {
    return (
      <div className={styles.formWrapper}>
        <form onSubmit={e => this.login(e)}>
          <LoginForm
            emailInput={this.props.emailInput}
            emailLabel={this.props.emailLabel}
            errorMessage={this.props.inputError.status ?
              this.props.inputError.message :
              null}
            handleEmailInput={this.props.inputError.status ?
              this.props.handleErrorEmailInput :
              this.props.handleEmailInput}
            handlePasswordInput={this.props.inputError.status ?
              this.props.handleErrorPasswordInput :
              this.props.handlePasswordInput}
            loginButtonName={"Login"}
            logMeInOnEnter={this.logMeInOnEnter}
            passwordInput={this.props.passwordInput}
            passwordLabel={this.props.passwordLabel}
            styles={styles}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  emailInput: state.loginReducer.email.input,
  emailLabel: state.loginReducer.email.label,
  inputError: state.loginReducer.inputError,
  passwordInput: state.loginReducer.password.input,
  passwordLabel: state.loginReducer.password.label
});

const mapActionsToProps = {
  handleEmailInput: loginActions.handleEmailInput,
  handleErrorEmailInput: loginActions.handleErrorEmailInput,
  handleErrorPasswordInput: loginActions.handleErrorPasswordInput,
  handleLogin: loginActions.handleLogin,
  handlePasswordInput: loginActions.handlePasswordInput

};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Login);
