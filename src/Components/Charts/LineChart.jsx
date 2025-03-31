import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { lineChartData } from '../Data/mockData';
import './Charts.scss';

const CustomLineChart = () => {
  return (
    <div
      className='chart-container line-chart'
      role='img'
      aria-label='Line chart displaying completed articles over time'
    >
      <h4 id='chart-title'>Completed Articles</h4>
      <LineChart
        width={400}
        height={200}
        data={lineChartData}
        margin={{ top: 10, right: 20, left: 20, bottom: 20 }}
      >
        <XAxis
          dataKey='date'
          tickLine={false}
          interval={1}
          padding={{ left: 10, right: 10 }}
          aria-hidden='true' // Hides it from screen readers since it's just a visual guide
        />
        <YAxis
          width={30}
          tickLine={false}
          axisLine={true}
          tick={{ dx: -5 }}
          aria-hidden='true'
        />
        <Tooltip />
        <Line type='monotone' dataKey='articles' stroke='#0070B0' dot={false} />
      </LineChart>
    </div>
  );
};

export default CustomLineChart;
