import React from "react";
import "./App.css";
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import ThemeProvider from '@/components/ui/ThemeProvider';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;