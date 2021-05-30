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
    }
}));

export default useStyles;