import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { projectTasksData } from '../Data/mockData.js';
import { useNavigate } from 'react-router-dom';
import './Table.scss';

const ProjectTasksTable = () => {
  const navigate = useNavigate();

  const handleEditClick = (taskData) => {
    navigate('/EditProject', { state: { taskData } });
  };

  return (
    <TableContainer component={Paper} className='table-container'>
      <Table aria-label='Project tasks table'>
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell>Assigned to</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Due</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projectTasksData.map((row, index) => (
            <TableRow key={index} tabIndex={0}>
              <TableCell>{row.task}</TableCell>
              <TableCell>{row.assignedTo}</TableCell>
              <TableCell>{row.author}</TableCell>
              <TableCell>{row.due}</TableCell>
              <TableCell>
                <span
                  className={`status ${row.priority
                    .toLowerCase()
                    .replace(' ', '-')}`}
                  role='status'
                  aria-label={`Priority: ${row.priority}`}
                >
                  {row.priority}
                </span>
              </TableCell>
              <TableCell>
                <IconButton
                  className='edit-icon'
                  onClick={() => handleEditClick(row)}
                  aria-label={`Edit task: ${row.task}`}
                >
                  <EditOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectTasksTable;
