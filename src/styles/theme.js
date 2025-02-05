import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: 'rgb(11,26,51)', // Set the background color
      paper: 'rgb(11,26,51)',   // If you want cards/dialogs to have the same background
    },
  },
});

export default theme;
