import { Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from './Components/Dashboard';
import EditDashboard from "./Components/EditDashboard/EditDashboard";


function App() {

  return (
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/editdashboard" element={<EditDashboard />} />
  </Routes>
  )
}

export default App
