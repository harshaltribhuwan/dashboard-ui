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
      <h4 className="table-heading">Ongoing tasks</h4>

      <OngoingTasksTable />

      <h4>Project Tasks</h4>

      <ProjectTasksTable />
    </div>
  );
};

export default Dashboard;
