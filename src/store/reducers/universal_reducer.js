import { SET_ERR, SET_LOADING, SET_MESSAGE, SET_NOTIFICATIONS } from "../keys";

const initialState = {
  err: false,
  version: "1.0.0",
  message: null,
  loading: false,
  notifications: { count: 0, data: [] },
};

function UniversalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERR:
      return { ...state, err: action.payload };
    case SET_MESSAGE:
      return { ...state, message: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_NOTIFICATIONS:
      return { ...state, notifications: action.payload };
    default:
      return state;
  }
}

export default UniversalReducer;
