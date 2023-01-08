import React from 'react';
import Blog from '../components/Blog/Blog';

const Home = () => {
  return (
    <div className=" mt-6  mx-16">
      <div className="flex justify-end align-center mb-5 ">
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
      <div className="grid grid-cols-3 gap-8">
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default Home;
