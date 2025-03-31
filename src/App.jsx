import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Views/Sidebar.jsx";
import Dashboard from "./Components/Views/Dashboard.jsx";
import EditProject from "./Components/Views/EditProject.jsx";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/dashboard-ui" element={<Dashboard />} />
        <Route path="/EditProject" element={<EditProject />} />
      </Routes>
    </div>
  );
}

export default App;
