import React from 'react';
import Blog from '../components/Blog/Blog';
import BlogTag from '../components/Blog/BlogTag';
const tags = [
  'Programming',
  'Web Development',
  'Frontend Development',
  'Backend Development',
  'MERN stack Development',
];

const Home = () => {
  return (
    <div className=" mt-6  mx-16">
      <div className="flex justify-between align-center my-7  ">
        <div className="flex ">
          <p className="text-md font-semibold mr-3 ">Tags : </p>
          <div className=" lg:flex grid grid-cols-1  ">
            {tags.map((tag) => (
              <BlogTag tag={tag} key={tag} />
            ))}
          </div>
        </div>
        <div className="flex ">
          <p className="text-md font-semibold mt-1 mr-3 ">Sort by : </p>
          <div>
            <select
              name=""
              id=""
              className="rounded-full mr-3 py-[5px] px-3 text-sm font-semibold  bg-blue-50 "
            >
              <option value="">Last upload</option>
              <option value="">First upload</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 ">
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
