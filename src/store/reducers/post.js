import * as actionTypes from "../actions/actionTypes";
const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case actionTypes.ADD_POST:
      return {
        ...state,
        posts: state.posts.concat(action.post),
      };
    default:
      return state;
  }
};

export default postReducer;
