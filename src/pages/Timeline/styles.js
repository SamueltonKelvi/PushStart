import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Colors from '../../colors';

const useStyles = makeStyles((theme, props) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        height: '100vh',
        background: `linear-gradient(180deg, ${Colors.purpleOne} 20%, ${Colors.ocean} 80%)`
    },
    title: {
        padding: 15,
        color: Colors.white,
        width: '100%',
        textAlign: 'center'
    },
    paper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridGap: 20,
        width: '100%',
        height: '100%',
        fontSize: 18,
        borderRadius: 0,
        textAlign: 'center',
        color: Colors.purpleOne,
    },
    listul:{
        listStyle: 'none'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    avatar: {
        display: 'flex',
        margin: theme.spacing(1),
        backgroundColor: Colors.white,
        padding: 10,
        width: 120,
        height: 120,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: '100%',
        marginTop: props <= 600 ? theme.spacing(5) : theme.spacing(15),
    },
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

export default useStyles;