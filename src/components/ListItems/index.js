import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Colors from '../../colors';
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        height: 400,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexGrow: 1
    },
    line: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    media: {
        width: '100%',
        height: 100,
        paddingBottom: '56.25%',
    },
    buttons: {
        width: '80%',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
    content: {
        width: 'auto',
        paddingTop: theme.spacing(2),
    },
    contentRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(1),
    },
    contentSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 250,
        flexDirection: 'row',
    },
    contentOne: {
        display: 'flex',
        alignItems: 'center',
        width: '40%',
        height: 25,
        borderRadius: 5,
        background: Colors.purpleOne,
        color: Colors.white,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 14,
        paddingLeft: 5,
    },
    contenSpan: {
        fontSize: 14,
        marginLeft: 5,
        color: Colors.grayDark,
        fontWeight: 'bold',
    },
    contentTwo: {
        display: 'flex',
        alignItems: 'center',
        width: '50%',
        height: 25,
        borderRadius: 5,
        background: Colors.grayLight,
        color: Colors.grayDark,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        fontSize: 14,
        paddingLeft: 5,
    },
    contentTree: {
        display: 'flex',
        alignItems: 'center',
        width: '45%',
        height: 25,
        borderRadius: 5,
        background: Colors.grayLight,
        color: Colors.grayDark,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        fontSize: 14,
        paddingLeft: 5,
    },
    contentSet: {
        background: Colors.grayLight,
    },
    btns: {
        color: Colors.purpleOne,
        borderColor: Colors.purpleOne,
    },
    check: {
        backgroundColor: Colors.purpleOne,
        color: Colors.white,
    },
    likes: {
        width: '100%',
        height: '20%',
    },
    link: {
        fontSize: 13,
        color: Colors.grayDark,
        fontWeight: 'bold',
    },
    checkLink: {
        color: Colors.greenLight,
        cursor: 'pointer'
    },
    vots: {
        fontSize: 12,
        color: Colors.grayDark,
        paddingTop: 5
    }
}));

export default function ListItems({ data }) {
    const classes = useStyles();
    const [votesResult, setVotesResult] = React.useState(0);
    const [favorite, setFavorite] = React.useState(false);
    const [checkButton, setCheckButton] = React.useState(false);
    const [result, setResult] = React.useState(false);
    const dateFormat = new moment(data.createdAt).format("DD/MM/YYYY hh:mm:ss");

    const handleFavorite = () => {
        if (favorite) {
            return setFavorite(false);
        } else {
            return setFavorite(true);
        }
    };

    const handleCheckButton = () => {
        if (checkButton) {
            return setCheckButton(false);
        } else {
            return setCheckButton(true);
        }
    };

    return (
        <Card className={classes.root}>
            <CardContent className={classes.line}>
                <CardHeader
                    avatar={<Avatar aria-label="recipe" src={data.author.avatar} />}
                    style={{ textAlign: 'left' }}
                    title={data.author.name}
                    subheader={dateFormat}
                />
            </CardContent>
            {data.data.options ?
                <div className={classes.contentRow}>
                    {result === true &&
                        <div className={classes.content}>
                            <section className={classes.contentSection}>
                                <div className={classes.contentOne}>Bulbassauro</div>
                                <span className={classes.contenSpan}>27 %</span>
                            </section>
                            <section className={classes.contentSection}>
                                <div className={classes.contentTwo}>Charmander</div>
                                <span className={classes.contenSpan}>43 %</span>
                            </section>
                            <section className={classes.contentSection}>
                                <div className={classes.contentTree}>Squirtle</div>
                                <span className={classes.contenSpan}>30 %</span>
                            </section>
                        </div>}
                    {result === false &&
                        <ButtonGroup className={classes.buttons} orientation="vertical" aria-label="vertical outlined primary button group">
                            <Button className={checkButton ? classes.check : classes.btns} onClick={handleCheckButton}>Bulbassauro</Button>
                            <Button className={classes.btns} onClick={handleCheckButton}>Charmander</Button>
                            <Button className={classes.btns} onClick={handleCheckButton}>Squirtle</Button>
                        </ButtonGroup>}
                    {result === false && <a className={checkButton ? classes.checkLink : classes.link} onClick={() => setResult(true)}>Voltar</a>}
                    <div className={classes.vots}>{data.data.options[0].votes + data.data.options[1].votes + data.data.options[2].votes} votos | restam 5 dias</div>
                </div>
                :
                <CardMedia component="picture" className={classes.media} src={data.data.image} />
            }
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{data.data.text}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.likes}>
                <IconButton aria-label="add to favorites" onClick={handleFavorite}>
                    {favorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
                </IconButton>
                <Typography variant="body2" color="textSecondary" component="p">{data.likes}</Typography>
            </CardActions>
        </Card>
    )
}