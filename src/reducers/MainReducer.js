import { combineReducers } from 'redux';

import app from './appReducer';
import noteEditor from './noteEditorReducer';
import notes from './notesReducer';

export default combineReducers({
  app,
  noteEditor,
  notes,
});
