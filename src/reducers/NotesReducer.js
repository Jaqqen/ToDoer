export default function reducer(
  state={
    notes: [],
    id: 0,
  }, action) {

  switch (action.type) {
    default:
      return state;
    case "SET_NOTE_CONTENT": {
      return {
        ...state,
        notes:
        [ 
          ...state.notes,
          {
            note:
              {
                content: action.payload,
                id: state.id + 1
              }
          }
        ],
        id: state.id +1,
      }
    }
  }
}
