import { List, ListItem, ListItemText } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useNavigate } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div
      className='sidebar'
      role='navigation'
      aria-label='Editor Management Portal'
    >
      <h3>
        Editor <br />
        Management Portal
      </h3>

      <p>Text</p>

      <List>
        <ListItem
          component='div'
          onClick={() => navigate('/')}
          tabIndex='0'
          role='button'
          aria-current={window.location.pathname === '/' ? 'page' : undefined}
        >
          <RadioButtonUncheckedIcon className='sidebar-circle-icon' />
          <ListItemText
            primary='Dashboard'
            className='MuiListItemText-primary'
          />
        </ListItem>

        <ListItem component='div' tabIndex='0' role='button'>
          <RadioButtonUncheckedIcon className='sidebar-circle-icon' />
          <ListItemText primary='Tasks' className='MuiListItemText-primary' />
        </ListItem>

        <hr className='sidebar-divider' />

        <ListItem component='div' tabIndex='0' role='button'>
          <RadioButtonUncheckedIcon className='sidebar-circle-icon' />
          <ListItemText
            primary='Articles'
            className='MuiListItemText-primary'
          />
        </ListItem>

        <ListItem component='div' tabIndex='0' role='button'>
          <RadioButtonUncheckedIcon className='sidebar-circle-icon' />
          <ListItemText primary='Users' className='MuiListItemText-primary' />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
