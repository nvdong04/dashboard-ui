
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

import SidebarLayout from './layouts/SidebarLayout';


function App() {
  return (
    <Router>
      <SidebarLayout/>
    </Router>
  );
}

export default App;
