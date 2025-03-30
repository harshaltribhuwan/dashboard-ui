// src/components/EditProject.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import CloseIcon from "@mui/icons-material/Close";
import "../styles/EditProject.scss";
import excelIcon from "../assets/file-excel-line.svg?url";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        {/* Left Section (Arrow + Text) */}
        <Box className="left-section">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5">Edit Project Details</Typography>
        </Box>

        {/* Right Button */}
        <Button variant="contained" className="export-button">
          Export to Excel
          <img src={excelIcon} alt="Export Excel" className="close-icon" />
        </Button>
      </Box>

      {/* Manuscript Information Section */}
      <Box className="section">
        <Typography variant="h6" className="section-title">
          Manuscript Information
        </Typography>

        <Typography variant="subtitle1" className="label-title">
          Manuscript Name
        </Typography>

        <Box>
          <TextField
            name="manuscriptName"
            fullWidth
            margin="dense"
            value={formData.manuscriptName}
            onChange={handleChange}
            variant="outlined"
            className="input-field"
            label=""
          />
        </Box>
        <Box>
          <Typography variant="subtitle1" className="label-title">
            Description
          </Typography>
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
        </Box>
        <Box className="author-branch">
          <Box className="author-field">
            <Typography variant="subtitle1" className="label-title">
              Author
            </Typography>
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
            <Typography variant="subtitle1" className="label-title">
              Branch
            </Typography>
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

        {/* First Row */}
        <Box className="row">
          {/* Category */}
          <Box className="input-container">
            <Typography variant="subtitle1" className="label-title">
              Category
            </Typography>
            <Select
              name="category"
              value={formData.category}
              onChange={handleChange}
              displayEmpty
              fullWidth
              variant="outlined"
            >
              <MenuItem value="Content Review">Content Review</MenuItem>
              <MenuItem value="Manuscript Screening">
                Manuscript Screening
              </MenuItem>
              <MenuItem value="PRA">PRA</MenuItem>
            </Select>
          </Box>

          {/* Project Type */}
          <Box className="input-container">
            <Typography variant="subtitle1" className="label-title">
              Project Type
            </Typography>
            <Select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              displayEmpty
              fullWidth
              variant="outlined"
            >
              <MenuItem value="New Submission">New Submission</MenuItem>
              <MenuItem value="Resubmission">Resubmission</MenuItem>
            </Select>
          </Box>
        </Box>

        {/* Second Row */}
        <Box className="row">
          {/* Region */}
          <Box className="input-container">
            <Typography variant="subtitle1" className="label-title">
              Region
            </Typography>
            <Select
              name="region"
              value={formData.region}
              onChange={handleChange}
              displayEmpty
              fullWidth
              variant="outlined"
            >
              <MenuItem value="Asia">Asia</MenuItem>
              <MenuItem value="Europe">Europe</MenuItem>
              <MenuItem value="North America">North America</MenuItem>
            </Select>
          </Box>

          {/* Language */}
          <Box className="input-container">
            <Typography variant="subtitle1" className="label-title">
              Language
            </Typography>
            <Select
              name="language"
              value={formData.language}
              onChange={handleChange}
              displayEmpty
              fullWidth
              variant="outlined"
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="French">French</MenuItem>
            </Select>
          </Box>
        </Box>

        {/* Third Row */}
        <Box className="row">
          {/* Review Period */}
          <Box className="input-container">
            <Typography variant="subtitle1" className="label-title">
              Review Period
            </Typography>
            <Select
              name="reviewPeriod"
              value={formData.reviewPeriod}
              onChange={handleChange}
              displayEmpty
              fullWidth
              variant="outlined"
            >
              <MenuItem value="1 month">1 month</MenuItem>
              <MenuItem value="3 months">3 months</MenuItem>
              <MenuItem value="6 months">6 months</MenuItem>
            </Select>
          </Box>

          {/* Budget */}
          <Box className="input-container">
            <Typography variant="subtitle1" className="label-title">
              Budget
            </Typography>
            <TextField
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              fullWidth
              margin="dense"
              type="number"
              variant="outlined"
            />
          </Box>
        </Box>
      </Box>

      {/* Status & Dates Section */}
      <Box className="section">
        <Typography variant="h6" className="section-title">
          Status & Dates
        </Typography>

        {/* First Row: Date Pickers */}
        <Box className="row">
          <Box className="input-container">
            <Typography variant="subtitle1" className="label-title">
              Due On
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={formData.due}
                onChange={(date) => handleDateChange("due", date)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{ shrink: false }} // Disables floating label
                  />
                )}
              />
            </LocalizationProvider>
          </Box>

          <Box className="input-container">
            <Typography variant="subtitle1" className="label-title">
              Publish On
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={formData.publishDate}
                onChange={(date) => handleDateChange("publishDate", date)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{ shrink: false }} // Disables floating label
                  />
                )}
              />
            </LocalizationProvider>
          </Box>
        </Box>

        {/* Second Row: Status & Priority */}
        <Box className="row">
          <Box className="input-container">
            <Typography variant="subtitle1" className="label-title">
              Status Update
            </Typography>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              displayEmpty
              fullWidth
              variant="outlined"
            >
              <MenuItem value="Under review">Under review</MenuItem>
              <MenuItem value="In progress">In progress</MenuItem>
              <MenuItem value="To-do">To-do</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </Box>

          <Box className="input-container">
            <Typography variant="subtitle1" className="label-title">
              Priority
            </Typography>
            <Select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              displayEmpty
              fullWidth
              variant="outlined"
            >
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </Box>
        </Box>
      </Box>

      {/* Additional Options Section */}
      <Box className="section">
        <Typography variant="h6" className="section-title">
          Additional Options
        </Typography>
        <Box className="row">
          {/* Urgency Section */}
          <FormControl component="fieldset" sx={{ marginRight: 40 }}>
            {" "}
            {/* Added margin */}
            <Typography variant="body1" className="option-label">
              Urgency
            </Typography>
            <RadioGroup
              row
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              sx={{ gap: 5 }}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          {/* Open Source Section */}
          <FormControl component="fieldset">
            <Typography variant="body1" className="option-label">
              Open Source
            </Typography>
            <RadioGroup
              row
              name="openSource"
              value={formData.openSource}
              onChange={handleChange}
              sx={{ gap: 5 }}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Box>

        {/* Priority Task Checkbox */}
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
