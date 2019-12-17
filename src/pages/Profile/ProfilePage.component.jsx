import React, {useContext, useEffect} from "react";
import GithubContext from "../../context/github/githubContext";

import Spinner from "../../components/Spinner.component";

import {
    Grid,
    makeStyles,
    Paper,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    CardHeader,
    Button,
    Avatar
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 800,
        backgroundColor: '#3F51B5'
    },
    card: {
        maxWidth: 500,
        backgroundColor: '#D1C4E9',
        margin: '1rem',

    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));


const ProfilePage = ({match, history}) => {
    const classes = useStyles();

    const {getUser, user, repos, loading} = useContext(GithubContext);

    useEffect(() => {
        getUser(match.params.name);
    }, []);

    if (loading) return <Spinner/>;
    const excludeProps = ['id', 'node_id', ''];

    const keys = Object.keys(user);
    const keys2 = Object.keys(user).filter(k => user[k] && !excludeProps.includes(k));
    console.log('User', user);
    console.log('User', keys2);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item container xs={12} sm justify={"center"} alignItems={"center"}>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Grid item container xs direction={"column"}>
                                <Grid item xs>

                                    <Card className={classes.card}>
                                        <CardContent>
                                            <Avatar src={user.avatar_url} className={classes.large}/>
                                            <Typography gutterBottom variant="h4" component="h2">
                                                Login: {user.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Name: {user.login}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Company:{user.company}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Location: {user.location}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Bio: {user.bio}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Blog: {user.blog}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary" onClick={() => history.push('/')}>
                                                Back to users list
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};

export default ProfilePage;
