import * as actionTypes from "../actions/actionTypes";
const initialState = {
  posts: [],
  progress: 0
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return {
        ...state,
        posts: action.posts,
      }
    case actionTypes.PROGESS:
      return{
        ...state,
        progress: action.progress
      }
    case actionTypes.RESET:
      return{
        ...state,
        progress: 0
      }
    default:
      return state;
  }
};

export default postReducer;
