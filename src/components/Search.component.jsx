import React, {useContext, useState} from 'react'
import {AlertContext} from '../context/alert/alertContext'
import {makeStyles, TextField} from "@material-ui/core";
import GithubContext from "../context/github/githubContext";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 250,
        },
    },
}));


export const Search = () => {
    const classes = useStyles();
    const {show, hide} = useContext(AlertContext);
    const {searchUser, clearUsers} = useContext(GithubContext);
    const [searchValue, setSearchValue] = useState('');

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return;
        }

        clearUsers();

        if (searchValue.trim()) {
            hide();
            searchUser(searchValue.trim())
        } else {
            show('Enter user data')
        }
    };

    return (
        <div>
            <div className={classes.root}>
                <TextField
                    label="Enter the Github login..."
                    variant="outlined"
                    onKeyPress={onSubmit}
                    value={searchValue}
                    onChange={event => setSearchValue(event.target.value)}
                />
            </div>
        </div>
    )
};
