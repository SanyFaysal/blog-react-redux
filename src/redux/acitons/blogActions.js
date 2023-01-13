import { CREATE_BLOG, LOAD_BLOG } from '../actionTypes/blogActionTypes';

export const loadBlogAction = (data) => {
  return {
    type: LOAD_BLOG,
    payload: data,
  };
};
export const createBlogAction = (data) => {
  return {
    type: CREATE_BLOG,
    payload: data,
  };
};
