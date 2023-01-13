import { combineReducers } from 'redux';
import { blogReducer } from './blogReducers/blogReducer';
import filterReducer from './blogReducers/filterReducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  blog: blogReducer,
});
export default rootReducer;
