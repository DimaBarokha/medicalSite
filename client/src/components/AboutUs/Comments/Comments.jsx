import {MDBContainer} from "mdbreact";
import Slider from "react-slick";
import commentsData from './commentsData'
import SingleComment from './SingleComment'
import React from "react";

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    cssEase: "linear"
};
const Comments = (props) =>
    <section className="comments">
        <MDBContainer>
            <div className="about__comments">
                <div className="about__comments-title">
                    <h2 className="about__comments-intro"><span>Отзывы</span> о нас</h2>
                </div>
                <Slider {...settings}>
                    {
                        commentsData.map((item, index) =>
                            <SingleComment item={item} key={index}/>
                        )
                    }
                </Slider>
            </div>
        </MDBContainer>
    </section>

export default Comments;