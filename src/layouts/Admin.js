import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from "react-router-dom";

import routes from "../routes.js";
import Sidebar from '../components/Sidebar/Sidebar.js';
import AdminNavbar from '../components/Navbars/AdminNavbar.js';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true)
    };

    const handleDrawerClose = () => {
        setOpen(false)
    };

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        render={(props) => <prop.component {...props} />}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AdminNavbar handleDrawerOpen={handleDrawerOpen} open={open} />
            <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>{getRoutes(routes)}</Switch>
            </main>
        </div>
    );
}
