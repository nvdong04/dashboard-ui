import config from '../config';

// Pages
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

// Public routes
const publicRoutes = [
    { path: config.routes.signin, component: SignIn },
    { path: config.routes.signup, component: SignUp },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
