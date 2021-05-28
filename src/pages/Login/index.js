import React from 'react';
import useStyles from './styles';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Login() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="xl" className={classes.content}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>xs=6 login</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}