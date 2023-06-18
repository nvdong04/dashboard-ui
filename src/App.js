
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import SignUp from './pages/SignUp'


function App() {
  return (
    <Router>
      <SignUp/>
    </Router>
  );
}

export default App;
