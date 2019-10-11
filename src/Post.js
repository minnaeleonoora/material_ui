import React from 'react';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from "react-router-dom";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles ({
    image: {
        height: 250,
        float: 'left',
        padding: '25px 25px 0 0 '
    },

    text: {
        padding: '25px 0 25px 0'

    }
}

);

const Link1 = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to="/" {...props} />
))


const Post = ({ match, data }) => {
    const classes = useStyles();
    let post= data.find(p => p.id == match.params.postId);
    return(
        <div>
            <div style={{ margin: 150, paddingTop:50 }}>
                <Typography variant="caption">Post #{post.id}</Typography>
                <Typography variant="h2">{post.title}</Typography>
                <img ClassName={classes.image} src={post.image} alt={post.title}/>
                <Typography variant="body1" className={classes.text}>
                    {post.text}
                </Typography>
                <Button variant='outlined' component={Link1}>Home</Button>
            </div>
        </div>
    );
}
export default Post;