import React from "react";
import {withRouter} from 'react-router-dom';
import {Card, CardContent, CardMedia, Typography, CardActions, Button, makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    card: {
        backgroundColor: '#c5cae9',
        transition: 'transform .3s',

        '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 15px 80px rgba(#000, .10)'
        }
    },
    media: {
        height: 140,
    },
    title: {
        fontSize: 14,
    },


});
const UserCard = ({user, history}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={user.avatar_url}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title} color="textSecondary">
                    {user.login}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant={"outlined"} size="small" onClick={() => history.push(`/profile/${user.login}`)}>Learn
                    More</Button>
            </CardActions>
        </Card>
    )
};

export default withRouter(UserCard);
