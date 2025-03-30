// src/components/EditProject.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Button,
  IconButton,
} from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/EditProject.scss";

const EditProject = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const taskData = location.state?.taskData; // Get passed data

  const [formData, setFormData] = useState({
    task: "",
    assignedTo: "",
    author: [],
    due: new Date(),
    priority: "",
    manuscriptName: "World and Natural Resources",
    description:
      "A detailed information of Natural Resources and their exploitation",
    branch: "Biotechnology",
    category: "",
    projectType: "New Submission",
    region: "Asia",
    language: "English",
    reviewPeriod: "3 months",
    budget: "3000",
    publishDate: new Date("2025-04-31"),
    status: "Under review",
    urgency: "Yes",
    openSource: "Yes",
    priorityTask: true,
    editorNote: "Get it refined from vocabulary point of view",
    instructions: "",
    file: null,
  });

  useEffect(() => {
    if (taskData) {
      setFormData((prev) => ({
        ...prev,
        task: taskData.task || "",
        assignedTo: taskData.assignedTo || "",
        author: taskData.author ? [taskData.author] : [],
        due: taskData.due ? new Date(taskData.due) : new Date(),
        priority: taskData.priority || "",
        category: taskData.task || "",
        status: taskData.priority || "Under review",
      }));
    }
  }, [taskData]);

  if (!taskData) {
    return <h2>No task selected!</h2>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name, date) => {
    setFormData((prev) => ({ ...prev, [name]: date }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleAuthorRemove = (authorToRemove) => {
    setFormData((prev) => ({
      ...prev,
      author: prev.author.filter((author) => author !== authorToRemove),
    }));
  };

  const handleAuthorAdd = () => {
    // For simplicity, we'll add a placeholder author. In a real app, you'd likely have a dropdown or input to select/add authors.
    setFormData((prev) => ({
      ...prev,
      author: [...prev.author, `Author ${prev.author.length + 1}`],
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({ ...prev, file: null }));
  };

  const handleSave = () => {
    console.log("Saving form data:", formData);
    // Add save logic here (e.g., API call)
    navigate("/"); // Navigate back to the dashboard after saving
  };

  const handleCancel = () => {
    navigate("/"); // Navigate back to the dashboard on cancel
  };

  return (
    <Box className="edit-project">
      <Box className="header">
        <Typography variant="h5">Edit Project Details</Typography>
        <Button variant="contained" className="export-button">
          Export to Excel
          <CloseIcon className="close-icon" />
        </Button>
      </Box>

      {/* Manuscript Information Section */}
      <Box className="section">
        <Typography variant="h6" className="section-title">
          Manuscript Information
        </Typography>
        <TextField
          // label="Manuscript Name"
          name="manuscriptName"
          value={formData.manuscriptName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          className="input-field"
        />
        <TextField
          // label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={3}
          className="input-field"
        />
        <Box className="author-branch">
          <Box className="author-field">
            <Box className="author-list">
              {formData.author.map((author, index) => (
                <Box key={index} className="author-chip">
                  {author}
                  <IconButton
                    size="small"
                    onClick={() => handleAuthorRemove(author)}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>
              ))}
              <Button
                variant="outlined"
                size="small"
                onClick={handleAuthorAdd}
                className="add-author"
              >
                +
              </Button>
            </Box>
          </Box>
          <FormControl fullWidth margin="normal" className="input-field">
            <InputLabel>Branch</InputLabel>
            <Select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="Biotechnology">Biotechnology</MenuItem>
              <MenuItem value="Physics">Physics</MenuItem>
              <MenuItem value="Chemistry">Chemistry</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Project Details Section */}
      <Box className="section">
        <Typography variant="h6" className="section-title">
          Project Details
        </Typography>
        <Box className="row">
          <FormControl fullWidth margin="normal" className="input-field">
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value={formData.category}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="Content Review">Content Review</MenuItem>
              <MenuItem value="Manuscript Screening">
                Manuscript Screening
              </MenuItem>
              <MenuItem value="PRA">PRA</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" className="input-field">
            <InputLabel>Project Type</InputLabel>
            <Select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="New Submission">New Submission</MenuItem>
              <MenuItem value="Resubmission">Resubmission</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="row">
          <FormControl fullWidth margin="normal" className="input-field">
            <InputLabel>Region</InputLabel>
            <Select
              name="region"
              value={formData.region}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="Asia">Asia</MenuItem>
              <MenuItem value="Europe">Europe</MenuItem>
              <MenuItem value="North America">North America</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" className="input-field">
            <InputLabel>Language</InputLabel>
            <Select
              name="language"
              value={formData.language}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="French">French</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="row">
          <FormControl fullWidth margin="normal" className="input-field">
            <InputLabel>Review Period</InputLabel>
            <Select
              name="reviewPeriod"
              value={formData.reviewPeriod}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="1 month">1 month</MenuItem>
              <MenuItem value="3 months">3 months</MenuItem>
              <MenuItem value="6 months">6 months</MenuItem>
            </Select>
          </FormControl>
          <TextField
            // label="Budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            fullWidth
            margin="normal"
            type="number"
            className="input-field"
          />
        </Box>
      </Box>

      {/* Status & Dates Section */}
      <Box className="section">
        <Typography variant="h6" className="section-title">
          Status & Dates
        </Typography>
        <Box className="row">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              // label="Due on"
              value={formData.due}
              onChange={(date) => handleDateChange("due", date)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  margin="normal"
                  className="input-field"
                />
              )}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              // label="Publish on"
              value={formData.publishDate}
              onChange={(date) => handleDateChange("publishDate", date)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  margin="normal"
                  className="input-field"
                />
              )}
            />
          </LocalizationProvider>
        </Box>
        <Box className="row">
          <FormControl fullWidth margin="normal" className="input-field">
            <InputLabel>Status Update</InputLabel>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="Under review">Under review</MenuItem>
              <MenuItem value="In progress">In progress</MenuItem>
              <MenuItem value="To-do">To-do</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" className="input-field">
            <InputLabel>Priority</InputLabel>
            <Select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* File Upload Section */}
      <Box className="section">
        <Typography variant="h6" className="section-title">
          Assigned to
        </Typography>
        <Box className="file-upload">
          <Box className="drop-zone">
            <Typography>Drag and drop files here or BROWSE files</Typography>
            <Typography variant="caption">
              Supported formats: PDF, DOCX (max. 50 mb)
            </Typography>
            <input
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="file-upload"
            />
            <label htmlFor="file-upload">
              <Button
                variant="outlined"
                component="span"
                className="browse-button"
              >
                BROWSE
              </Button>
            </label>
          </Box>
          {formData.file && (
            <Box className="file-info">
              <Typography>
                {formData.file.name} (
                {Math.round(formData.file.size / (1024 * 1024))} mb)
              </Typography>
              <IconButton onClick={handleRemoveFile}>
                <CloseIcon />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>

      {/* Additional Options Section */}
      <Box className="section">
        <Typography variant="h6" className="section-title">
          Additional Options
        </Typography>
        <Box className="row">
          <FormControl component="fieldset">
            <Typography variant="body1" className="option-label">
              Urgency
            </Typography>
            <RadioGroup
              row
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <Typography variant="body1" className="option-label">
              Open Source
            </Typography>
            <RadioGroup
              row
              name="openSource"
              value={formData.openSource}
              onChange={handleChange}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.priorityTask}
              onChange={handleCheckboxChange}
              name="priorityTask"
            />
          }
          label="Priority task"
        />
      </Box>

      {/* Editor Note Section */}
      <Box className="section">
        <Typography variant="h6" className="section-title">
          Editor Note
        </Typography>
        <TextField
          // label="Editor Note"
          name="editorNote"
          value={formData.editorNote}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={3}
          className="input-field"
        />
      </Box>

      {/* Instructions Section */}
      <Box className="section">
        <Typography variant="h6" className="section-title">
          Instructions
        </Typography>
        <TextField
          // label="Instructions"
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={3}
          className="input-field"
        />
      </Box>

      {/* Actions */}
      <Box className="actions">
        <Button variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default EditProject;
