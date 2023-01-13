import React from 'react';
import { Link } from 'react-router-dom';

const DashNav = () => {
  return (
    <div className="col-span-1  h-full text-xl bg-blue-100   pt-4">
      <div className="mt-5 text-lg text-black">
        <Link to="/dashboard/blogList">
          <p className="py-2 rounded-lg px-6 font-semibold hover:bg-blue-200 hover:text-black cursor-pointer">
            Blog List
          </p>
        </Link>

        <Link to="/dashboard/addBlog" className="">
          <p className="py-2 rounded-lg font-semibold px-6 hover:bg-blue-200 hover:text-black cursor-pointer">
            {' '}
            Add Blog
          </p>
        </Link>
      </div>
    </div>
  );
};

export default DashNav;
