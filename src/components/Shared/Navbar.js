import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-blue-500 px-16 py-5 flex justify-between align-center text-lg font-semibold text-white ">
      <h5 className="">Blogger</h5>
      <ul className=" flex justify-end text-white">
        <li className="mx-4">Home</li>
        <li className="mx-4">Reading History</li>
        <li className="mx-4">Dashboard</li>
      </ul>
    </div>
  );
};

export default Navbar;
