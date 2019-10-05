import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));
  
  export default function ContainedButtons() {
    const classes = useStyles();
  
    return (
      <div>
        
          <li><Button variant="contained" className={classes.button } component ={Link} to ={'/'}>
          Home
        </Button>
          </li>
         <li>
           <Button variant="contained" color="primary" className={classes.button} component ={Link} to ={'/about'}>
          About
        </Button>
          </li>
          <li>
            <Button variant="contained" color="secondary" className={classes.button} component ={Link} to = {'/tasks'}>
          Tasks
        </Button>
          </li>
        
        <Switch>
          <Route path="/about">
            <about />
          </Route>
          <Route path="/tasks">
            <tasks />
          </Route>
          <Route path="/">
            <home />
          </Route>
        </Switch>
        {/* <Button variant="contained" color="secondary" disabled className={classes.button}>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons" className={classes.button}>
          Link
        </Button> */}
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        {/* <label htmlFor="contained-button-file">
          <Button variant="contained" component="span" className={classes.button}>
            Upload
          </Button>
        </label> */}
      </div>
    );
  }