import { ADD_TAG } from '../../actionTypes/blogActionTypes';

const initialState = {
  tags: [],
};

const filterReducer = (state = initialState, action) => {
  const selectedTag = state.tags.includes(action.payload);

  switch (action.type) {
    case ADD_TAG:
      if (selectedTag) {
        return {
          ...state,
          tags: state.tags.filter((tag) => tag !== action.payload),
        };
      }
      return {
        ...state,

        tags: [...state.tags, action.payload],
      };
    default:
      return state;
  }
};
export default filterReducer;
