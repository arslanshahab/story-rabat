import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { HomeRounded, PhoneRounded, EmailRounded, EventRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

const BottomNavigator = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="bottom-navigator-wrapper">
            <BottomNavigation showLabels={false} value={value} onChange={handleChange} className={classes.root}>
                <Link to="/"><HomeRounded /></Link>
                <a href={"https://be.synxis.com/?adult=1&arrive=2020-11-26&chain=27304&child=0&currency=EUR&depart=2020-11-27&hotel=1599&level=hotel&locale=en-US&promo=WESCAPE&rooms=1"}><EventRounded /></a>
                <a href="tel:+212538050800"><PhoneRounded /></a>
                <a href="mailto:reservations.rabat@story-hotels.com"><EmailRounded /></a>
            </BottomNavigation>
        </div>
    );
}

export default BottomNavigator;