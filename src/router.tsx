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
        path: '/ccdi-cbio-site',
        element: <Home />
      },
      {
        path: '/ccdi-cbio-site/study',
        element: <Study />
      },
      {
        path: '/ccdi-cbio-site/study/summary',
        element: <Study />
      },
      {
        path: '/ccdi-cbio-site/study/clinicalData',
        element: <Study />
      },
      {
        path: '/ccdi-cbio-site/study/cnSegments',
        element: <Study />
      },
      {
        path: '/ccdi-cbio-site/study/plots',
        element: <Study />
      },
      {
        path: '/ccdi-cbio-site/results',
        element: <Results />
      },
      {
        path: '/ccdi-cbio-site/results/oncoprint',
        element: <Results />
      },
      {
        path: '/ccdi-cbio-site/results/cancerTypesSummary',
        element: <Results />
      },
      {
        path: '/ccdi-cbio-site/results/mutualExclusivity',
        element: <Results />
      },
      {
        path: '/ccdi-cbio-site/results/plots',
        element: <Results />
      },
      {
        path: '/ccdi-cbio-site/results/mutations',
        element: <Results />
      },
      {
        path: '/ccdi-cbio-site/results/structuralVariants',
        element: <Results />
      },
      {
        path: '/ccdi-cbio-site/results/comparison',
        element: <Results />
      },
      {
        path: '/ccdi-cbio-site/results/cnSegments',
        element: <Results />
      },
      {
        path: '/ccdi-cbio-site/results/pathways',
        element: <Results />
      },
      {
        path: '/ccdi-cbio-site/results/download',
        element: <Results />
      },
      {
        path: '/ccdi-cbio-site/patient',
        element: <Patient />
      },
      {
        path: '/ccdi-cbio-site/patient/summary',
        element: <Patient />
      },
      {
        path: '/ccdi-cbio-site/patient/pathways',
        element: <Patient />
      },
      {
        path: '/ccdi-cbio-site/patient/clinicalData',
        element: <Patient />
      },
      {
        path: '/ccdi-cbio-site/loading/comparison',
        element: <LoadingComparison />
      },
      {
        path: '/ccdi-cbio-site/comparison',
        element: <Comparison />
      },
      {
        path: '/ccdi-cbio-site/comparison/overlap',
        element: <Comparison />
      },
      {
        path: '/ccdi-cbio-site/comparison/survival',
        element: <Comparison />
      },
      {
        path: '/ccdi-cbio-site/comparison/clinical',
        element: <Comparison />
      },
      {
        path: '/ccdi-cbio-site/comparison/alterations',
        element: <Comparison />
      },
      {
        path: '/ccdi-cbio-site/comparison/mutations',
        element: <Comparison />
      },
      {
        path: '/ccdi-cbio-site/datasets',
        element: <Datasets />
      },
      {
        path: '/ccdi-cbio-site/visualize',
        element: <Visualize />
      },
      {
        path: '/ccdi-cbio-site/oncoprinter',
        element: <OncoPrinter />
      },
      {
        path: '/ccdi-cbio-site/mutation_mapper',
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
        path: 'ccdi-cbio-site/*',
        element: <Status404 />
      }
    ]
  }
];

export default routes;
