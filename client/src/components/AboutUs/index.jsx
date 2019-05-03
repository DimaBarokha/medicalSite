import React from "react";
import {MDBContainer, MDBRow} from "mdbreact";
import Comments from './Comments/Comments'
import advantageData from './Advantages/advantageData'
import Advantage from "./Advantages/Advantage";

class About extends React.Component {
    render() {
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
                            {
                                advantageData.map((item,index)=>
                                    <Advantage items={item} key ={index}/>
                                )
                            }
                        </MDBRow>
                    </MDBContainer>
                </section>
                <Comments/>
            </>
        );
    }
}

export default About;
