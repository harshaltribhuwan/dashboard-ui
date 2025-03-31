import React, { useEffect } from 'react';
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
  Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './Modal.scss';
import fileIcon from '../../assets/file.svg?url';
import ClosedIcon from '../../assets/close.svg?url';
import vectorIcon from '../../assets/Vector.svg?url';
import addIcon from '../../assets/Add.svg?url';

const TaskModal = ({ open, handleClose, task, onSave }) => {
  const [editedTask, setEditedTask] = React.useState(task);
  const [author, setAuthor] = React.useState(['Sarah Johnson']);
  const [files, setFiles] = React.useState([]);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleAuthorChange = (event) => {
    const {
      target: { value }
    } = event;
    setAuthor(typeof value === 'string' ? value.split(',') : value);
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

  const handleRemoveChip = (valueToRemove) => {
    setAuthor((prevAuthors) =>
      prevAuthors.filter((value) => value !== valueToRemove)
    );
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
    >
      <Box className='modal-box' sx={{ fontFamily: 'inherit' }}>
        <Box className='modal-header'>
          <Typography id='modal-title' variant='h6'>
            Task Actions
          </Typography>
          <IconButton
            className='close-btn'
            onClick={handleClose}
            aria-label='Close modal'
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Grid container spacing={2} alignItems='center' className='modal-row'>
          <Grid item xs={12} md={6}>
            <Typography variant='subtitle1' className='section-title'>
              Manuscript
            </Typography>
            <Typography className='manuscript-text' aria-live='polite'>
              {editedTask?.manuscript || 'N/A'}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant='subtitle1' className='section-title'>
              Author
            </Typography>
            <TextField
              select
              name='author'
              fullWidth
              margin='dense'
              value={author}
              onChange={handleAuthorChange}
              variant='outlined'
              aria-label='Select authors'
              SelectProps={{
                multiple: true,
                IconComponent: () => (
                  <img
                    src={addIcon}
                    alt='Open dropdown'
                    style={{ width: 12, height: 12, marginRight: 8 }}
                  />
                ),
                renderValue: (selected) => (
                  <div>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        onDelete={() => handleRemoveChip(value)}
                        deleteIcon={
                          <img
                            src={ClosedIcon}
                            alt='Remove'
                            style={{ width: 16, height: 16, cursor: 'pointer' }}
                          />
                        }
                        sx={{
                          backgroundColor: '#F1F5F9',
                          color: '#0070B0',
                          fontWeight: 'bold'
                        }}
                      />
                    ))}
                  </div>
                )
              }}
            >
              {['Sarah Johnson', 'John Doe', 'Jane Smith'].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid container spacing={2} className='modal-row'>
          <Grid item xs={12} md={6}>
            <Typography variant='subtitle1' className='section-title'>
              Assigned to
            </Typography>
            <TextField
              name='assignedTo'
              fullWidth
              margin='dense'
              value={editedTask?.assignedTo || ''}
              onChange={handleChange}
              variant='outlined'
              aria-label='Assigned to'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='subtitle1' className='section-title'>
              Status
            </Typography>
            <TextField
              select
              name='status'
              fullWidth
              margin='dense'
              value={editedTask?.status || ''}
              onChange={handleChange}
              variant='outlined'
              aria-label='Select task status'
              SelectProps={{
                IconComponent: () => (
                  <img
                    src={vectorIcon}
                    alt='Open dropdown'
                    style={{ width: 12, height: 12, marginRight: 8 }}
                  />
                )
              }}
            >
              <MenuItem value='In progress'>In progress</MenuItem>
              <MenuItem value='To do'>To do</MenuItem>
              <MenuItem value='Completed'>Completed</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        <Typography variant='subtitle1' className='section-title'>
          Assigned to
        </Typography>
        <Box className='file-upload-container'>
          <Box
            className='file-drop-area'
            onDrop={handleFileDrop}
            onDragOver={(e) => e.preventDefault()}
            aria-label='Drag and drop files here or browse'
          >
            <Typography>
              Drag and drop files here or{' '}
              <span
                style={{ color: '#0070B0', cursor: 'pointer' }}
                onClick={() => document.getElementById('fileInput').click()}
              >
                browse files
              </span>
            </Typography>
            <input
              id='fileInput'
              type='file'
              multiple
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />
          </Box>

          <Typography className='file-format-info'>
            Supported formats: PDF, DOCX (max. 50 mb)
          </Typography>

          {files.length > 0 && (
            <Box className='file-preview-container'>
              {files.map((file, index) => (
                <Paper key={index} className='uploaded-file'>
                  <img src={fileIcon} alt='File Icon' className='close-icon' />
                  {file.name}
                  <IconButton
                    size='small'
                    onClick={() => handleRemoveFile(file)}
                    aria-label={`Remove file ${file.name}`}
                  >
                    <CloseIcon />
                  </IconButton>
                </Paper>
              ))}
            </Box>
          )}
        </Box>

        <Box className='modal-actions'>
          <Button
            onClick={handleClose}
            variant='outlined'
            className='cancel-btn'
            aria-label='Cancel and close modal'
          >
            Cancel
          </Button>
          <Button
            onClick={() => onSave(editedTask)}
            variant='contained'
            className='save-btn'
            aria-label='Save changes'
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default TaskModal;
