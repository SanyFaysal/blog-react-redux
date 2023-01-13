import { createBrowserRouter } from 'react-router-dom';
import BlogDetails from '../components/Blog/BlogDetails';
import AddBlog from '../components/Dashboard/AddBlog';

import BlogList from '../components/Dashboard/BlogList';
import Dashboard from '../layout/Dashboard';
import Main from '../layout/Main';
import Home from '../pages/Home';
import ReadingHistory from '../pages/ReadingHistory';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/blogDetails/:id',
        element: <BlogDetails />,
      },
      {
        path: 'reading-history',
        element: <ReadingHistory />,
      },
      {
        path: '*',
        element: (
          <div className=" p-16 text-center">
            <h1 className="text-6xl font-bold text-gray-600">404</h1>
            <p className="text-2xl font-semibold  text-gray-600">
              page not found
            </p>
          </div>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard',
        element: <BlogList />,
      },
      {
        path: 'blogList',
        element: <BlogList />,
      },

      {
        path: 'addBlog',
        element: <AddBlog />,
      },
    ],
  },
]);

export default routes;
