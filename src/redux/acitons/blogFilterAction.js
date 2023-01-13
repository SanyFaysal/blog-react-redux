import { ADD_TAG } from '../actionTypes/blogActionTypes';

export const addTag = (data) => {
  return {
    type: ADD_TAG,
    payload: data,
  };
};
