import React, { useContext, useState } from "react";
import { PetContext } from "../context/PetContext";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  Avatar
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import PetsIcon from "@mui/icons-material/Pets";

const PetManagement = () => {
  const { pets, loading, error, createPet, updatePet, removePet } = useContext(PetContext);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    weight: "",
    ownerName: "",
    ownerPhone: "",
  });

  const handleOpen = () => {
    setOpen(true);
    setEditMode(false);
    setFormData({
      name: "",
      species: "",
      breed: "",
      age: "",
      weight: "",
      ownerName: "",
      ownerPhone: "",
    });
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPet(null);
  };

  const handleEdit = (pet) => {
    setSelectedPet(pet);
    setFormData({
      name: pet.name,
      species: pet.species,
      breed: pet.breed,
      age: pet.age,
      weight: pet.weight,
      ownerName: pet.ownerName,
      ownerPhone: pet.ownerPhone,
    });
    setEditMode(true);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this pet?")) {
      await removePet(id);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      await updatePet(selectedPet.id, formData);
    } else {
      await createPet(formData);
    }
    handleClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ p: { xs: 1, md: 3 } }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center" }}>
          <PetsIcon sx={{ mr: 1, color: "#1976d2" }} />
          Pet Management
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
            background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)"
          }}
        >
          ADD NEW PET
        </Button>
      </Box>
      <Paper elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead sx={{ background: "#f5f5f5" }}>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Species</TableCell>
                <TableCell>Breed</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Weight</TableCell>
                <TableCell>Owner Name</TableCell>
                <TableCell>Owner Phone</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pets.map((pet) => (
                <TableRow
                  key={pet.id}
                  hover
                  sx={{
                    transition: "background 0.2s",
                    "&:hover": { background: "#e3f2fd" }
                  }}
                >
                  <TableCell>
                    <Avatar sx={{ bgcolor: "#1976d2" }}>
                      {pet.name ? pet.name[0].toUpperCase() : <PetsIcon />}
                    </Avatar>
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>{pet.name}</TableCell>
                  <TableCell>{pet.species}</TableCell>
                  <TableCell>{pet.breed}</TableCell>
                  <TableCell>{pet.age}</TableCell>
                  <TableCell>{pet.weight}</TableCell>
                  <TableCell>{pet.ownerName}</TableCell>
                  <TableCell>{pet.ownerPhone}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="Edit">
                      <IconButton onClick={() => handleEdit(pet)} color="primary">
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDelete(pet.id)} color="error">
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
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{editMode ? "Edit Pet" : "Add New Pet"}</DialogTitle>
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
            <TextField
              fullWidth
              label="Species"
              name="species"
              value={formData.species}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Weight"
              name="weight"
              type="number"
              value={formData.weight}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Owner Name"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Owner Phone"
              name="ownerPhone"
              value={formData.ownerPhone}
              onChange={handleChange}
              margin="normal"
              required
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            {editMode ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PetManagement; 