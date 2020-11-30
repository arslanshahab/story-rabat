import React, { Component } from 'react';
import MainHeader from 'components/MainHeader';
import AboutCard from 'components/AboutCard';
import CopyrightFooter from 'components/CopyrightFooter';

import ServiceTabs from 'components/ServicesTabs';
import RoomSlider from 'components/RoomSlider';
import GuestReviews from 'components/GuestReviews';
import BottomNavigator from 'components/BottomNavigator';

const room1 = require('assets/images/room1.png');
const room2 = require('assets/images/room2.png');
const room3 = require('assets/images/room3.png');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [
                {
                    title: "Deluxe King",
                    image: room1,
                    accomodation: {
                        left: 4,
                        sleeps: 2,
                        size: 'King',
                        area: 55,
                    },
                    additional_details_list: [
                        "Large king bed",
                        "Balcony or terrace with garden views",
                        "Ensuite with bathtub, shower & toiletries",
                        "Air conditioning & Free WiFi",
                        "Tea/coffee facilities & Minibar"
                    ],
                    rate: 176,
                    room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                },
                {
                    title: "Premium Room",
                    image: room2,
                    accomodation: {
                        left: 4,
                        sleeps: 2,
                        size: 'King',
                        area: 55,
                    },
                    additional_details_list: [
                        "King bed & Lounge area",
                        "Bathroom with bath, shower & toiletries",
                        "Air conditioning & Free WiFi",
                        "Terrace with sun loungers",
                        "Tea/coffee facilities & Minibar",
                    ],
                    rate: 195,
                    room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                },
                {
                    title: "Suite Diyafa with Terrace",
                    image: room3,
                    accomodation: {
                        left: 4,
                        sleeps: 2,
                        size: 'King',
                        area: 55,
                    },
                    additional_details_list: [
                        "Large king bedroom and living area",
                        "Terrace leading to the garden",
                        "Large bathroom with bathtub, shower & toiletries",
                        "A/C & Free WiFi",
                        "Nespresso coffee machine & Minibar",
                    ],
                    rate: 195,
                    room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                },

            ]
        }
    }
    render() {
        const { cards } = this.state;
        return (
            <React.Fragment>
                <MainHeader />
                <RoomSlider />
                <div className="service-tabs-wrapper">
                    <h1 className="text-center p-2 mt-2">Explore our luxurious Facilities</h1>
                    <ServiceTabs />
                </div>
                <GuestReviews />
                <AboutCard />
                <CopyrightFooter />
                <BottomNavigator />
            </React.Fragment>
        );
    }
}

export default Home;