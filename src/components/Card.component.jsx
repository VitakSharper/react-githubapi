import React from "react";
import {withRouter} from 'react-router-dom';
import {
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Typography,
    CardActions,
    Button,
    makeStyles
} from "@material-ui/core";


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
        transition: 'all 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    },
    title: {
        fontSize: 14,
    },

});
const UserCard = ({user, history}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={user.avatar_url}
                    title={user.login}
                    onClick={() => history.push(`/profile/${user.login}`)}
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title} color="textSecondary">
                    {user.login}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant={"outlined"} size="small">Learn
                    More</Button>
            </CardActions>
        </Card>
    )
};

export default withRouter(UserCard);
