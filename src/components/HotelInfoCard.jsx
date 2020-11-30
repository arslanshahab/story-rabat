import React from 'react';
import { Grid, Paper, Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AddOutlined, ExpandMoreOutlined, FiberManualRecordRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#fff'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
const HotelInfoCard = ({
    title,
    image,
    accomodation,
    additional_details_list,
    room_details,
    rate,
}) => {
    const classes = useStyles();

    return (
        <div className={`${classes.root}`}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6} className="p-4">
                    <img className="w-100 img-responsive" src={image} alt="" />
                </Grid>
                <Grid item xs={12} sm={6} className="p-4">
                    <div className="px-5">
                        <h1 className="item-title">{title}</h1>
                        <i>Only {accomodation.rooms} rooms left Sleeps {accomodation.sleep} | {accomodation.size} | {accomodation.area} m<sup>2</sup></i>
                        <ul className="additional-info mt-3">
                            {
                                additional_details_list.map(x => {
                                    return <li> {x}</li>
                                })
                            }
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <div className="room-info-wrapper my-4">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<AddOutlined />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <h3 className={"room-details-title"}>Room Details</h3>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {room_details}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <div className="rate text-center py-4">
                        <h3>AED {rate}</h3>
                        <p>Per Night</p>
                        <p>Including Taxes &amp; Fees</p>
                        <button className="btn-book-room btn-theme w-50 py-3">Book Now</button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default HotelInfoCard;