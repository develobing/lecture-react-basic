import { createStore } from 'redux';

const initialState = {
  userInfo: null,
  todos: [],
};

const reducer = (
  state = initialState,
  action
) => {
  switch (action?.type) {
    case 'LOGIN':
      return {
        ...state,
        userInfo: action.payload,
      };

    case 'LOGOUT':
      return {
        ...state,
        userInfo: null,
      };

    case 'TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
