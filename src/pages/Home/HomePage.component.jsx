import React, {useContext} from "react";
import {Grid, makeStyles} from "@material-ui/core";

import GithubContext from "../../context/github/githubContext";

import {Search} from "../../components/Search.component";
import UserCard from "../../components/Card.component";

import Spinner from "../../components/Spinner.component";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        margin: '0 auto'
    },
}));


const HomePage = () => {
    const classes = useStyles();
    const {users, loading} = useContext(GithubContext);

    return (
        <Grid container spacing={3} direction={"column"}>
            <Grid item xs={12} sm container justify={"center"} alignItems={"center"}>
                <Grid item>
                    <Search/>
                </Grid>
            </Grid>
            <Grid item xs={12} sm container spacing={2} justify={"center"}>
                {
                    loading
                        // TODO SPINNER
                        ? <Spinner/>
                        : users.map(u => (
                            <Grid item xs={4} key={u.node_id}>
                                <UserCard
                                    user={u}
                                />
                            </Grid>
                        ))
                }
            </Grid>
        </Grid>
    )
};

export default HomePage;
