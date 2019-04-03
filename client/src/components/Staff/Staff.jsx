import React, {Component} from "react";
import Slider from "react-slick";
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBCol,
    MDBContainer,
} from "mdbreact";
import doctor1 from "./img/doctor1.jpg";
import doctor2 from "./img/doctor2.jpg";
import doctor3 from "./img/doctor3.jpg";
import doctor4 from "./img/doctor4.jpg";
import doctor5 from "./img/doctor5.png";
import doctor6 from "./img/doctor6.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Staff extends Component {
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
                            <MDBCol>
                                <MDBCard
                                    className="staff__card"
                                    style={{width: "20rem", margin: "10px 0"}}
                                >
                                    <MDBCardImage
                                        className="img-fluid staff__card-image"
                                        src={doctor1}
                                        waves
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>Бурунов Виталий Викторович</MDBCardTitle>
                                        <p className="staff__card-post">Начальник кардиологии</p>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and
                                            make up the bulk of the card&apos;s content.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard style={{width: "20rem", margin: "10px 0"}}>
                                    <MDBCardImage
                                        className="img-fluid staff__card-image"
                                        src={doctor2}
                                        waves
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>Захаров Игорь Дмитреевич</MDBCardTitle>
                                        <p className="staff__card-post">Начальник аллергологии</p>

                                        <MDBCardText>
                                            Some quick example text to build on the card title and
                                            make up the bulk of the card&apos;s content.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard style={{width: "20rem", margin: "10px 0"}}>
                                    <MDBCardImage
                                        className="img-fluid staff__card-image"
                                        src={doctor3}
                                        waves
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>Федоренко Анатолий Алексеевич</MDBCardTitle>
                                        <p className="staff__card-post">Начальник неврологии</p>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and
                                            make up the bulk of the card&apos;s content.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard style={{width: "20rem", margin: "10px 0"}}>
                                    <MDBCardImage
                                        className="img-fluid staff__card-image"
                                        src={doctor4}
                                        waves
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>Герасименко Дмитрий Игоревич</MDBCardTitle>
                                        <p className="staff__card-post">
                                            Начальник хирургического отделения
                                        </p>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and
                                            make up the bulk of the card&apos;s content.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard style={{width: "20rem", margin: "10px 0"}}>
                                    <MDBCardImage
                                        className="img-fluid staff__card-image"
                                        src={doctor5}
                                        waves
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>Гайдукович Александр Игнатьевич</MDBCardTitle>
                                        <p className="staff__card-post">
                                            Начальник терапивтического отделения
                                        </p>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and
                                            make up the bulk of the card&apos;s content.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard style={{width: "20rem", margin: "10px 0"}}>
                                    <MDBCardImage
                                        className="img-fluid staff__card-image"
                                        src={doctor6}
                                        waves
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>Шестопалов Илья Владимирович</MDBCardTitle>
                                        <p className="staff__card-post">
                                            Начальник стомотологии
                                        </p>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and
                                            make up the bulk of the card&apos;s content.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </Slider>
                    </div>
                </MDBContainer>
            </section>
        );
    }
}

export default Staff;
