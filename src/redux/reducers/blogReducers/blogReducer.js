import { CREATE_BLOG, LOAD_BLOG } from '../../actionTypes/blogActionTypes';

export const initialState = {
  blogs: [],
};
export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOG:
      return {
        ...state,
        blogs: [...action.payload],
      };
    case CREATE_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };

    default:
      return state;
  }
};
