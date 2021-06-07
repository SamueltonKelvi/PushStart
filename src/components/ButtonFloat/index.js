import React from 'react';
import Fab from '@material-ui/core/Fab';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Colors from '../../colors';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        background: Colors.ocean
    }
}));

export default function ButtonFloat({ onClick }) {
    const classes = useStyles();

    return (
        <Fab color="default" aria-label="TextsmsOutlined" onClick={onClick} className={classes.fab}>
            <TextsmsOutlinedIcon style={{ color: Colors.white }}/>
        </Fab>
    )
}