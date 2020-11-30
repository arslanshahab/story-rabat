import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { VisibilityOffOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '28.125%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


const ServiceCard = (props) => {
    const classes = useStyles();

    return (
        <Grid item key={props.card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={props.icon}
                    title="Image title"
                    style={{backgroundSize:'auto'}}
                />
                {/* <VisibilityOffOutlined /> */}
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h3" className="text-center">
                        {props.name}
                    </Typography>
                    <Typography variant="caption" className="text-center d-block text-muted">
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ServiceCard;