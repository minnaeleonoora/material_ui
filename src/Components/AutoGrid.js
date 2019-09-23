import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Buttons from '../Components/Buttons';
import CheckboxLabels from '../Components/CustomizedCheckbox';
import RadioButtons from '../Components/RadioButtons';
import InputWithIcon from '../Components/InputWithIcon';
import ImgMediaCard from '../Components/ImgMediaCard';
import SvgIcons from '../Components/SvgIcons';
import FolderList from '../Components/FolderList';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}><FolderList /></Paper>
          <Paper className={classes.paper}><Buttons/></Paper>

        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><ImgMediaCard /></Paper>
          <Paper className={classes.paper}><RadioButtons /></Paper>

        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><ImgMediaCard /></Paper>
          <Paper className={classes.paper}><CheckboxLabels /></Paper>

        </Grid>
        <Grid item xs={3}>
        <Paper className={classes.paper}><InputWithIcon /></Paper>
        </Grid>
       
      </Grid>
      
        
        
    </div>
  );
}

