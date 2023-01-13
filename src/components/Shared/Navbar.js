import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-blue-500 px-16 py-5 flex sticky top-0 justify-between align-center text-lg font-semibold text-white ">
      <h5 className="">Blogger</h5>
      <ul className=" flex justify-end text-white">
        <li className="mx-4">
          <Link to="/home">Home</Link>
        </li>
        <li className="mx-4">
          <Link to="/reading-history">Reading History</Link>
        </li>
        <li className="mx-4">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
