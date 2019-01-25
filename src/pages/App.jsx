import 'firebase/auth';

import { connect } from 'react-redux';
import { FETCH_LOCAL_USER } from 'config/localStorageFile';
import { setNoteContent } from 'actions/NotesActions';

import firebase from 'firebase/app';
import history from 'config/history';
import React, { Component } from 'react';

class App extends Component {
  render() {
    if(this.props.user || FETCH_LOCAL_USER) {
      return (
        <div>
          <div onClick={() => this.props.setNoteContent("Mari") }>
            Update Note
          </div>
          { this.props.notes }
          <br/>
          <button onClick={() => {
              firebase.auth().signOut();
              localStorage.removeItem('currentLoggedInUser');
              history.push("/");
            }}>
            Click me
          </button>
        </div>
      );
    }
    else {
      return(
        <h1>PAGE IS LOADING</h1>
      );
    }
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  user: state.loginReducer.userState.user,
});

const mapActionsToProps = {
  setNoteContent: setNoteContent,
};

export default connect( mapStateToProps, mapActionsToProps ) (App);
