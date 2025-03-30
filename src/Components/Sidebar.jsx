import { List, ListItem, ListItemText } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import "../styles/Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>
        Editor <br />
        Management Portal
      </h3>

      <p>Text</p>

      <List>
        <ListItem component="div">
          <RadioButtonUncheckedIcon className="sidebar-circle-icon" />
          <ListItemText
            primary="Dashboard"
            className="MuiListItemText-primary"
          />
        </ListItem>

        <ListItem component="div">
          <RadioButtonUncheckedIcon className="sidebar-circle-icon" />
          <ListItemText primary="Tasks" className="MuiListItemText-primary" />
        </ListItem>

        <hr className="sidebar-divider" />

        <ListItem component="div">
          <RadioButtonUncheckedIcon className="sidebar-circle-icon" />
          <ListItemText
            primary="Articles"
            className="MuiListItemText-primary"
          />
        </ListItem>

        <ListItem component="div">
          <RadioButtonUncheckedIcon className="sidebar-circle-icon" />
          <ListItemText primary="Users" className="MuiListItemText-primary" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
