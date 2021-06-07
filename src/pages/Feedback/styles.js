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
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headericon: {
        position: 'absolute',
        top: theme.spacing(1),
        left: theme.spacing(2),
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.white,
        textAlign: 'center',
    },
    headerdescription: {
        color: Colors.white,
        backgroundColor: Colors.ocean,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: Colors.white,
        width: '100%',
        height: '100%'
    },
    paper: {
        width: widthDimension <= 600 ? '100%' : '50%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: widthDimension <= 600 ? '1%' : '2%',
        paddingRight: widthDimension <= 600 ? '1%' : '2%',
        border: 'none',
    },
    listul: {
        listStyle: 'none'
    }
}));

export default useStyles;