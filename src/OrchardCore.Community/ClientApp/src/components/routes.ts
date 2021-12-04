import Home from './home';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FormPage from './pages/FormPage';
import DynamicRoutePage from './pages/DynamicRoutePage';
import NotFoundPage from './pages/NotFoundPage';
import PanelLeftPage from './pages/PanelLeftPage';
import PanelRightPage from './pages/PanelRightPage';
import LaunchPage from './pages/LaunchPage';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/app',
    component: Home,
  },  
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/launch/',
    component: LaunchPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
