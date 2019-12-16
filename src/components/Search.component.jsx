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
    const {show} = useContext(AlertContext);
    const {searchUser} = useContext(GithubContext);
    const [searchValue, setSearchValue] = useState('');

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return;
        }
        if (searchValue.trim()) {
            searchUser(searchValue)
        } else {
            show('Enter user data')
        }
    };

    return (
        <div>
            <div className={classes.root}>
                <TextField
                    label="Enter your name please..."
                    variant="outlined"
                    onKeyPress={onSubmit}
                    value={searchValue}
                    onChange={event => setSearchValue(event.target.value)}
                />
            </div>
        </div>
    )
};
