import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
const Blog = ({ blog }) => {
  return (
    <div className="p-5  0 rounded shadow  ">
      <div className="h-[80%]">
        <h2 className=" text-2xl font-bold mb-2">{blog.blogTitle}</h2>
        <p className="mb-2">{blog.blogDetails.slice(0, 150)}...</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm opacity-50 font-semibold">
          Posted By : {blog?.postedBy}
        </p>
        <Link to="/blogDetails/1">
          <button className="inline-block  hover:bg-slate-100 duration-500 px-3  rounded-full py-1">
            Read More <IoIosArrowForward className="inline" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
