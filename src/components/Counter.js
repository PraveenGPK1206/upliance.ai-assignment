import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, Container } from '@mui/material';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem('count');
    if (savedCount) setCount(Number(savedCount));
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  return (
    <Container
      sx={{
        width:'100%',
        height:'88%',
        borderRadius:'5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `rgb(${count}, ${100 + count}, ${255 - count})`,
        transition: 'background-color 0.3s ease',
      }}
    >
    <Box
        sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        color:'rgb(235, 247, 251)',
        padding:'10px'
      }}
      >
       
       <Typography variant="h4">Counter: {count}</Typography>
       
    </Box>
    <Box
        sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        padding:'10px'
      }}
      >
       <Button variant="contained" onClick={() => setCount(count - 1)}>-</Button>
       <Button variant="contained" onClick={() => setCount(0)}>Reset</Button>
       <Button variant="contained" onClick={() => setCount(count + 1)}>+</Button>
    </Box>
    </Container>
  );
};

export default Counter;
