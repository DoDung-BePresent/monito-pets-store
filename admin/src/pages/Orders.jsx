import React, { useContext, useState } from "react";
import OrdersContext from "../context/OrdersContext";
import {
  Box, Button, Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Typography, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, IconButton, CircularProgress,
  Chip, FormControl, InputLabel, Select, MenuItem, Tooltip, Avatar
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Orders = () => {
  const { orders, loading, error, addOrder, updateOrder, deleteOrder } = useContext(OrdersContext);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [formData, setFormData] = useState({
    customer: "",
    total: "",
    date: "",
    status: true, // true = completed, false = pending
  });

  const handleOpen = () => {
    setOpen(true);
    setEditMode(false);
    setFormData({ customer: "", total: "", date: "", status: true });
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedOrder(null);
  };

  const handleEdit = (order) => {
    setSelectedOrder(order);
    setFormData({
      customer: order.customer,
      total: order.total,
      date: order.date,
      status: order.status,
    });
    setEditMode(true);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      await deleteOrder(id);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      await updateOrder(selectedOrder.id, formData);
    } else {
      await addOrder(formData);
    }
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'status' ? value === 'true' : value,
    });
  };

  const getStatusChip = (status) => {
    return status ? (
      <Chip 
        label="Completed" 
        color="success" 
        size="small"
        sx={{ fontWeight: 'bold' }}
      />
    ) : (
      <Chip 
        label="Pending" 
        color="warning" 
        size="small"
        sx={{ fontWeight: 'bold' }}
      />
    );
  };

  return (
    <Box sx={{ p: { xs: 1, md: 3 } }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center" }}>
          <ShoppingCartIcon sx={{ mr: 1, color: "#2e7d32" }} />
          Orders Management
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
          sx={{
            fontWeight: "bold",
            fontSize: 16,
            px: 3,
            py: 1.5,
            borderRadius: 2,
            boxShadow: 2,
            background: "linear-gradient(90deg, #2e7d32 0%, #66bb6a 100%)"
          }}
        >
          ADD NEW ORDER
        </Button>
      </Box>
      {loading && <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}><CircularProgress /></Box>}
      {error && <Typography color="error" align="center" sx={{ my: 4 }}>{error}</Typography>}
      {!loading && !error && (
        <Paper elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
          <TableContainer>
            <Table>
              <TableHead sx={{ background: "#f5f5f5" }}>
                <TableRow>
                  <TableCell>Avatar</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow
                    key={order.id}
                    hover
                    sx={{
                      transition: "background 0.2s",
                      "&:hover": { background: "#e8f5e9" }
                    }}
                  >
                    <TableCell>
                      <Avatar sx={{ bgcolor: "#2e7d32" }}>
                        {order.customer ? order.customer[0].toUpperCase() : <ShoppingCartIcon />}
                      </Avatar>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 500 }}>{order.customer}</TableCell>
                    <TableCell>${order.total}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{getStatusChip(order.status)}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit">
                        <IconButton onClick={() => handleEdit(order)} color="primary">
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton onClick={() => handleDelete(order.id)} color="error">
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{editMode ? "Edit Order" : "Add New Order"}</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField 
              fullWidth 
              label="Customer" 
              name="customer" 
              value={formData.customer} 
              onChange={handleChange} 
              margin="normal" 
              required 
            />
            <TextField 
              fullWidth 
              label="Total" 
              name="total" 
              type="number"
              value={formData.total} 
              onChange={handleChange} 
              margin="normal" 
              required 
            />
            <TextField 
              fullWidth 
              label="Date" 
              name="date" 
              type="date"
              value={formData.date} 
              onChange={handleChange} 
              margin="normal" 
              required 
              InputLabelProps={{ shrink: true }}
            />
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={formData.status.toString()}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value="true">Completed</MenuItem>
                <MenuItem value="false">Pending</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {editMode ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Orders; 