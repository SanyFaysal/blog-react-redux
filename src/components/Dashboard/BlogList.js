import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBlog from '../../redux/thunk/fetchBlog';
import BlogRow from './BlogRow';

const BlogList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);
  const state = useSelector((state) => state);
  const blogs = state?.blog?.blogs;

  return (
    <div className="overflow-x-auto w-full h-[90vh] ">
      <table className="table w-full ">
        <thead>
          <tr>
            <th></th>
            <th>Blog Title</th>
            <th>Details</th>
            <th>Posted by</th>

            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((blog) => (
            <BlogRow blog={blog} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
