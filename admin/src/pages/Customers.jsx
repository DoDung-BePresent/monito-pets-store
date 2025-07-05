import React, { useContext, useState } from "react";
import CustomersContext from "../context/CustomersContext";
import {
  Box, Button, Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Typography, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, IconButton, CircularProgress,
  Tooltip, Avatar
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import PeopleIcon from "@mui/icons-material/People";

const Customers = () => {
  const { customers, loading, error, addCustomer, updateCustomer, deleteCustomer } = useContext(CustomersContext);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    joined: "",
  });

  const handleOpen = () => {
    setOpen(true);
    setEditMode(false);
    setFormData({ name: "", email: "", phone: "", joined: "" });
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCustomer(null);
  };

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setFormData({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      joined: customer.joined,
    });
    setEditMode(true);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      await deleteCustomer(id);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      await updateCustomer(selectedCustomer.id, formData);
    } else {
      await addCustomer(formData);
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
    <Box sx={{ p: { xs: 1, md: 3 } }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center" }}>
          <PeopleIcon sx={{ mr: 1, color: "#ed6c02" }} />
          Customers Management
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
            background: "linear-gradient(90deg, #ed6c02 0%, #ffb74d 100%)"
          }}
        >
          ADD NEW CUSTOMER
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
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Joined</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow
                    key={customer.id}
                    hover
                    sx={{
                      transition: "background 0.2s",
                      "&:hover": { background: "#fff3e0" }
                    }}
                  >
                    <TableCell>
                      <Avatar sx={{ bgcolor: "#ed6c02" }}>
                        {customer.name ? customer.name[0].toUpperCase() : <PeopleIcon />}
                      </Avatar>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 500 }}>{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>{customer.joined}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit">
                        <IconButton onClick={() => handleEdit(customer)} color="primary">
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton onClick={() => handleDelete(customer.id)} color="error">
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
        <DialogTitle>{editMode ? "Edit Customer" : "Add New Customer"}</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Phone" name="phone" value={formData.phone} onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Joined" name="joined" value={formData.joined} onChange={handleChange} margin="normal" required />
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

export default Customers; 