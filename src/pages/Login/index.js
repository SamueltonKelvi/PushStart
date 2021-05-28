import * as React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import Colors from '../../colors';

import PersonIcon from '@material-ui/icons/Person';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { SnackBarCustomized, Loading } from '../../components';
import api from '../../services';
import { storageSetItem } from '../../helper';
import { LoginModel } from '../../models';

export default function Login() {
    const history = useHistory();
    const classes = useStyles();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [state, setState] = React.useState({ open: false, vertical: 'bottom', horizontal: 'center' });
    const [error, setError] = React.useState(false);
    const [message, setMessage] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const handleState = () => {
        setUsername('');
        setPassword('');
    }

    const handleLogin = async () => {
        if (username === '' || password === '') {
            setState({ ...state, open: true });
            setMessage('Informe seu usuário e senha');
            return setError(true);
        } else {
            setLoading(true);

            const infos = new LoginModel(username, password);
            const data = JSON.stringify(infos);

            const response = await api({
                method: 'POST',
                url: '/login',
                data
            })

            if (response.status !== 200) {
                setState({ ...state, open: true });
                setMessage('Algo deu errado :(');
                return setLoading(false);
            }

            storageSetItem(response.data.token);
            handleState();
            setLoading(false);
            return history.push('timeline');
        }
    }

    return (
        <Grid container component="main" className={classes.root}>
            {!!state.open && <SnackBarCustomized title={message} state={state} setState={setState} />}
            <CssBaseline />
            <Grid item xs={12} sm={4} md={7} className={classes.header}>
                <div className={classes.avatar}>
                    <PersonIcon
                        fontSize="large"
                        style={{
                            display: 'flex',
                            color: Colors.purpleOne,
                            alignItems: 'center',
                            justifySelf: 'center',
                            justifyContent: 'center'
                        }} />
                </div>
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            error={error ? true : false}
                            required
                            fullWidth
                            label="Usuário"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            error={error ? true : false}
                            required
                            fullWidth
                            label="Senha"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </form>
                    {loading ? <Loading /> :
                        <button
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            fullWidth
                            onClick={handleLogin}>
                            ENTRAR
                        </button>
                    }
                </div>
            </Grid>
        </Grid>
    )
}