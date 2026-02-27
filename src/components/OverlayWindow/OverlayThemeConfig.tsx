import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import themes, { typographyOverrides } from './themes';

const overlayComponents = {
  MuiDialog: {
    styleOverrides: {
      paper: {
        width: '770px',
        height: '620px',
        borderRadius: '5px !important',
        backgroundColor: '#ffffff !important',
        padding: '0px 20px 0px 20px !important',
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        fontSize: '14px !important',
        color: '#000000',
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: '15px 15px 15px 0 !important',
        fontSize: '22px !important',
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        color: '#000045',
        '& p': {
          fontSize: '14px',
        },
        '& span': {
          fontSize: '14px',
        },
        padding: '20px 0px 0px 0px !important',
        '& ul': {
          marginTop: '0px',
          paddingTop: '0px',
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        width: '133px',
        height: '35px',
        backgroundColor: '#337ab7',
        color: '#fff',
        textTransform: 'none' as const,
        '&:hover': {
          backgroundColor: '#2e6da4',
        },
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        fontSize: '14px',
      },
      padding: {
        paddingTop: '0px !important',
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        fontSize: '14px',
        padding: '2px 0px 0px 25px !important',
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      root: {
        padding: '0 8px',
        '&:first-of-type': {
          wordBreak: 'break-word',
        },
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        marginBottom: 'auto',
        fontSize: '12px',
        color: 'black',
        width: '10px',
        minWidth: '2px',
        paddingTop: '10px',
      },
    },
  },
  MuiDialogContentText: {
    styleOverrides: {
      root: {
        color: '#000000',
        marginBottom: '10px',
        '&:lastChild': {
          marginBottom: '0px',
        },
      },
    },
  },
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor: '#00000047',
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        height: '75px',
        justifyContent: 'flex-end',
        padding: '30px 10px 25px 0px !important',
      },
    },
  },
};

const { components: themeLightComponents, ...themeLightRest } = themes.light;

const overlayTheme = createTheme({
  ...themeLightRest,
  typography: typographyOverrides,
  components: overlayComponents,
});

export default function OverlayThemeConfig({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={overlayTheme}>
      {children}
    </ThemeProvider>
  );
}
