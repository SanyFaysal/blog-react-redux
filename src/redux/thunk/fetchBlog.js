import { loadBlogAction } from '../acitons/blogActions';

const fetchBlog = () => {
  return async (dispatch, getState) => {
    const res = await fetch('http://localhost:5000/blogs');
    const data = await res.json();
    console.log(data);
    if (data?.status) {
      return dispatch(loadBlogAction(data.data));
    }
    return;
  };
};

export default fetchBlog;
