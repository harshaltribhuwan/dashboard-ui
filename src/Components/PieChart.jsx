import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { pieChartData } from "./mockData.js";
import "../styles/Charts.scss";

const COLORS = ["#2196f3", "#90caf9", "#e0e0e0", "#bdbdbd"];

const CustomPieChart = () => {
  return (
    <div className="chart-container small-chart">
      <h4>Manuscript Status</h4>
      <PieChart width={200} height={200}>
        <Pie
          data={pieChartData}
          cx={100}
          cy={100}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default CustomPieChart;
