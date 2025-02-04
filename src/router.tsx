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
const Study = Loader(lazy(() => import('./pages/Study')));
const Results = Loader(lazy(() => import('./pages/Results')));
const Patient = Loader(lazy(() => import('./pages/Patient')));
const LoadingComparison = Loader(lazy(() => import('./pages/LoadingComparison')));
const Comparison = Loader(lazy(() => import('./pages/Comparison')));
const Datasets = Loader(lazy(() => import('./pages/Datasets')));
const Visualize = Loader(lazy(() => import('./pages/Visualize')));
const OncoPrinter = Loader(lazy(() => import('./pages/OncoPrinter')));
const MutationMapper = Loader(lazy(() => import('./pages/MutationMapper')));
// const About = Loader(lazy(() => import('./pages/About')));
// const Login = Loader(lazy(() => import('./pages/Login')));


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
        path: '/study',
        element: <Study />
      },
      {
        path: '/study/summary',
        element: <Study />
      },
      {
        path: '/study/clinicalData',
        element: <Study />
      },
      {
        path: '/study/cnSegments',
        element: <Study />
      },
      {
        path: '/study/plots',
        element: <Study />
      },
      {
        path: '/results',
        element: <Results />
      },
      {
        path: '/results/oncoprint',
        element: <Results />
      },
      {
        path: '/results/cancerTypesSummary',
        element: <Results />
      },
      {
        path: '/results/mutualExclusivity',
        element: <Results />
      },
      {
        path: '/results/plots',
        element: <Results />
      },
      {
        path: '/results/mutations',
        element: <Results />
      },
      {
        path: '/results/structuralVariants',
        element: <Results />
      },
      {
        path: '/results/comparison',
        element: <Results />
      },
      {
        path: '/results/cnSegments',
        element: <Results />
      },
      {
        path: '/results/pathways',
        element: <Results />
      },
      {
        path: '/results/download',
        element: <Results />
      },
      {
        path: '/patient',
        element: <Patient />
      },
      {
        path: '/patient/summary',
        element: <Patient />
      },
      {
        path: '/patient/pathways',
        element: <Patient />
      },
      {
        path: '/patient/clinicalData',
        element: <Patient />
      },
      {
        path: '/loading/comparison',
        element: <LoadingComparison />
      },
      {
        path: '/comparison',
        element: <Comparison />
      },
      {
        path: '/comparison/overlap',
        element: <Comparison />
      },
      {
        path: '/comparison/survival',
        element: <Comparison />
      },
      {
        path: '/comparison/clinical',
        element: <Comparison />
      },
      {
        path: '/comparison/alterations',
        element: <Comparison />
      },
      {
        path: '/comparison/mutations',
        element: <Comparison />
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
      // {
      //   path: '/about',
      //   element: <About />
      // },
      // {
      //   path: '/login',
      //   element: <Login />
      // },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  }
];

export default routes;
