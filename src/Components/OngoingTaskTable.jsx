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
import { ongoingTasksData } from "./mockData.js";
import "../styles/Table.scss";

const OngoingTasksTable = () => {
  return (
    <TableContainer component={Paper} className="table-container">
      <h4>Ongoing tasks</h4>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Manuscript</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Assigned to</TableCell>
            <TableCell>Last Updated</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ongoingTasksData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.manuscript}</TableCell>
              <TableCell>{row.author}</TableCell>
              <TableCell>{row.assignedTo}</TableCell>
              <TableCell>{row.lastUpdated}</TableCell>
              <TableCell>
                <span
                  className={`status ${row.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {row.status}
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

export default OngoingTasksTable;
