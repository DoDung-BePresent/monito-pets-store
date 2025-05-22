import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: '#f5f5f5',
          minHeight: '100vh',
          p: 0, // Không padding
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '100%',
            background: '#fff',
            borderRadius: 0, // Không bo góc nếu muốn full thật sự
            boxShadow: 0,    // Không shadow nếu muốn full thật sự
            minHeight: '100vh',
            p: 0, // Không padding
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;