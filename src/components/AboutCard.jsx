import { RoomRounded, ShoppingBasketRounded } from '@material-ui/icons';
import React from 'react';
import constants from "utils/constants";

const AboutCard = (props) => {
    return (
        <React.Fragment>
            <div className="about-card-wrapper p-5">
                <div className="container">
                    <h1 className="text-center">{constants.ABOUT_CARD.TITLE}</h1>
                    <p className="text-center mt-4">
                        {constants.ABOUT_CARD.DESCRIPTION}
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AboutCard;