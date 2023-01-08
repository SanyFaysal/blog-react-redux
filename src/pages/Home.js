import React from 'react';
import Blog from '../components/Blog/Blog';
import BlogTag from '../components/Blog/BlogTag';

const Home = () => {
  return (
    <div className=" mt-6  mx-16">
      <div className="flex justify-between align-center my-7  ">
        <div className="flex ">
          <p className="text-lg font-semibold mr-3 ">Tags : </p>
          <BlogTag />
          <BlogTag />
          <BlogTag />
          <BlogTag />
          <BlogTag />
        </div>
        <div className="flex ">
          <p className="text-lg font-semibold mt-1 mr-3 ">Sort by : </p>
          <select
            name=""
            id=""
            className="rounded-full mr-3 py-[5px] px-3 text-lg font-semibold  bg-blue-50 "
          >
            <option value="">Last upload</option>
            <option value="">First upload</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 ">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default Home;
