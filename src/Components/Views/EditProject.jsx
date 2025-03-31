import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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
  Chip
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './EditProject.scss';

import ClosedIcon from '../../assets/close.svg?url';
import excelIcon from '../../assets/excel.svg?url';
import vectorIcon from '../../assets/Vector.svg?url';
import addIcon from '../../assets/Add.svg?url';

const EditProject = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const taskData = location.state?.taskData;

  const [formData, setFormData] = useState({
    task: '',
    assignedTo: '',
    author: [],
    due: new Date(),
    priority: '',
    manuscriptName: 'World and Natural Resources',
    description:
      'A detailed information of Natural Resources and their exploitation',
    branch: 'Biotechnology',
    category: '',
    projectType: 'New Submission',
    region: 'Asia',
    language: 'English',
    reviewPeriod: '3 months',
    budget: '3000',
    publishDate: new Date('2025-04-31'),
    status: 'Under review',
    urgency: 'Yes',
    openSource: 'Yes',
    priorityTask: false,
    editorNote: 'Get it refined from vocabulary point of view',
    instructions: '',
    file: null
  });

  useEffect(() => {
    if (taskData) {
      setFormData((prev) => ({
        ...prev,
        task: taskData.task || '',
        assignedTo: taskData.assignedTo || '',
        author: taskData.author ? [taskData.author] : [],
        due: taskData.due ? new Date(taskData.due) : new Date(),
        priority: taskData.priority || '',
        category: taskData.task || '',
        status: taskData.priority || 'Under review'
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
      author: prev.author.filter((author) => author !== authorToRemove)
    }));
  };

  const handleAuthorChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      author: typeof value === 'string' ? value.split(',') : value
    }));
  };

  const handleSave = () => {
    console.log('Saving form data:', formData);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <Box className="edit-project">
      <Box className="header">
        <Box className="left-section">
          <IconButton
            onClick={() => navigate("/")}
            aria-label="Go back to the homepage"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" role="heading" aria-level="1">
            Edit Project Details
          </Typography>
        </Box>

        <Button
          variant="contained"
          className="export-button"
          aria-label="Export project details to Excel"
        >
          Export to Excel
          <img
            src={excelIcon}
            alt=""
            className="close-icon"
            aria-hidden="true"
          />
        </Button>
      </Box>

      <Box className="section">
        <Typography
          variant="h6"
          className="section-title"
          role="heading"
          aria-level="2"
        >
          Manuscript Information
        </Typography>

        <Typography
          variant="subtitle1"
          className="label-title"
          id="manuscript-name-label"
        >
          Manuscript Name
        </Typography>
        <Box>
          <TextField
            name="manuscriptName"
            fullWidth
            value={formData.manuscriptName}
            onChange={handleChange}
            variant="outlined"
            row={2}
            className="input-field"
            aria-labelledby="manuscript-name-label"
          />
        </Box>

        <Box>
          <Typography
            variant="subtitle1"
            className="label-title"
            id="description-label"
          >
            Description
          </Typography>
          <TextField
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            className="input-field description-input"
            aria-labelledby="description-label"
            aria-describedby="description-hint"
            sx={{
              "& .MuiInputBase-root textarea": {
                resize: "none",
              },
            }}
          />
        </Box>

        <Box className="author-branch">
          <Box className="author-field">
            <Typography
              variant="subtitle1"
              className="label-title author-label"
              id="author-label"
            >
              Author
            </Typography>
            <TextField
              select
              name="author"
              fullWidth
              value={formData.author}
              onChange={handleAuthorChange}
              aria-labelledby="author-label"
              SelectProps={{
                multiple: true,
                IconComponent: () => (
                  <img
                    src={addIcon}
                    alt=""
                    aria-hidden="true"
                    style={{ width: 12, height: 12, marginRight: 8 }}
                  />
                ),
                renderValue: (selected) => (
                  <Box className="author-list">
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        onDelete={() => handleAuthorRemove(value)}
                        className="author-chip"
                        deleteIcon={
                          <img
                            src={ClosedIcon}
                            alt="Remove author"
                            style={{ width: 16, height: 16, cursor: "pointer" }}
                          />
                        }
                        sx={{
                          backgroundColor: "#F1F5F9",
                          color: "#0070B0",
                          fontWeight: "bold",
                          padding: "4px 12px",
                        }}
                      />
                    ))}
                  </Box>
                ),
              }}
              variant="outlined"
              className="input-field author-input"
            >
              {["Sarah Johnson", "John Doe"].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <FormControl fullWidth margin="normal" className="input-field">
            <Typography
              variant="subtitle1"
              className="label-title"
              id="branch-label"
            >
              Branch
            </Typography>
            <Select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              displayEmpty
              aria-labelledby="branch-label"
              IconComponent={() => (
                <img
                  src={vectorIcon}
                  alt=""
                  aria-hidden="true"
                  style={{ width: 12, height: 12, marginRight: 8 }}
                />
              )}
            >
              <MenuItem value="Biotechnology">Biotechnology</MenuItem>
              <MenuItem value="Physics">Physics</MenuItem>
              <MenuItem value="Chemistry">Chemistry</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box className="section">
        <Typography
          variant="h6"
          className="section-title"
          role="heading"
          aria-level="2"
        >
          Project Details
        </Typography>

        <Box className="row">
          <Box className="input-container">
            <Typography
              variant="subtitle1"
              className="label-title"
              id="category-label"
            >
              Category
            </Typography>
            <Select
              name="category"
              value={formData.category}
              onChange={handleChange}
              displayEmpty
              fullWidth
              variant="outlined"
              aria-labelledby="category-label"
              IconComponent={() => (
                <img
                  src={vectorIcon}
                  alt=""
                  aria-hidden="true"
                  style={{ width: 12, height: 12, marginRight: 8 }}
                />
              )}
            >
              <MenuItem value="Content Review">Content Review</MenuItem>
              <MenuItem value="Manuscript Screening">
                Manuscript Screening
              </MenuItem>
              <MenuItem value="PRA">PRA</MenuItem>
            </Select>
          </Box>

          <Box className="input-container">
            <Typography
              variant="subtitle1"
              className="label-title"
              id="project-type-label"
            >
              Project Type
            </Typography>
            <Select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              displayEmpty
              fullWidth
              variant="outlined"
              aria-labelledby="project-type-label"
              IconComponent={() => (
                <img
                  src={vectorIcon}
                  alt=""
                  aria-hidden="true"
                  style={{ width: 12, height: 12, marginRight: 8 }}
                />
              )}
            >
              <MenuItem value="New Submission">New Submission</MenuItem>
              <MenuItem value="Resubmission">Resubmission</MenuItem>
            </Select>
          </Box>
        </Box>

        <Box className="row">
          <Box className="input-container">
            <Typography
              variant="subtitle1"
              className="label-title"
              id="region-label"
            >
              Region
            </Typography>
            <Select
              name="region"
              value={formData.region}
              onChange={handleChange}
              displayEmpty
              fullWidth
              variant="outlined"
              aria-labelledby="region-label"
              IconComponent={() => (
                <img
                  src={vectorIcon}
                  alt=""
                  aria-hidden="true"
                  style={{ width: 12, height: 12, marginRight: 8 }}
                />
              )}
            >
              <MenuItem value="Asia">Asia</MenuItem>
              <MenuItem value="Europe">Europe</MenuItem>
              <MenuItem value="North America">North America</MenuItem>
            </Select>
          </Box>

          <Box className="input-container">
            <Typography
              variant="subtitle1"
              className="label-title"
              id="language-label"
            >
              Language
            </Typography>
            <Select
              name="language"
              value={formData.language}
              onChange={handleChange}
              displayEmpty
              fullWidth
              variant="outlined"
              aria-labelledby="language-label"
              IconComponent={() => (
                <img
                  src={vectorIcon}
                  alt=""
                  aria-hidden="true"
                  style={{ width: 12, height: 12, marginRight: 8 }}
                />
              )}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="French">French</MenuItem>
            </Select>
          </Box>
        </Box>

        <Box className="row">
          <Box className="input-container">
            <Typography
              variant="subtitle1"
              className="label-title"
              id="review-period-label"
            >
              Review Period
            </Typography>
            <Select
              name="reviewPeriod"
              value={formData.reviewPeriod}
              onChange={handleChange}
              displayEmpty
              fullWidth
              variant="outlined"
              aria-labelledby="review-period-label"
              IconComponent={() => (
                <img
                  src={vectorIcon}
                  alt=""
                  aria-hidden="true"
                  style={{ width: 12, height: 12, marginRight: 8 }}
                />
              )}
            >
              <MenuItem value="1 month">1 month</MenuItem>
              <MenuItem value="3 months">3 months</MenuItem>
              <MenuItem value="6 months">6 months</MenuItem>
            </Select>
          </Box>

          <Box className="input-container">
            <Typography
              variant="subtitle1"
              className="label-title"
              id="budget-label"
            >
              Budget
            </Typography>
            <TextField
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              className="budget-input"
              aria-labelledby="budget-label"
            />
          </Box>
        </Box>
      </Box>

      <Box className="section">
        <Typography
          variant="h6"
          className="section-title"
          role="heading"
          aria-level="2"
        >
          Status & Dates
        </Typography>

        <Box className="row">
          <Box className="input-container">
            <Typography
              variant="subtitle1"
              className="label-title"
              id="due-on-label"
            >
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
                    InputLabelProps={{ shrink: false }}
                    aria-labelledby="due-on-label"
                    aria-describedby="date-format-info"
                  />
                )}
              />
            </LocalizationProvider>
          </Box>

          <Box className="input-container">
            <Typography
              variant="subtitle1"
              className="label-title"
              id="publish-on-label"
            >
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
                    InputLabelProps={{ shrink: false }}
                    aria-labelledby="publish-on-label"
                    aria-describedby="date-format-info"
                  />
                )}
              />
            </LocalizationProvider>
          </Box>
        </Box>

        <Box className="row">
          <Box className="input-container">
            <Typography
              variant="subtitle1"
              className="label-title"
              id="status-label"
            >
              Status Update
            </Typography>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              displayEmpty
              fullWidth
              variant="outlined"
              aria-labelledby="status-label"
              IconComponent={() => (
                <img
                  src={vectorIcon}
                  alt=""
                  aria-hidden="true"
                  style={{ width: 12, height: 12, marginRight: 8 }}
                />
              )}
            >
              <MenuItem value="Under review">Under review</MenuItem>
              <MenuItem value="In progress">In progress</MenuItem>
              <MenuItem value="To-do">To-do</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </Box>

          <Box className="input-container">
            <Typography
              variant="subtitle1"
              className="label-title"
              id="priority-label"
            >
              Priority
            </Typography>
            <Select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              displayEmpty
              fullWidth
              variant="outlined"
              aria-labelledby="priority-label"
              IconComponent={() => (
                <img
                  src={vectorIcon}
                  alt=""
                  aria-hidden="true"
                  style={{ width: 12, height: 12, marginRight: 8 }}
                />
              )}
            >
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </Box>
        </Box>
      </Box>

      <Box className="section">
        <Typography
          variant="h6"
          className="section-title"
          role="heading"
          aria-level="2"
        >
          Additional Options
        </Typography>

        <Box className="row">
          <FormControl
            component="fieldset"
            sx={{ marginRight: 40 }}
            aria-labelledby="urgency-label"
          >
            <Typography
              variant="body1"
              className="option-label"
              id="urgency-label"
            >
              Urgency
            </Typography>
            <RadioGroup
              row
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              sx={{ gap: 5 }}
              aria-labelledby="urgency-label"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" aria-labelledby="open-source-label">
            <Typography
              variant="body1"
              className="option-label"
              id="open-source-label"
            >
              Open Source
            </Typography>
            <RadioGroup
              row
              name="openSource"
              value={formData.openSource}
              onChange={handleChange}
              sx={{ gap: 5 }}
              aria-labelledby="open-source-label"
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
              aria-labelledby="priority-task-label"
            />
          }
          label={
            <Typography id="priority-task-label">Priority task</Typography>
          }
        />
      </Box>

      <Box className="section">
        <Typography
          variant="h6"
          className="section-title"
          role="heading"
          aria-level="2"
        >
          Editor Note
        </Typography>

        <Typography
          variant="subtitle1"
          className="label-title"
          id="editor-note-label"
        >
          Notes
        </Typography>

        <TextField
          name="editorNote"
          value={formData.editorNote}
          onChange={handleChange}
          fullWidth
          multiline
          rows={2}
          className="input-field description-input"
          aria-labelledby="editor-note-label"
        />
      </Box>

      <Box className="section">
        <Typography
          variant="h6"
          className="section-title"
          role="heading"
          aria-level="2"
        >
          Instructions
        </Typography>

        <Typography
          variant="subtitle1"
          className="label-title"
          id="instructions-label"
        >
          Instructions
        </Typography>

        <TextField
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          fullWidth
          multiline
          rows={2}
          className="input-field description-input"
          aria-labelledby="instructions-label"
        />
      </Box>

      <Box className="actions" aria-live="polite">
        <Button
          variant="outlined"
          className="cancel-btn"
          onClick={handleCancel}
          aria-label="Cancel and discard changes"
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          className="save-btn"
          onClick={handleSave}
          aria-label="Save your changes"
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default EditProject;
