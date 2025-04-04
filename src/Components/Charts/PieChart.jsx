import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { pieChartData } from '../Data/mockData.js';
import './Charts.scss';

// const COLORS = ["#00324E", "#F8FAFC", "#94A3B8", "#0070B0"]; original colors
const COLORS = ['#00324E', '#005A87', '#94A3B8', '#0070B0'];

const CustomPieChart = () => {
  return (
    <div
      className='chart-container small-chart'
      role='img'
      aria-label='Pie chart displaying manuscript status distribution'
    >
      <h4 id='chart-title'>Manuscript Status</h4>
      <PieChart width={230} height={220}>
        <Pie
          data={pieChartData}
          cx='50%'
          cy='50%'
          outerRadius={65}
          dataKey='value'
          aria-hidden='true'
        >
          {pieChartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              role='presentation'
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          align='center'
          verticalAlign='bottom'
          layout='horizontal'
          iconSize={10}
          wrapperStyle={{ marginTop: '-10px', fontSize: '14px' }}
        />
      </PieChart>
    </div>
  );
};

export default CustomPieChart;
