import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import EditProject from "./Components/EditProject.jsx"; // New Component
import "./App.scss";

function App() {
  return (
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/EditProject" element={<EditProject />} />
        </Routes>
      </div>
  );
}

export default App;
