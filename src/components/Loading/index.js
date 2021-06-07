import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Colors from '../../colors';

export default function Loading() {
    return (
        <CircularProgress color={Colors.white}/>
    )
}