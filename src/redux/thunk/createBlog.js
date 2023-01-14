import { createBlogAction } from '../acitons/blogActions';

export const createBlog = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch('http://localhost:5000/createBlog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    });
    const data = await res.json();
    if (data?.insertedId) {
      dispatch(createBlogAction(blog));
      return alert('Success');
    }
    return alert('Failed');
  };
};
