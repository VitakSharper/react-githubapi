import React from "react";
import {withRouter} from "react-router-dom";

import {
    AppBar,
    Toolbar,
    makeStyles,
    IconButton,
    Typography,
    Button,
    Menu,
    MenuItem,
    ButtonGroup
} from "@material-ui/core";
import {Menu as MenuIcon} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(4),
        fontFamily: '\'Solway\', serif',
    },
    title: {
        marginRight: theme.spacing(4),
        fontFamily: '\'Solway\', serif',
        color: '#000'
    },
    links: {
        cursor: 'pointer',
        fontFamily: '\'Solway\', serif'
    },
    spacing: {
        flexGrow: 1,
    }
}));

const Navbar = ({history}) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfile = () => {
        handleClose();
        history.push('/profile/someoneName')
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h5" className={classes.title}>
                    Github Search
                </Typography>
                <ButtonGroup variant="text" color={"inherit"} size="medium" aria-label="small contained button group">
                    <Button onClick={() => history.push('/')}>Home</Button>
                    <Button onClick={() => history.push('/about')}>About</Button>
                    <Button>Contact</Button>
                </ButtonGroup>
                <Typography className={classes.spacing}> </Typography>
                <Button
                    color={"inherit"}
                    aria-controls={'simple-menu'}
                    aria-haspopup={'true'}
                    onClick={handleClick}>Account</Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>

                    <MenuItem onClick={handleProfile}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
};

export default withRouter(Navbar);
