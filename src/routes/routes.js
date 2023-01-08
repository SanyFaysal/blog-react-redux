import { createBrowserRouter } from 'react-router-dom';
import BlogDetails from '../components/Blog/BlogDetails';
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
      // {
      //   path: "top-rated",
      //   element: <TopRated />,
      // },
      // {
      //   path: "cart",
      //   element: <Cart />,
      // },
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <ProductList />,
  //     },
  //     {
  //       path: "add-product",
  //       element: <AddProduct />,
  //     },
  //   ],
  // },
]);

export default routes;
