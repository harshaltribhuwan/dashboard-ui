import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { lineChartData } from "./mockData.js";
import "../styles/Charts.scss";

const CustomLineChart = () => {
  return (
    <div className="chart-container line-chart">
      <h4>Completed Articles</h4>
      <LineChart width={400} height={200} data={lineChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="articles" stroke="#2196f3" />
      </LineChart>
    </div>
  );
};

export default CustomLineChart;
