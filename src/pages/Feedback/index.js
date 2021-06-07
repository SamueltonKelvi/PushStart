import * as React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import Colors from '../../colors';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';

import { ButtonFloat, SnackBarCustomized, ButtonDefault, Loading } from '../../components';
import api from '../../services';
import { FeedbackModel } from '../../models';

export default function FeedBack() {
    const history = useHistory();
    const classes = useStyles();
    const [data, setData] = React.useState([]);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [menssage, setMenssage] = React.useState('');
    const [state, setState] = React.useState({ open: false, vertical: 'bottom', horizontal: 'center' });
    const [error, setError] = React.useState(false);
    const [message, setMessage] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const handleState = () => {
        setName('');
        setEmail('');
        setMenssage('');
    }

    const handleValidation = async () => {
        if (name === '' || name.length < 3 || email === '' || menssage === '' || menssage.length < 10) {
            setState({ ...state, open: true });
            setMessage('Preencha todos os campos');
            return setError(true);
        } else {
            setError(false);
            setLoading(true);

            const data = new FeedbackModel(name, email, menssage);

            const response = await api.post('/feedback', JSON.stringify(data));

            if (response.status !== 200) {
                setLoading(false);
                setState({ ...state, open: true });
                return setMessage('Algo deu errado, não foi possivel salvar seu feedback');
            }

            handleState();
            setLoading(false);
            setState({ ...state, open: true });
            return setMessage('Feedback salvo com sucesso!');
        }
    }

    return (
        <Grid container direction="row" alignItems="flex-start" component="main" className={classes.root}>
            {!!state.open && <SnackBarCustomized title={message} state={state} setState={setState} />}
            <CssBaseline />
            <Grid container xs={12} className={classes.header}>
                <IconButton onClick={() => history.goBack()} aria-label="add to ArrowBackIosIcon" className={classes.headericon}>
                    <ArrowBackIosIcon style={{ color: Colors.white }} />
                </IconButton>
                <Typography variant="h6" className={classes.title}>Feedback</Typography>
            </Grid>
            <Grid container xs={12} justify="center" alignItems="center" className={classes.headerdescription}>
                <IconButton aria-label="add to TextsmsOutlinedIcon">
                    <TextsmsOutlinedIcon style={{ color: Colors.white }} />
                </IconButton>
                <Typography variant="h6">Deixe suas criticas e sugestões! Assim podemos melhorar o nosso conteúdo.</Typography>
            </Grid>
            <Grid direction="column" justify="center" alignItems="center" container xs={12} className={classes.form}>
                <Paper className={classes.paper} elevation={0}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        error={error ? true : false}
                        required
                        fullWidth
                        label="Nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        error={error ? true : false}
                        required
                        fullWidth
                        label="E-mail"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        error={error ? true : false}
                        required
                        fullWidth
                        label="Mensagem"
                        type="text"
                        rowsMax={4}
                        multiline
                        id="outlined-multiline-static"
                        onChange={(e) => setMenssage(e.target.value)}
                        value={menssage}
                    />
                    {loading ? <Loading /> : <ButtonDefault title="Enviar" onClick={handleValidation} />}
                </Paper>
            </Grid>
            <ButtonFloat onClick={() => history.push('feedback')} />
        </Grid>
    )
}