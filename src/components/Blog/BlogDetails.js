import React from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { AiFillTags, AiOutlineComment } from 'react-icons/ai';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Link } from 'react-router-dom';
const BlogDetails = () => {
  return (
    <div className="mx-16 my-6">
      <img
        src="https://intellipaat.com/blog/wp-content/uploads/2020/09/Learn-ReactJS-Tutorial-Big.png"
        alt=""
        className="w-[100%] h-[50vh]"
      />

      <div className="my-4">
        <h2 className="text-4xl text-gray-500 font-bold mb-3">Blog Details</h2>
        <div className="flex text-xl">
          <p className="flex items-center mr-2">
            {' '}
            <BsPersonFill className="inline text-xl" />
            <span className="inline-block ml-1 font-semibold"> By Admin</span>
          </p>
          <p className="flex items-center mx-2">
            {' '}
            <AiFillTags className="inline text-xl" />
            <span className="inline-block ml-1 font-semibold">
              Web Development
            </span>
          </p>
          <p className="flex items-center mx-2">
            {' '}
            <AiOutlineComment className="inline text-xl" />
            <span className="inline-block ml-1 font-semibold"> 0 comments</span>
          </p>
        </div>
        <p className="my-5 text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          voluptatum ut molestiae porro impedit molestias? Officiis voluptatum
          explicabo odio ex quia provident consectetur illum natus, nam hic
          eligendi sed labore eaque numquam facilis sapiente eos excepturi rerum
          libero sequi porro quasi fugiat impedit voluptatem? Adipisci
          dignissimos asperiores dolores laborum recusandae.
        </p>
        <div className="flex justify-center items-center my-16">
          <Link to="/home" className="">
            <button className="px-3 py-1   text-xl font-semibold flex items-center justify-center ">
              <MdOutlineArrowBackIosNew className="inline-block mr-2" />
              Back to Home{' '}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
