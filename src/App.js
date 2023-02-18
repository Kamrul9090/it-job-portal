import logo from './logo.svg';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router';
import { router } from './routers/Router';

function App() {
  return (
    <div className="max-w-full">
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
