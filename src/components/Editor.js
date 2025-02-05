import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import { useSelector } from 'react-redux';
import 'react-quill/dist/quill.snow.css';
import { Button, Box, Typography } from '@mui/material';

const Editor = () => {
  const user = useSelector((state) => state.user);
  const quillRef = useRef(null);

  const generateContent = (userData) => `
    <h3>User Details</h3>
    <p><strong>Name:</strong> ${userData.name || ''}</p>
    <p><strong>Email:</strong> ${userData.email || ''}</p>
    <p><strong>Phone:</strong> ${userData.phone || ''}</p>
    <p><strong>Address:</strong> ${userData.address || ''}</p>
  `;

  const [editorContent, setEditorContent] = useState(() => 
    localStorage.getItem('editorData') || generateContent(user)
  );

  useEffect(() => {
    setEditorContent(generateContent(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('editorData', editorContent);
  }, [editorContent]);

  useEffect(() => {
    if (quillRef.current) {
      const textarea = quillRef.current.getEditor().root;
      textarea.spellcheck = false;
    }
  }, [editorContent]);

  
  return (
    <Box sx={{ padding: '20px', width: '80%', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Rich Text Editor 
      </Typography>
      <ReactQuill 
        value={editorContent} 
        onChange={setEditorContent} 
        modules={{
          toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ 'align': [] }],
            ['clean']
          ]
        }}
      />
      <Button
        variant="contained"
        onClick={() => alert('Data saved')}
        sx={{ marginTop: '20px' }}
      >
        Save Data
      </Button>
    </Box>
  );
};

export default Editor;
