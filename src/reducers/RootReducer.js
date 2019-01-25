import { combineReducers } from 'redux';

import appReducer from './AppReducer';
import loginReducer from './LoginReducer'
import noteEditorReducer from './NoteEditorReducer';
import notesReducer from './NotesReducer';

export default combineReducers({
  appReducer,
  loginReducer,
  noteEditorReducer,
  notesReducer,
});
