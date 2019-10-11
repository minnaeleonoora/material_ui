import React from 'react';
import './App.css';
import 'typeface-roboto';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MainNavigation from './MainNavigation';
import About from './About';
import Contact from './Contact';
import Posts from './Posts';
import Post from './Post';
import postdata from './postdata';


//tuodaan hookki 
import { makeStyles } from '@material-ui/styles';

//tyylittely
const useStyles = makeStyles({
  root: {
    padding: 25,
    background: 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
    flexGrow: 1,

  },
  title: {
    flexGrow: 1
  }
});
const App = () => {
  // tyyli käyttöön
  const classes = useStyles();
  return (
    <div>
      <Router>
        <AppBar className={classes.root}>
          {/* Toolbar wrapper */}
          <ToolBar>
            <Typography variant='h5' className={classes.title}>
              MaterialUI Example
        </Typography>
            <MainNavigation />
          </ToolBar>
        </AppBar>
        <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path={`/:postId`} render={ (props) => <Post data={postdata} {...props} />}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
