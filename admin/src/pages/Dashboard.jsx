import React, { useContext } from 'react';
import { Grid, Paper, Typography, Box, CircularProgress } from '@mui/material';
import {
  Pets as PetsIcon,
  ShoppingCart as OrdersIcon,
  People as CustomersIcon,
  Category as ProductsIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { PetContext } from '../context/PetContext';
import CustomersContext from '../context/CustomersContext';
import OrdersContext from '../context/OrdersContext';
import ProductsContext from '../context/ProductsContext';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const StatCard = ({ title, value, icon, color, onClick, loading = false }) => (
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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {loading ? (
          <CircularProgress size={24} sx={{ color: color }} />
        ) : (
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: color }}>
            {value}
          </Typography>
        )}
      </Box>
    </Box>
  </Paper>
);

// Dữ liệu mock trends cho 6 tháng gần nhất
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const orderTrends = [
  { month: 'Jan', value: 10 },
  { month: 'Feb', value: 15 },
  { month: 'Mar', value: 8 },
  { month: 'Apr', value: 20 },
  { month: 'May', value: 18 },
  { month: 'Jun', value: 25 },
];
const customerTrends = [
  { month: 'Jan', value: 5 },
  { month: 'Feb', value: 7 },
  { month: 'Mar', value: 6 },
  { month: 'Apr', value: 10 },
  { month: 'May', value: 12 },
  { month: 'Jun', value: 15 },
];
const petTrends = [
  { month: 'Jan', value: 12 },
  { month: 'Feb', value: 14 },
  { month: 'Mar', value: 10 },
  { month: 'Apr', value: 16 },
  { month: 'May', value: 20 },
  { month: 'Jun', value: 22 },
];
const productTrends = [
  { month: 'Jan', value: 30 },
  { month: 'Feb', value: 32 },
  { month: 'Mar', value: 28 },
  { month: 'Apr', value: 35 },
  { month: 'May', value: 40 },
  { month: 'Jun', value: 45 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Lấy dữ liệu từ các Context
  const { pets, loading: petsLoading } = useContext(PetContext);
  const { customers, loading: customersLoading } = useContext(CustomersContext);
  const { orders, loading: ordersLoading } = useContext(OrdersContext);
  const { products, loading: productsLoading } = useContext(ProductsContext);

  const stats = [
    {
      title: 'Total Pets',
      value: pets.length,
      icon: <PetsIcon />,
      color: '#1976d2',
      to: '/admin/pets',
      loading: petsLoading,
    },
    {
      title: 'Total Orders',
      value: orders.length,
      icon: <OrdersIcon />,
      color: '#2e7d32',
      to: '/admin/orders',
      loading: ordersLoading,
    },
    {
      title: 'Total Customers',
      value: customers.length,
      icon: <CustomersIcon />,
      color: '#ed6c02',
      to: '/admin/customers',
      loading: customersLoading,
    },
    {
      title: 'Total Products',
      value: products.length,
      icon: <ProductsIcon />,
      color: '#9c27b0',
      to: '/admin/products',
      loading: productsLoading,
    },
  ];

  return (
    <Box>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
          Monito Pet Shop
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Dashboard Overview
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <StatCard {...stat} onClick={() => navigate(stat.to)} />
          </Grid>
        ))}
      </Grid>

      {/* Biểu đồ trends */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {orders.length > 0 && (
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 3, mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }} color="#2e7d32">
                Orders Trend
              </Typography>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={orderTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" name="Orders" stroke="#2e7d32" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        )}
        {customers.length > 0 && (
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 3, mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }} color="#ed6c02">
                Customers Trend
              </Typography>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={customerTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" name="Customers" stroke="#ed6c02" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        )}
        {pets.length > 0 && (
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 3, mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }} color="#1976d2">
                Pets Trend
              </Typography>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={petTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" name="Pets" stroke="#1976d2" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        )}
        {products.length > 0 && (
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 3, mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }} color="#9c27b0">
                Products Trend
              </Typography>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={productTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" name="Products" stroke="#9c27b0" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Dashboard; 