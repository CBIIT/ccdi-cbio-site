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
const ReleaseNotes = Loader(lazy(() => import('./pages/ReleaseNotes')));
const About = Loader(lazy(() => import('./pages/About')));
const DataUsing = Loader(lazy(() => import('./pages/DataUsing')));
const Info = Loader(lazy(() => import('./pages/Info')));
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
        path: '/study/:tabId',
        element: <Study />
      },
      {
        path: '/results',
        element: <Results />
      },
      {
        path: '/results/:tabId',
        element: <Results />
      },
      {
        path: '/patient',
        element: <Patient />
      },
      {
        path: '/patient/:tabId',
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
        path: '/comparison/:tabId',
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
      {
        path: '/dataset-and-release-notes',
        element: <ReleaseNotes />
      },
      {
        path: '/about-ccdi-cbioportal',
        element: <About />
      },
      {
        path: '/using-ccdi-cbioportal-data',
        element: <DataUsing />
      },
      {
        path: '/info',
        element: <Info />
      },
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
