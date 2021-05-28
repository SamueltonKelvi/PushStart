import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

import ImageSvg from '../../assets/undraw_not_found_60pq.svg';

export default function NotFound() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <div className={classes.paper}>
                <img src={ImageSvg}  alt="Not found" width="30%" height="30%"/>
                <p className={classes.text}>Página não encontrada</p>
            </div>
        </Grid>
    )
}