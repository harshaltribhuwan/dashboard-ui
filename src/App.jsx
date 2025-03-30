import React from "react";
import Sidebar from "./Components/Sidebar.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
