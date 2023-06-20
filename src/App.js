
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ResetPassword from './pages/ResetPassword';


function App() {
  return (
    <Router>
      <ResetPassword/>
    </Router>
  );
}

export default App;
