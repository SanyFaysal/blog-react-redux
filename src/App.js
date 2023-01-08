import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import routes from './routes/routes';

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
