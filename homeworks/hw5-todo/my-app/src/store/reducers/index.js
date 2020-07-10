import { ADD_ACTION, TOGGLE_ACTION, SET_TITLE_ACTION } from '../actions';

let initialState = {
  value: 10,
  id: 1,
  title: '',
  isDone: false,
  Todos: [
    { id: 2, title: 'test', isDone: true }
  ]
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ADD_ACTION:
      return { ...state, value: state.value + payload };
    case TOGGLE_ACTION:
      return { ...state, id: state.id + payload };
    case SET_TITLE_ACTION:
      return { ...state, title: payload };
    default:
      return state;
  }
}