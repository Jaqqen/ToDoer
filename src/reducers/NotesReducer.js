export default function reducer(
  state={
    note: {
      noteContent: null,
      noteId: null,
    },
  }, action) {

  switch (action.type) {
    case "SET_NOTE_CONTENT": {
      return {
        ...state,
        note: {...state.note, noteContent: action.payload},
      }
    }
  }
}
