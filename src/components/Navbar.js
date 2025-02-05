import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My React App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/counter">
          Counter
        </Button>
        <Button color="inherit" component={Link} to="/form">
          User Form
        </Button>
        <Button color="inherit" component={Link} to="/editor">
          Rich Text Editor
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
