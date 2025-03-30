import React from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Chip,
  Paper,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/Modal.scss";

const TaskModal = ({ open, handleClose, task, onSave }) => {
  const [editedTask, setEditedTask] = React.useState(task);
  const [author, setAuthor] = React.useState([]);
  const [files, setFiles] = React.useState([]);

  React.useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleAuthorChange = (event) => {
    const {
      target: { value },
    } = event;
    setAuthor(typeof value === "string" ? value.split(",") : value);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const filesArray = Array.from(event.dataTransfer.files);
    setFiles(filesArray);
  };

  const handleFileUpload = (event) => {
    const filesArray = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...filesArray]);
  };

  const handleRemoveFile = (file) => {
    setFiles(files.filter((f) => f !== file));
  };

  const handleResetFiles = () => {
    setFiles([]);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="modal-box">
        {/* Header */}
        <Box className="modal-header">
          <Typography variant="h6">Task Actions</Typography>
          <IconButton className="close-btn" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* First Row: Manuscript & Author */}
        <Grid container spacing={2} className="modal-row">
          <Grid item xs={12} md={6}>
            <Typography className="manuscript-text">
              {editedTask?.manuscript || "N/A"}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              select
              label="Author"
              name="author"
              fullWidth
              margin="normal"
              value={author}
              onChange={handleAuthorChange}
              SelectProps={{
                multiple: true,
                renderValue: (selected) => (
                  <div>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        onDelete={() => handleRemoveFile(value)}
                      />
                    ))}
                  </div>
                ),
              }}
            >
              {["Sarah Johnson", "John Doe", "Jane Smith"].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        {/* Second Row: Assigned To & Status */}
        <Grid container spacing={2} className="modal-row">
          <Grid item xs={12} md={6}>
            <TextField
              label="Assigned To"
              name="assignedTo"
              fullWidth
              margin="normal"
              value={editedTask?.assignedTo || ""}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              select
              label="Status"
              name="status"
              fullWidth
              margin="normal"
              value={editedTask?.status || ""}
              onChange={handleChange}
            >
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="To do">To do</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        {/* Assigned To Section (File Upload) */}
        <Typography variant="subtitle1" className="section-title">
          Assigned To
        </Typography>
        <Box className="file-upload-container">
          {/* File Drop Area */}
          <Box
            className="file-drop-area"
            onDrop={handleFileDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <Typography>
              Drag and drop files here or{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => document.getElementById("fileInput").click()}
              >
                browse files
              </span>
            </Typography>
            <input
              id="fileInput"
              type="file"
              multiple
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
          </Box>

          {/* Supported Formats (Bottom, Right-aligned) */}
          <Typography className="file-format-info">
            Supported formats: PDF, DOCX (max. 50 mb)
          </Typography>

          {/* File Preview (Below the upload area) */}
          {files.length > 0 && (
            <Box className="file-preview-container">
              <Box className="file-preview-header">
                <Typography variant="subtitle1">Uploaded Files</Typography>
                <IconButton
                  onClick={handleResetFiles}
                  className="reset-files-btn"
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              {files.map((file, index) => (
                <Paper key={index} className="uploaded-file">
                  {file.name}
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveFile(file)}
                  >
                    <CloseIcon />
                  </IconButton>
                </Paper>
              ))}
            </Box>
          )}
        </Box>

        {/* Modal Actions */}
        <Box className="modal-actions">
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={() => onSave(editedTask)} variant="contained">
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default TaskModal;
