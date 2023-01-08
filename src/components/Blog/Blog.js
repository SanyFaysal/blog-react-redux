import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
const Blog = () => {
  return (
    <div className=" border p-5 bg-slate-100 rounded shadow-lg  ">
      <img
        src="https://intellipaat.com/blog/wp-content/uploads/2020/09/Learn-ReactJS-Tutorial-Big.png"
        alt=""
      />
      <h2 className="my-4 text-xl font-semibold ">
        Why Should we learn react in 2023 ?{' '}
      </h2>
      <p className="mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        consequatur quisquam dignissimos ratione ullam reprehenderit? Itaque
        facere perferendis voluptate delectus....
      </p>

      <div className="flex justify-end">
        <Link to="/blogDetails/1">
          <button className="inline-block  hover:bg-gray-200 duration-500 px-3  mt-[2px] rounded-full py-1">
            Read More <IoIosArrowForward className="inline" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
