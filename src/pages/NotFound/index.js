import React from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import Button from '@material-ui/core/Button';

import ImageSvg from '../../assets/undraw_not_found_60pq.svg';

export default function NotFound() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Grid container component="main" className={classes.root}>
            <div className={classes.paper}>
                <img src={ImageSvg} alt="Not found" width="50%" height="50%" />
                <p className={classes.text}>Página não encontrada</p>
            </div>
            <Button variant="contained" onClick={() => history.goBack()}>Voltar</Button>
        </Grid>
    )
}