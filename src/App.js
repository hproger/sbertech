import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { AppBar, Grid } from "@material-ui/core";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from '@material-ui/core/styles';
import Main from "./components/Main";
import Settings from "./components/Settings";

const useStyles = makeStyles(theme => ({
  menu: {
    display: 'flex'
  },
  menuItem: {
    textDecoration: 'none',
    color: 'inherit'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="App">
        <AppBar>
          <MenuList className={classes.menu}>
            <MenuItem><Link to="/" className={classes.menuItem}>Список сотрудников</Link></MenuItem>
            <MenuItem><Link to="/user/add" className={classes.menuItem}>Добавить запись</Link></MenuItem>
            <MenuItem><Link to="/settings" className={classes.menuItem}>Настройки</Link></MenuItem>
          </MenuList>
        </AppBar>
        <Grid container spacing={2}>
          <Route exact path="/" component={Main} />
          <Route path="/user/add"  />
          <Route path="/settings" component={Settings} />
        </Grid>
      </div>
    </Router>
  );
}

export default App;