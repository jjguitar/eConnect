import Home from '../containers/Home';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import Terms from '../containers/Terms';
import Profile from '../containers/Profile';
import Process from '../containers/Process';

const serverRoutes = () => {
  return [
    {
      exact: true,
      path: '/',
      component: Home,
    },
    {
      exact: true,
      path: '/login',
      component: Login,
    },
    {
      exact: true,
      path: '/process',
      component: Process,
    },
    {
      exact: true,
      path: '/terms',
      component: Terms,
    },
    {
      exact: true,
      path: '/profile"',
      component: Profile,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
};

export default serverRoutes;
