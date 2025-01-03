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
const OncoPrinter = Loader(lazy(() => import('./pages/OncoPrinter')));
const MutationMapper = Loader(lazy(() => import('./pages/MutationMapper')));
const About = Loader(lazy(() => import('./pages/About')));
const Login = Loader(lazy(() => import('./pages/Login')));


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
        path: '/study/summary',
        element: <Home />
      },
      {
        path: '/study/clinicalData',
        element: <Home />
      },
      {
        path: '/study/cnSegments',
        element: <Home />
      },
      {
        path: '/study/plots',
        element: <Home />
      },
      {
        path: '/results/oncoprint',
        element: <Home />
      },
      {
        path: '/results/cancerTypesSummary',
        element: <Home />
      },
      {
        path: '/results/mutualExclusivity',
        element: <Home />
      },
      {
        path: '/results/plots',
        element: <Home />
      },
      {
        path: '/results/mutations',
        element: <Home />
      },
      {
        path: '/results/structuralVariants',
        element: <Home />
      },
      {
        path: '/results/comparison',
        element: <Home />
      },
      {
        path: '/results/cnSegments',
        element: <Home />
      },
      {
        path: '/results/pathways',
        element: <Home />
      },
      {
        path: '/results/download',
        element: <Home />
      },
      {
        path: '/patient',
        element: <Home />
      },
      {
        path: '/patient/summary',
        element: <Home />
      },
      {
        path: '/patient/pathways',
        element: <Home />
      },
      {
        path: '/patient/clinicalData',
        element: <Home />
      },
      {
        path: '/comparison/overlap',
        element: <Home />
      },
      {
        path: '/comparison/survival',
        element: <Home />
      },
      {
        path: '/comparison/clinical',
        element: <Home />
      },
      {
        path: '/comparison/alterations',
        element: <Home />
      },
      {
        path: '/comparison/mutations',
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
        path: '/oncoprinter',
        element: <OncoPrinter />
      },
      {
        path: '/mutation_mapper',
        element: <MutationMapper />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  }
];

export default routes;
