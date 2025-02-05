import React from 'react';
import { Container, Typography, Button} from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Container
        sx={{
          display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        }}
      >
        <Container>
          <Typography variant="h4" gutterBottom>
            👋 Welcome!
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Choose an option to get started:
          </Typography>

          <Button variant="contained" fullWidth sx={{ marginBottom: 2 }} component={Link} to="/counter">
            🚀 Go to Counter
          </Button>
          <Button variant="contained" fullWidth sx={{ marginBottom: 2 }} component={Link} to="/form">
            📝 Go to User Form
          </Button>
          <Button variant="contained" fullWidth component={Link} to="/editor">
            ✍️ Go to Rich Text Editor
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default Dashboard;
