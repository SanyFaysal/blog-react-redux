import React from 'react';
import { Outlet } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Navbar from '../components/Shared/Navbar';
import Home from '../pages/Home';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
