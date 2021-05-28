import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default function SnackBarCustomized({ title, state, setState }) {
    const { vertical, horizontal, open } = state;

    return (
        <Snackbar
            autoHideDuration={3000}
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            message={title}
            onClose={() => setState({ ...state, open: false })}
            key={vertical + horizontal} />
    )
}