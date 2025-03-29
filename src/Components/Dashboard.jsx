// src/components/Dashboard.js
import React from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import StackedBarChart from "./StackedBarChart";
import OngoingTasksTable from "./OngoingTaskTable";
import ProjectTasksTable from "./ProjectTaskTable.jsx";
import "../styles/Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <h2>Hi Ted!</h2>
        <div className="status-indicators">
          <span className="indicator overdue"></span>
          <span className="indicator in-progress"></span>
          <span className="indicator completed"></span>
        </div>
      </div>
      <div className="charts">
        <LineChart />
        <PieChart />
        <StackedBarChart />
      </div>
      <OngoingTasksTable />
      <ProjectTasksTable />
    </div>
  );
};

export default Dashboard;
