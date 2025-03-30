import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { lineChartData } from "../Data/mockData";
import "./Charts.scss";

const CustomLineChart = () => {
  return (
    <div className="chart-container line-chart">
      <h4>Completed Articles</h4>
      <LineChart
        width={400}
        height={200}
        data={lineChartData}
        margin={{ top: 10, right: 20, left: 20, bottom: 20 }}
      >
        <XAxis
          dataKey="date"
          tickLine={false}
          interval={1}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis width={30} tickLine={false} axisLine={true} tick={{ dx: -5 }} />
        <Tooltip />
        <Line type="monotone" dataKey="articles" stroke="#0070B0" dot={false} />
      </LineChart>
    </div>
  );
};

export default CustomLineChart;
