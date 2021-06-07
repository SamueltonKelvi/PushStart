import { makeStyles } from '@material-ui/core/styles';
import Colors from '../../colors';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        flexGrow: 1,
        height: '50vw'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    text: {
        fontSize: 20,
        color: Colors.purpleOne
    }
}));

export default useStyles;