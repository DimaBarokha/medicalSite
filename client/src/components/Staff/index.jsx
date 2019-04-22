import React, {Component} from "react";
import Slider from "react-slick";
import {MDBContainer} from "mdbreact";
import Card from './CardComponent'

import staffData from './staffData'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Index extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <section className="staff" id="doctors">
                <MDBContainer>
                    <div className="staff__about">
                        <h2 className="staff__about-title">
                            Наши <span>Врачи</span>
                        </h2>
                        <Slider {...settings}>
                            {
                                staffData.map((item, index) =>
                                    <Card item={item} key={index}/>
                                )
                            }
                        </Slider>
                    </div>
                </MDBContainer>
            </section>
        );
    }
}

export default Index;