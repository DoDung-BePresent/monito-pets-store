import React, { useContext, useState } from "react";
import OrdersContext from "../context/OrdersContext";
import {
  Box, Button, Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Typography, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, IconButton, CircularProgress
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const Orders = () => {
  const { orders, loading, error, addOrder, updateOrder, deleteOrder } = useContext(OrdersContext);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [formData, setFormData] = useState({
    customer: "",
    total: "",
    date: "",
    status: "",
  });

  const handleOpen = () => {
    setOpen(true);
    setEditMode(false);
    setFormData({ customer: "", total: "", date: "", status: "" });
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h4">Orders Management</Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
          Add New Order
        </Button>
      </Box>
      {loading && <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}><CircularProgress /></Box>}
      {error && <Typography color="error" align="center" sx={{ my: 4 }}>{error}</Typography>}
      {!loading && !error && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(order)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(order.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editMode ? "Edit Order" : "Add New Order"}</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField fullWidth label="Customer" name="customer" value={formData.customer} onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Total" name="total" value={formData.total} onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Date" name="date" value={formData.date} onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Status" name="status" value={formData.status} onChange={handleChange} margin="normal" required />
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