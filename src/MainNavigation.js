import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const useStyles = makeStyles({
    listitem: {
        display: 'inline-block',
        width: 150,
        textAlign: 'right'
    }
  });

const listitem = [{
    text: 'Home',
    path: '/',
    id: 1
},
{
    text: 'About',
    path: '/about',
    id: 2
},
{
    text: 'Contact',
    path: '/contact',
    id: 3
}
]
{/* Key pitää olla arrayssa */}
const MainNavigation = () => {
    const classes = useStyles();
    return(
        <div>
            <List component='nav'>
                {listitem.map(item => (
                <ListItem className={classes.listitem} key={item.id}> 
                    <ListItemText>
                        <Link to={item.path}>{item.text}</Link>
                    </ListItemText>
                </ListItem>
                ))}
            </List>
        </div>
    )
}
export default MainNavigation;