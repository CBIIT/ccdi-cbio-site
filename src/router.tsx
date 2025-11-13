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
        path: '/study/summary',
        element: <Study />
      },
      {
        path: '/study/clinicalData',
        element: <Study />
      },
      {
        path: '/study/heatmaps',
        element: <Study />
      },
      {
        path: '/study/cnSegments',
        element: <Study />
      },
      {
        path: '/study/filesAndLinks',
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
        path: '/results/survival',
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
        path: '/results/coexpression',
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
        path: '/results/network',
        element: <Results />
      },
      {
        path: '/results/pathways',
        element: <Results />
      },
      {
        path: '/results/expression',
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
        path: '/patient/genomicEvolution',
        element: <Patient />
      },
      {
        path: '/patient/clinicalData',
        element: <Patient />
      },
      {
        path: '/patient/filesAndLinks',
        element: <Patient />
      },
      {
        path: '/patient/pathologyReport',
        element: <Patient />
      },
      {
        path: '/patient/tissueImage',
        element: <Patient />
      },
      {
        path: '/patient/MSKTissueImage',
        element: <Patient />
      },
      {
        path: '/patient/trialMatchTab',
        element: <Patient />
      },
      {
        path: '/patient/mutationalSignatures',
        element: <Patient />
      },
      {
        path: '/patient/pathways',
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
        path: '/comparison/mrna',
        element: <Comparison />
      },
      {
        path: '/comparison/protein',
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
        path: '/comparison/dna_methylation',
        element: <Comparison />
      },
      {
        path: '/comparison/alterations',
        element: <Comparison />
      },
      {
        path: '/comparison/generic_assay',
        element: <Comparison />
      },
      {
        path: '/comparison/generic_assay_binary',
        element: <Comparison />
      },
      {
        path: '/comparison/generic_assay_categorical',
        element: <Comparison />
      },
      {
        path: '/comparison/mutations',
        element: <Comparison />
      },
      {
        path: '/comparison/pathways',
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
