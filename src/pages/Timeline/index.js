import * as React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { ButtonFloat, ListItems } from '../../components';
import api from '../../services';
import { storageGetItem } from '../../helper';

export default function Timeline() {
    const widthDimension = window.innerWidth;
    const history = useHistory();
    const classes = useStyles(widthDimension);
    const [data, setData] = React.useState([]);

    const handleGetData = async () => {
        try {
            const token = storageGetItem();

            const response = await api.get('/timeline', {
                headers: {
                    'X-Authorization': `${JSON.parse(token)}`
                }
            });

            setData(response.data);
        } catch (error) {
            setData(data);
        }
    }

    React.useEffect(() => { handleGetData(); }, [!widthDimension]);

    return (
        <Grid container direction="row" justify="center" alignItems="flex-start" component="main" className={classes.root}>
            <CssBaseline />
            <Grid container xs={12} alignItems="center" justify="center" classname={classes.title}>
                <Typography variant="h6" className={classes.title}>Timeline</Typography>
            </Grid>
            <Grid direction="column" justify="center" alignItems="center" container xs={12} className={classes.header}>
                <Paper className={classes.paper}>
                    {data.length >= 1 ?
                        data.map((item, index) => {
                            return (
                                <ul key={index} className={classes.listul}>
                                    <li><ListItems data={item} /></li>
                                </ul>
                            )
                        })
                        : <p>Nenhum item encontrado</p>}
                </Paper>
            </Grid>
            <ButtonFloat onClick={() => history.push('feedback')} />
        </Grid>
    )
}