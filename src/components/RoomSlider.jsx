import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const room1 = require('assets/images/room1.png');
const room2 = require('assets/images/room2.png');
const room3 = require('assets/images/room3.png');

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "70px",
};

const rooms = [
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

const RoomSlider = () => {
    return (
        <div className="room-slider-wrapper py-4">
            <h2 className="section-title">Enjoy our Winter Escape Offers</h2>
            <p className="w-75 text-center mx-auto">Gift yourself a winter break you deserve. Book your stay at Story Rabat to enjoy the best winter escape deal.</p>
            <Carousel
                dynamicHeight={false}
                showStatus={false}
                showArrows={true}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={false}
                centerMode
                centerSlidePercentage={60}
                className="room-carousel"
            >
                {
                    rooms.map(x => (
                        <div>
                            <img src={x.image} />
                            <div className="slide-content py-3">
                                <h2>{x.title}</h2>
                                <ul>
                                    {x.additional_details_list.map(li => (
                                        <li>{li}</li>
                                    ))}
                                </ul>
                                <p className="rate my-3">
                                    AED {x.rate}
                                </p>
                                <p className="rate-deleted my-3">
                                    <del style={{opacity: 0.9}}>AED {x.original}</del>
                                </p>
                                <button className="btn-book-now my-2" onClick={()=> window.location = "https://be.synxis.com/?adult=1&arrive=2020-11-26&chain=27304&child=0&currency=EUR&depart=2020-11-27&hotel=1599&level=hotel&locale=en-US&promo=WESCAPE&rooms=1"}>BOOK NOW</button>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default RoomSlider;