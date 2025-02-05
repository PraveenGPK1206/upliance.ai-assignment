import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';
import theme from './styles/theme';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userSlice"; 

const store = configureStore({
  reducer: {
    user: userReducer, 
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
