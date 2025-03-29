import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { stackedBarChartData } from "../mockData.js";
import "../../styles/Charts.scss";

const CustomStackedBarChart = () => {
  return (
    <div className="chart-container small-chart">
      <h4>Completed Issues</h4>
      <BarChart
        width={200}
        height={200}
        data={stackedBarChartData}
        margin={{ top: 10, right: 20, left: 20, bottom: 20 }}
      >
        <XAxis
          dataKey="month"
          tickLine={false}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis width={30} tickLine={false} axisLine={true} tick={{ dx: -5 }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Nature" stackId="a" fill="#0070B0" />
        <Bar dataKey="BHP" stackId="a" fill="#94A3B8" />
      </BarChart>
    </div>
  );
};

export default CustomStackedBarChart;
