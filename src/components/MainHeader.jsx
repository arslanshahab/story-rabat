import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Navbar from './Navbar';

const MainHeader = (props) => {
    return (
        <React.Fragment>
            <div className="header-wrapper">
                <Navbar />
                <header className="text-center">
                    <div className="title">
                        <h1 className="text-center">The Ultimate <br/> Winter Escape at <br /> Story Rabat</h1>
                        <button onClick={()=> window.location = "https://be.synxis.com/?adult=1&arrive=2020-11-26&chain=27304&child=0&currency=EUR&depart=2020-11-27&hotel=1599&level=hotel&locale=en-US&promo=WESCAPE&rooms=1"} className="btn-theme btn-book-now px-4 mt-4 py-2">Book Now</button>
                    </div>
                </header>
            </div>
        </React.Fragment>
    );
}

export default MainHeader;