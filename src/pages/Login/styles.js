import { makeStyles } from '@material-ui/core/styles';
import Colors from '../../colors';
const widthDimension = window.innerWidth;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        height: '100vh',
        background: `linear-gradient(180deg, ${Colors.purpleOne} 20%, ${Colors.ocean} 80%)`
    },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        marginTop: widthDimension <= 600 ? theme.spacing(5) : theme.spacing(15),
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