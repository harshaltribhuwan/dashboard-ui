import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { stackedBarChartData } from '../Data/mockData.js';
import './Charts.scss';

const CustomStackedBarChart = () => {
  return (
    <div
      className='chart-container small-chart'
      role='img'
      aria-label='Stacked bar chart displaying completed issues by category'
    >
      <h4 id='chart-title'>Completed Issues</h4>
      <BarChart
        width={200}
        height={200}
        data={stackedBarChartData}
        margin={{ top: 10, right: 20, left: 20, bottom: 20 }}
        barSize={20}
        barCategoryGap='20%'
      >
        <XAxis
          dataKey='month'
          tickLine={false}
          padding={{ left: 10, right: 10 }}
          aria-hidden='true' // Hides from screen readers since it's visual-only
        />
        <YAxis
          width={30}
          tickLine={false}
          axisLine={true}
          tick={{ dx: -5 }}
          aria-hidden='true'
        />
        <Tooltip />
        <Legend />
        <Bar dataKey='Nature' stackId='a' fill='#0070B0' aria-hidden='true' />
        <Bar dataKey='BHP' stackId='a' fill='#94A3B8' aria-hidden='true' />
      </BarChart>
    </div>
  );
};

export default CustomStackedBarChart;
