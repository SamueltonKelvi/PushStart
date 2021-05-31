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
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

import moment from 'moment'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        height: 400
    },
    media: {
        width: '100%',
        height: 100,
        paddingBottom: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function ListItems({ data }) {
    const classes = useStyles();
    const dateFormat = new moment(data.createdAt).format("DD/MM/YYYY hh:mm:ss");

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar aria-label="recipe" className={classes.avatar} src={data.author.avatar} />}
                style={{ textAlign: 'left' }}
                title={data.author.name}
                subheader={dateFormat}
            />
            <CardMedia component="picture" className={classes.media} src={data.data.image} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{data.data.text}</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <Typography variant="body2" color="textSecondary" component="p">{data.likes}</Typography>
            </CardActions>
        </Card>
    )
}