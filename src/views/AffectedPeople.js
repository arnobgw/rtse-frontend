import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PeopleList from '../components/PeopleList/PeopleList';
import ProfileView from '../components/ProfileView/ProfileView';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        margin: 'auto',
        color: theme.palette.text.secondary,
    },
}));

const AffectedPeople = () => {
    const classes = useStyles();
    const [count, setCount] = React.useState(1);

    const handleView = (index) => {
        setCount(index+1)
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <PeopleList handleView={handleView} />
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <ProfileView count={count} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default AffectedPeople;
