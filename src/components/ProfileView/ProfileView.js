import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

const ProfileView = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Profile View {props.count}
      </Typography>
    </div>
  );
}

export default ProfileView;