import { SET_TOKEN, SET_USER } from "../keys";

const initialState = {
  user: [],
  token: "",
};

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
}

export default UserReducer;
