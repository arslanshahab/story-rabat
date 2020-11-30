import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Paper } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';

const sliderImages = {
    dining: [
        {
            image: require("assets/images/sliders/dining/1.jpg"),
            title: "Le Safran Restaurant"
        },
        {
            image: require("assets/images/sliders/dining/2.jpg"),
            title: "Le Bar"
        },
    ],
    golf: [
        {
            image: require("assets/images/sliders/play-golf/1.jpg"),
            title: "Royal Golf Dar Essalam"
        },
        {
            image: require("assets/images/sliders/play-golf/2.jpg"),
            title: "Royal Golf Dar Essalam"
        },
    ],
    spa: [
        {
            image: require("assets/images/sliders/spa-wellness/1.jpg"),
            title: "Sculptured Gardens"
        },
        {
            image: require("assets/images/sliders/spa-wellness/2.jpg"),
            title: "Fitness Room"
        },
        {
            image: require("assets/images/sliders/spa-wellness/3.jpg"),
            title: "Swimming Pool"
        },
        {
            image: require("assets/images/sliders/spa-wellness/4.jpg"),
            title: "Spa & Hammam"
        },
    ],
    sites: [
        {
            image: require("assets/images/sliders/sites/1.jpg"),
            title: "Mega Mall"
        },
        {
            image: require("assets/images/sliders/sites/2.jpg"),
            title: "Mahaj Riad"
        },
    ],
    
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }
function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const ServiceTabs = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Paper square>
                <Tabs
                    value={value}
                    variant="scrollable"
                    scrollButtons="on"
                    centered
                    onChange={handleChange}
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Dining" {...a11yProps(0)} />
                    <Tab label="Spa &amp; Wellness" {...a11yProps(1)} />
                    <Tab label="Play Golf" {...a11yProps(2)} />
                    <Tab label="Sites" {...a11yProps(3)} />
                </Tabs>
            </Paper>
            <TabPanel value={value} index={0}>
                <div className="tab-slider">
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={6} className="p-4">
                            <Carousel
                                dynamicHeight={false}
                                showStatus={false}
                                showArrows={false}
                                showThumbs={false}
                                infiniteLoop={true}
                                autoPlay={false}
                            >
                                {
                                    sliderImages.dining.map(x => (
                                        <div className="slider-image-wrapper-service">
                                            <img src={x.image} />
                                            <p className="hotel-title">{x.title}</p>
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </Grid>
                        <Grid item xs={12} sm={6} className="p-4">
                            <div className="tab-content px-5">
                                <h1>Fine Dining</h1>
                                <ul>
                                    <li>Le Safran Restaurant - Groumet Experience</li>
                                    <li>Le Bar - Bar and Lounge</li>
                                </ul>
                                <button className="btn-theme btn-explore" onClick={() => window.location = "https://www.hhoteldubai.com/dining/"}>EXPLORE</button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="tab-slider">
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={6} className="p-4">
                            <Carousel
                                dynamicHeight={false}
                                showStatus={false}
                                showArrows={false}
                                showThumbs={false}
                                infiniteLoop={true}
                                autoPlay={false}
                            >
                                {
                                    sliderImages.spa.map(x => (
                                        <div className="slider-image-wrapper-service">
                                            <img src={x.image} />
                                            <p className="hotel-title">{x.title}</p>
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </Grid>
                        <Grid item xs={12} sm={6} className="p-4">
                            <div className="tab-content px-5">
                                <h1>Spa &amp; Wellness</h1>
                                <ul>
                                    <li>Spa &amp; Hammam</li>
                                    <li>Fitness Room</li>
                                    <li>Swimming Pool</li>
                                    <li>Sculptured Gardens</li>
                                </ul>
                                <button className="btn-theme btn-explore" onClick={() => window.location = "https://www.hhoteldubai.com/spa-and-fitness/"}>EXPLORE</button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className="tab-slider">
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={6} className="p-4">
                            <Carousel
                                dynamicHeight={false}
                                showStatus={false}
                                showArrows={false}
                                showThumbs={false}
                                infiniteLoop={true}
                                autoPlay={false}
                            >
                                {
                                    sliderImages.golf.map(x => (
                                        <div className="slider-image-wrapper-service">
                                            <img src={x.image} />
                                            <p className="hotel-title">{x.title}</p>
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </Grid>
                        <Grid item xs={12} sm={6} className="p-4">
                            <div className="tab-content px-5">
                                <h1>Play Golf</h1>
                                <ul>
                                    <li>Enjoy a round of gold in the nearby golf course</li>
                                    <li>Royal Golf Dar Essalam</li>
                                    <li>5 km — 5 min drive / 50 min walk</li>
                                </ul>
                                <button className="btn-theme btn-explore">EXPLORE</button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div className="tab-slider">
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={6} className="p-4">
                            <Carousel
                                dynamicHeight={false}
                                showStatus={false}
                                showArrows={false}
                                showThumbs={false}
                                infiniteLoop={true}
                                autoPlay={false}
                            >
                                {
                                    sliderImages.sites.map(x => (
                                        <div className="slider-image-wrapper-service">
                                            <img src={x.image} />
                                            <p className="hotel-title">{x.title}</p>
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </Grid>
                        <Grid item xs={12} sm={6} className="p-4">
                            <div className="tab-content px-5">
                                <h1>Sites</h1>
                                <ul>
                                    <li>Mega Mall - 4 km - 10min drive</li>
                                    <li>Mahaj Riad - 7 km - 15 min drive</li>
                                    <li>Rabat Medina - 12 km - 30 mins drive</li>
                                    <li>Historical Monuments (Chellah, Hassan Tour) - 10 km - 20 min drive</li>
                                </ul>
                                <button className="btn-theme btn-explore">EXPLORE</button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </TabPanel>
        </div>
    );
}

export default ServiceTabs;