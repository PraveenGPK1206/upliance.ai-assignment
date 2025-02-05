import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Box, Typography } from '@mui/material';
import { setUser } from '../redux/userSlice';
import { v4 as uuidv4 } from 'uuid';

const UserForm = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: userData.id || uuidv4(),
    name: userData.name || '',
    address: userData.address || '',
    email: userData.email || '',
    phone: userData.phone || '',
  });

  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = 'You have unsaved changes!';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e) => {
    setIsDirty(true);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(setUser(formData));
    localStorage.setItem('user', JSON.stringify(formData));
    alert('User data saved');
    setIsDirty(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '300px', margin: 'auto', padding: '20px' }}>
      <Typography variant="h6">User Form</Typography>
      <TextField label="Name" name="name" value={formData.name} onChange={handleChange} margin="normal" spellCheck="false" fullWidth />
      <TextField label="Address" name="address" value={formData.address} onChange={handleChange} margin="normal" spellCheck="false" fullWidth />
      <TextField label="Email" name="email" value={formData.email} onChange={handleChange} margin="normal" spellCheck="false" fullWidth />
      <TextField label="Phone" name="phone" value={formData.phone} onChange={handleChange} margin="normal" spellCheck="false" fullWidth />
      <Button variant="contained" onClick={handleSubmit} sx={{ marginTop: '20px' }}>Submit</Button>
    </Box>
  );
};

export default UserForm;
