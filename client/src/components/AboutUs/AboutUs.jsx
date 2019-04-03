import React from "react";
import {MDBContainer, MDBRow, MDBCol} from "mdbreact";
import Slider from "react-slick";
import carriage from "./img/carriage.png";
import doctor from "./img/doctorPicture.png"
import syringe from "./img/syringe.png"
import commentImg1 from "./img/commentImg1.jpg"
import commentImg2 from "./img/commentImg2.jpg"
import commentImg3 from "./img/commentImg3.jpg"
import commentImg4 from "./img/commentImg4.jpg"
class About extends React.Component {
    render() {
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
        return (
            <>
                <section className="about" id="about">
                    <MDBContainer>
                        <div className="about__intro">
                            <h1 className="about__intro__text">
                                <span>Здоровье</span> и ваши <span>жалобы</span> для нас главное
                            </h1>
                            <p>Вы можете доверять нам у нас работают лучшие специалисты</p>
                        </div>
                        <MDBRow>
                            <MDBCol md="4">
                                <div className="about__intro__card">
                                    <img
                                        className="about__intro__card-image"
                                        src={carriage}
                                        alt=""
                                    />
                                    <h2 className="about__intro__card-text">Отличный сервис</h2>
                                    <hr className="hr-dark mt-2"/>
                                    <p>
                                        Высокое качество медицинских услуг и сервисного обслуживания.
                                    </p>
                                </div>
                            </MDBCol>
                            <MDBCol md="4">
                                <div className="about__intro__card">
                                    <img
                                        className="about__intro__card-image"
                                        src={doctor}
                                        alt=""
                                    />
                                    <h2 className="about__intro__card-text">Лучшие доктора</h2>
                                    <hr className="hr-dark mt-2"/>
                                    <p>
                                        Нашим врачам вы можете доверять это лучшие специалисты в своем деле они сделают
                                        все
                                        возможное для вашего здоровья.
                                    </p>
                                </div>
                            </MDBCol>
                            <MDBCol md="4">
                                <div className="about__intro__card">
                                    <img
                                        className="about__intro__card-image"
                                        src={syringe}
                                        alt=""
                                    />
                                    <h2 className="about__intro__card-text">Лучшие лекарства</h2>
                                    <hr className="hr-dark mt-2"/>
                                    <p>
                                        Передовые медицинские технологии и прогрессивные методики диагностики и лечения
                                    </p>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
                <section className="comments">
                    <MDBContainer>
                        <div className="about__comments">
                            <div className="about__comments-title">
                                <h2 className="about__comments-intro"><span>Отзывы</span> о нас</h2>
                            </div>
                            <Slider {...settings}>
                                <div className="about__comments-slide">
                                    <img src={commentImg1} alt="" className="about__comments-img"/>
                                    <p className="about__comments-text">
                                        Здесь работают чудесные доктора. Заболел ребенок и обратилось в Medical быстро проконсультировали, что мне делать, а также предложили записаться на прием через онлайн регистрацию

                                    </p>
                                    <h3 className="about__comments-author">
                                        Анна Леквидова
                                    </h3>
                                </div>
                                <div>
                                    <div className="about__comments-slide">
                                        <img src={commentImg2} alt="" className="about__comments-img"/>
                                        <p className="about__comments-text">
                                            Был на приеме у хирурга у Герасименко Дмитрия все очень понравилось, был доволен быстро назначенным лечением и качественным оборудованием
                                        </p>
                                        <h3 className="about__comments-author">
                                            Борис Медальонов
                                        </h3>
                                    </div>
                                </div>
                                <div>
                                    <div className="about__comments-slide">
                                        <img src={commentImg3} alt="" className="about__comments-img"/>
                                        <p className="about__comments-text">
                                            Очень понравилась функция онлайн помощи, быстро ответили и соорентировали, есть возможность онлайн регистрации, что очень полезно и удобно
                                        </p>
                                        <h3 className="about__comments-author">
                                            Леонид Шайдукевич
                                        </h3>
                                    </div>
                                </div>
                                <div>
                                    <div className="about__comments-slide">
                                        <img src={commentImg4} alt="" className="about__comments-img"/>
                                        <p className="about__comments-text">
                                            Была приятна удивлена качеством сервиса и приветливому персоналу, отдельно спасибо Бурунову Виталию за адекватно назанченное лечение
                                        </p>
                                        <h3 className="about__comments-author">
                                            Екатерина Долгопулова
                                        </h3>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </MDBContainer>
                </section>
            </>
        );
    }
}

export default About;
