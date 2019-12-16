import React, {useContext} from "react";
import {Grid} from "@material-ui/core";

import GithubContext from "../../context/github/githubContext";

import {Search} from "../../components/Search.component";
import UserCard from "../../components/Card.component";

const HomePage = () => {
    const {users, loading} = useContext(GithubContext);

    return (
        <Grid container spacing={3} direction={"column"}>
            <Grid item xs={12} sm container justify={"center"} alignItems={"center"}>
                <Grid item>
                    <Search/>
                </Grid>
            </Grid>
            <Grid item xs={12} sm container spacing={2}>
                {
                    loading
                        // TODO SPINNER
                        ? <p>Loading</p>
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
