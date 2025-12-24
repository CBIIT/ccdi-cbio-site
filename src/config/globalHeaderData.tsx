import Logo from '../assets/header/Portal_Logo.svg';
import LogoSmall from '../assets/header/Portal_Logo_Small.svg';
import searchbarIcon from '../assets/header/Search_Icon.svg';
import usaFlagSmall from '../assets/header/us_flag_small.svg';

// globalHeaderLogo image 468x100
// globalHeaderImage: image 2200x100
export const headerData = {
  globalHeaderLogo: Logo,
  globalHeaderLogoSmall: LogoSmall,
  globalHeaderLogoLink: '/',
  globalHeaderLogoAltText: 'NCI Childhood Cancer Data Initiative (CCDI) - cBioPortal | Childhood Cancer Genomics & Pediatric Oncology Data Platform Logo',
  globalHeaderSearchIcon: searchbarIcon,
  globalHeaderSearchIconAltText: 'search Icon',
  usaFlagSmall,
  usaFlagSmallAltText: 'NCI Childhood Cancer Data Initiative (CCDI) - cBioPortal USA Flag',
};

export const navMobileList = [
  {
    name: 'Home',
    link: '/',
    id: 'navbar-link-home',
    className: 'navMobileItem',
  },
  {
    name: 'Datasets',
    link: '/datasets',
    id: 'navbar-link-datasets',
    className: 'navMobileItem',
  },
  // {
  //   name: 'Web API',
  //   link: 'https://docs.cbioportal.org/web-api-and-clients/',
  //   external: true,
  //   id: 'navbar-link-web-api',
  //   className: 'navMobileItem',
  // },
  {
    name: 'About',
    link: '',
    id: 'navbar-dropdown-about',
    className: 'navMobileItem clickable',
  },
  {
    name: 'CCDI Hub',
    link: 'https://ccdi.cancer.gov/',
    external: true,
    id: 'navbar-link-ccdi-hub',
    className: 'navMobileItem',
  },
  // {
  //   name: 'About',
  //   link: '/about',
  //   id: 'navbar-link-about',
  //   className: 'navMobileItem',
  // },
  // {
  //   name: 'Login',
  //   link: '/login',
  //   id: 'navbar-link-login',
  //   className: 'navMobileItem',
  //   notExistInNav: true,
  // },
];

export const navbarSublists = {
  // Example of how to do a navMobileSubTitle and subtext
  // Home: [
  //   {
  //     name: 'Explore ##',
  //     link: '',
  //     text: 'testText',
  //     className: 'navMobileSubTitle',
  //   },
  // ],
  'About': [
    {
      name: 'About CCDI cBioPortal',
      link: '/about-ccdi-cbioportal',
      // text: 'testText for subitem #1',
      id: 'navbar-dropdown-item-navbar-subitem-1',
      className: 'navMobileSubItem',
    },
    {
      name: 'Dataset and Release Notes',
      link: '/dataset-and-release-notes',
      external: true,
      // text: 'testText for subitem #2',
      id: 'navbar-dropdown-item-navbar-subitem-2',
      className: 'navMobileSubItem',
    },
    {
      name: 'cBio Tutorials',
      link: 'https://docs.cbioportal.org/user-guide/overview/',
      external: true,
      // text: 'testText for subitem #3',
      id: 'navbar-dropdown-item-navbar-subitem-3',
      className: 'navMobileSubItem',
    },
    {
      name: 'Using CCDI cBioPortal Data',
      link: '/using-ccdi-cbioportal-data',
      external: true,
      // text: 'testText for subitem #2',
      id: 'navbar-dropdown-item-navbar-subitem-4',
      className: 'navMobileSubItem',
    },
    {
      name: 'cBio FAQ',
      link: 'https://docs.cbioportal.org/user-guide/faq/',
      external: true,
      // text: 'testText for subitem #4',
      id: 'navbar-dropdown-item-navbar-subitem-5',
      className: 'navMobileSubItem',
    },
    // {
    //   name: 'Visualize Your Data',
    //   link: '/visualize',
    //   // text: 'testText for subitem #4',
    //   id: 'navbar-dropdown-item-navbar-subitem-4',
    //   className: 'navMobileSubItem',
    // },
  ],
  // About: [
  //   {
  //     name: 'Other Resources',
  //     link: '/or',
  //     id: 'navbar-dropdown-item-other-resources',
  //     className: 'navMobileSubTitle',
  //   },
  //   {
  //     name: 'Cancer Genomics Cloud',
  //     link: '/cgc',
  //     id: 'navbar-dropdown-item-cancer-genomics-cloud',
  //     className: 'navMobileSubItem',
  //   },
  //   {
  //     name: 'Database of Genotypes and Phenotypes',
  //     link: '/dbgap',
  //     id: 'navbar-dropdown-item-database-of-genotypes-and-phenotypes',
  //     className: 'navMobileSubItem',
  //   },
  // ],
};
