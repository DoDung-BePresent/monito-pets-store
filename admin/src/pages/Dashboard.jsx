import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import {
  Pets as PetsIcon,
  ShoppingCart as OrdersIcon,
  People as CustomersIcon,
  Category as ProductsIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const StatCard = ({ title, value, icon, color, onClick }) => (
  <Paper
    elevation={2}
    sx={{
      p: 3,
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      height: '100%',
      borderRadius: 2,
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'box-shadow 0.2s, transform 0.2s',
      '&:hover': {
        boxShadow: 6,
        transform: 'translateY(-2px) scale(1.03)',
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `linear-gradient(45deg, ${color}10, ${color}05)`,
        zIndex: 0,
      },
    }}
    onClick={onClick}
  >
    <Box
      sx={{
        backgroundColor: `${color}20`,
        p: 2,
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {React.cloneElement(icon, { sx: { color: color, fontSize: 40 } })}
    </Box>
    <Box sx={{ position: 'relative', zIndex: 1 }}>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 0.5 }}>
        {title}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: color }}>
        {value}
      </Typography>
    </Box>
  </Paper>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const stats = [
    {
      title: 'Total Pets',
      value: '150',
      icon: <PetsIcon />,
      color: '#1976d2',
      to: '/admin/pets',
    },
    {
      title: 'Total Orders',
      value: '45',
      icon: <OrdersIcon />,
      color: '#2e7d32',
      to: '/admin/orders',
    },
    {
      title: 'Total Customers',
      value: '89',
      icon: <CustomersIcon />,
      color: '#ed6c02',
      to: '/admin/customers',
    },
    {
      title: 'Total Products',
      value: '234',
      icon: <ProductsIcon />,
      color: '#9c27b0',
      to: '/admin/products',
    },
  ];

  return (
    <Box>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
          Monito Pet Shop
        </Typography>
        {/* Có thể thêm slogan hoặc thông tin shop ở đây nếu muốn */}
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <StatCard {...stat} onClick={() => navigate(stat.to)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard; 