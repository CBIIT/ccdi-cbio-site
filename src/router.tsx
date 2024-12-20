import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router';
import Layout from './layouts';
import SuspenseLoader from './components/SuspenseLoader';


const Loader = (Component) => (props) =>
  ( 
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages
const Home = Loader(lazy(() => import('./pages/Home')));
const Datasets = Loader(lazy(() => import('./pages/Datasets')));
const Visualize = Loader(lazy(() => import('./pages/Visualize')));
const About = Loader(lazy(() => import('./pages/About')));


// status
const Status404 = Loader(
  lazy(() => import('./pages/status/Page404'))
);

const routes: RouteObject[] = [
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/datasets',
        element: <Datasets />
      },
      {
        path: '/visualize',
        element: <Visualize />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  }
];

export default routes;
