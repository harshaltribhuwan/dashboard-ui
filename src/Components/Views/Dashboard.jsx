import React from "react";
import LineChart from "../Charts/LineChart.jsx";
import PieChart from "../Charts/PieChart.jsx";
import StackedBarChart from "../Charts/StackedBarChart.jsx";
import OngoingTasksTable from "../Tables/OngoingTaskTable.jsx";
import ProjectTasksTable from "../Tables/ProjectTaskTable.jsx";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <h2>Hi Ted!</h2>
      </div>
      <div className="charts">
        <div className="line-chart">
          <LineChart />
        </div>
        <div className="pie-chart">
          <PieChart />
        </div>
        <div className="bar-chart">
          <StackedBarChart />
        </div>
      </div>

      <div className="heading-container">
        <h4 className="table-heading">Ongoing tasks</h4>
      </div>

      <OngoingTasksTable />

      <div>
        <h4 className="table-heading">Project Tasks</h4>
      </div>

      <ProjectTasksTable />
    </div>
  );
};

export default Dashboard;
