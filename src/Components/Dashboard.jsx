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
