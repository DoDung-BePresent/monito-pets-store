import { Routes, Route, Navigate } from 'react-router-dom'
import PetManagement from './pages/PetManagement'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import Products from './pages/Products'
import AdminLayout from './components/AdminLayout'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
      <Route path="/admin/pets" element={<AdminLayout><PetManagement /></AdminLayout>} />
      <Route path="/admin/orders" element={<AdminLayout><Orders /></AdminLayout>} />
      <Route path="/admin/customers" element={<AdminLayout><Customers /></AdminLayout>} />
      <Route path="/admin/products" element={<AdminLayout><Products /></AdminLayout>} />
      {/* Add more routes here as needed */}
    </Routes>
  )
}

export default App
