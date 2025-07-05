import React, { useContext, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import {
  Box, Button, Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Typography, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, IconButton, CircularProgress,
  Chip, FormControl, InputLabel, Select, MenuItem, Tooltip, Avatar
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import CategoryIcon from "@mui/icons-material/Category";

const Products = () => {
  const { products, loading, error, addProduct, updateProduct, deleteProduct } = useContext(ProductsContext);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const handleOpen = () => {
    setOpen(true);
    setEditMode(false);
    setFormData({ name: "", category: "", price: "", stock: "" });
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
    });
    setEditMode(true);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      await updateProduct(selectedProduct.id, formData);
    } else {
      await addProduct(formData);
    }
    handleClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getStockChip = (stock) => {
    const stockNum = parseInt(stock);
    if (stockNum === 0) {
      return (
        <Chip 
          label="Hết hàng" 
          color="error" 
          size="small"
          sx={{ fontWeight: 'bold' }}
        />
      );
    } else if (stockNum <= 5) {
      return (
        <Chip 
          label={`Còn ${stockNum}`} 
          color="warning" 
          size="small"
          sx={{ fontWeight: 'bold' }}
        />
      );
    } else {
      return (
        <Chip 
          label={`Còn ${stockNum}`} 
          color="success" 
          size="small"
          sx={{ fontWeight: 'bold' }}
        />
      );
    }
  };

  const categories = [
    "Thức ăn",
    "Đồ chơi", 
    "Phụ kiện",
    "Vệ sinh",
    "Thuốc",
    "Khác"
  ];

  return (
    <Box sx={{ p: { xs: 1, md: 3 } }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center" }}>
          <CategoryIcon sx={{ mr: 1, color: "#9c27b0" }} />
          Products Management
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
            background: "linear-gradient(90deg, #9c27b0 0%, #ba68c8 100%)"
          }}
        >
          ADD NEW PRODUCT
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
                  <TableCell>Category</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Stock</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow
                    key={product.id}
                    hover
                    sx={{
                      transition: "background 0.2s",
                      "&:hover": { background: "#f3e5f5" }
                    }}
                  >
                    <TableCell>
                      <Avatar sx={{ bgcolor: "#9c27b0" }}>
                        {product.name ? product.name[0].toUpperCase() : <CategoryIcon />}
                      </Avatar>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 500 }}>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>{getStockChip(product.stock)}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit">
                        <IconButton onClick={() => handleEdit(product)} color="primary">
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton onClick={() => handleDelete(product.id)} color="error">
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
        <DialogTitle>{editMode ? "Edit Product" : "Add New Product"}</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField 
              fullWidth 
              label="Name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              margin="normal" 
              required 
            />
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={formData.category}
                label="Category"
                onChange={handleChange}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField 
              fullWidth 
              label="Price" 
              name="price" 
              type="number"
              value={formData.price} 
              onChange={handleChange} 
              margin="normal" 
              required 
            />
            <TextField 
              fullWidth 
              label="Stock" 
              name="stock" 
              type="number"
              value={formData.stock} 
              onChange={handleChange} 
              margin="normal" 
              required 
            />
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

export default Products; 