import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import RichTextEditor from './components/Editor';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Container 
            sx={{
              backgroundColor: `rgb(255, 255, 255)`,
              width: '80vh',
              height: '70vh',
              display: 'flex',       
              justifyContent: 'center', 
              alignItems: 'center',     
              margin: '1% auto',
              borderRadius:'5%'
               }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/editor" element={<RichTextEditor />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
