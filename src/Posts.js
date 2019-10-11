import React from 'react';
// import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import {Card, CardMedia, CardContent, CardActions, Button, Typography, Link} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import postdata from './postdata';
// usestyles ja card
// maxwidth: 345


//const useStyles = makeStyles({
    // listitem: {
       // marginTop: 150
   // }
//});

const Posts = ({ match }) => {
    return(
        <div style={{marginTop:150, padding:20}}>
        <Grid container spacing={3}>
        

            {postdata.map(postitem => (
            <Grid item xs={3}>
            <Card key={postitem.id}>
                <CardMedia
                    component='img'
                    alt={postitem.text}
                    height='250'
                    width= '250'
                    image={postitem.image}
                    />
                <CardContent>
                    <Typography>{postitem.title}</Typography>
                </CardContent>
                <CardActions>
                    <Link to={`${match.url}${postitem.id}`}>Order</Link>
                </CardActions>
            </Card>
            </Grid>
            ))}
        
        </Grid>
        </div>
    )
}
export default Posts;