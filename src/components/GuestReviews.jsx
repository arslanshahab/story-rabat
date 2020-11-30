import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactStars from "react-rating-stars-component";

const avatar1 = require("assets/images/avatar-lady.png")

const reviews = [
    {
        name: "Tam",
        rating: 5,
        title: "Wonderful Stay",
        review: "I stayed in Villa Diyafa and I can clearly say that it was one of my best stays ever. The interior was beautiful, the service was outstanding and the food was delicious. The staffs were friendly and helpful but the butler Houssam was one of a kind. He made sure that our stay was smooth and brilliant, and went out of his way to assist us for everything which made us feel very welcomes and comfortable. He is an asset to the property and for that we are thankful for his services.",
        image: avatar1,
        stayDate: new Date().toLocaleDateString()
    }
]

const GuestReviews = (props) => {
    return (
        <div className="guest-reviews-wrapper p-5 text-center">
            <h1>Guest Reviews</h1>
            <Carousel
                dynamicHeight={false}
                showStatus={false}
                showArrows={true}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={false}
                className="guest-carousel"
            >
                {
                    reviews.map(x => (
                        <div className="review-wrapper w-75 mx-auto py-5">
                            <img className="gt-img" src={x.image} alt={x.name} />
                            <h5 className="gt-name">{x.name}</h5>
                            <ReactStars classNames="gt-rating" count={5} value={x.rating} edit={false} size={30} />
                            <h4 className="gt-title">{x.title}</h4>
                            <p className="gt-review">{x.review}</p>
                            <p className="gt-date">Date of Stay: {x.stayDate}</p>

                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default GuestReviews;