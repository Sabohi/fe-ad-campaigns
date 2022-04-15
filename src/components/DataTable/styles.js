import { createTheme } from '@mui/material/styles';
import colors from '@/styles/Colors';

const theme = createTheme({
  components: {
    MUIDataTable: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
        paper: {
          boxShadow: 'none',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.primary,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: 'transparent',
        },
      },
    },
    MUIDataTableHeadCell: {
      styleOverrides: {
        fixedHeader: {
          backgroundColor: colors.secondary,
        },
      },
    },
    MuiTableFooter: {
      styleOverrides: {
        root: {
          '& .MuiToolbar-root': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
});

export default theme;
