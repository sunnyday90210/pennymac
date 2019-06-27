import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  purpleAvatar: {
    marginLeft: 20,
    color: '#fff',
    backgroundColor: deepPurple[500]
  }
});

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar className={classes.purpleAvatar}>QH</Avatar>
    </Grid>
  );
}
