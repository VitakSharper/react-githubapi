import React from "react";
import {makeStyles, CircularProgress} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));


const Spinner = () => {
    const classes = useStyles();
    return (
        <CircularProgress color={"secondary"}/>
    )
};

export default Spinner;
