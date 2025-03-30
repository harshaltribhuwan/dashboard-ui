import React, { useState } from "react";
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
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import TaskModal from "../Modal/TaskModal";
import { ongoingTasksData } from "../Data/mockData.js";
import "./Table.scss";

const OngoingTasksTable = () => {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleOpen = (task) => {
    setSelectedTask(task);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSave = (updatedTask) => {
    console.log("Updated Task:", updatedTask);
    handleClose();
  };

  return (
    <>
      <TableContainer component={Paper} className="table-container">
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
                  <IconButton
                    className="edit-icon"
                    onClick={() => handleOpen(row)}
                  >
                    <EditOutlinedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedTask && (
        <TaskModal
          open={open}
          handleClose={handleClose}
          task={selectedTask}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default OngoingTasksTable;
