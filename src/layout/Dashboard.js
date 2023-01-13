import React from 'react';
import { MdArrowBackIos } from 'react-icons/md';

import { Link, Outlet } from 'react-router-dom';
import DashNav from '../components/Dashboard/DashNav';

const Dashboard = () => {
  return (
    <div className="h-full">
      <div className="flex text-lg px-6 py-4 my-auto bg-blue-500">
        <Link to="/home" className="font-semibold text-white inline-block ">
          <MdArrowBackIos className="inline-block  " />
          Back to Home
        </Link>
        <h3 className="font-semibold block text-2xl text-center  mx-auto text-white">
          {' '}
          Admin Dashboard
        </h3>
      </div>
      <div className="grid grid-cols-6 w-full h-full  ">
        <DashNav />
        <div className="col-span-5 mx-2 mt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
