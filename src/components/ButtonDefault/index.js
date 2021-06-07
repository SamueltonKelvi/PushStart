import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Colors from '../../colors';

const useStyles = makeStyles((theme) => ({
    submit: {
        backgroundColor: Colors.purpleOne,
        color: Colors.white,
        margin: theme.spacing(3, 0, 2),
        padding: 15,
        width: '100%',
        border: 'none',
        borderRadius: 4,
        elevation: 2,
        cursor: 'pointer'
    },
}));

export default function ButtonDefault({ title, onClick }) {
    const classes = useStyles();
    return (
        <button
            className={classes.submit}
            onClick={onClick}>
            {title}
        </button>
    )
}