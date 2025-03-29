// src/components/StackedBarChart.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { stackedBarChartData } from "./mockData.js";
import "../styles/Charts.scss";

const CustomStackedBarChart = () => {
  return (
    <div className="chart-container">
      <h4>Completed Issues</h4>
      <BarChart width={200} height={200} data={stackedBarChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Nature" stackId="a" fill="#2196f3" />
        <Bar dataKey="BHP" stackId="a" fill="#90caf9" />
      </BarChart>
    </div>
  );
};

export default CustomStackedBarChart;
