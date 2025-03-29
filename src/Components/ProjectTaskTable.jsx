
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { projectTasksData } from "./mockData.js";
import "../styles/Table.scss";

const ProjectTasksTable = () => {
  return (
    <TableContainer component={Paper} className="table-container">
      <h4>Project Tasks</h4>
      <Table>
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
            <TableRow key={index}>
              <TableCell>{row.task}</TableCell>
              <TableCell>{row.assignedTo}</TableCell>
              <TableCell>{row.author}</TableCell>
              <TableCell>{row.due}</TableCell>
              <TableCell>
                <span
                  className={`status ${row.priority
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {row.priority}
                </span>
              </TableCell>
              <TableCell>
                <IconButton>
                  <EditIcon />
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
