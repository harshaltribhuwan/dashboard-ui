import React from 'react';
import LineChart from '../Charts/LineChart.jsx';
import PieChart from '../Charts/PieChart.jsx';
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StackedBarChart from '../Charts/StackedBarChart.jsx';
import OngoingTasksTable from '../Tables/OngoingTaskTable.jsx';
import ProjectTasksTable from '../Tables/ProjectTaskTable.jsx';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <header className='header'>
        <h2>Hi Ted!</h2>
      </header>

      <section className='charts'>
        <div className='line-chart'>
          <LineChart />
        </div>
        <div className='pie-chart'>
          <PieChart />
        </div>
        <div className='bar-chart'>
          <StackedBarChart />
        </div>
      </section>

      <section>
        <div className='heading-container'>
          <h4 className='table-heading'>Ongoing Tasks</h4>
          <TextField
            className="search-input"
            variant="outlined"
            placeholder="Search"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <OngoingTasksTable />
      </section>

      <section>
        <div className='project-container'>
          <h4 className='table-heading'>Project Tasks</h4>
          <TextField
            className="search-input"
            variant="outlined"
            placeholder="Search"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <ProjectTasksTable />
      </section>
    </div>
  );
};

export default Dashboard;
