import React from "react";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
import StackedBarChart from "./Charts/StackedBarChart.jsx";
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
