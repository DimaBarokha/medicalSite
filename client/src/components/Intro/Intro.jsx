import React from "react";

import {MDBContainer, MDBRow, MDBCol, MDBMask, MDBBtn} from "mdbreact";
import {
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBInput,
    MDBIcon
} from "mdbreact";
import axios from "axios"
class Intro extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        modal9: false
    };

    toggle = nr => () => {
        let modalNumber = "modal" + nr;
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    };
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    async handleSubmit(e) {
        e.preventDefault();
        const {name, email, message} = this.state;
        const form = await axios.post("/api/form", {
            name,
            email,
            message
        });
    }

    render() {
        return (
            <header
                className="d-flex justify-content-center align-items-center gradient header"
                id="main"
            >
                <MDBMask>
                    <MDBContainer>
                        <MDBRow>
                            <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                <h1 className="h1-responsive font-weight-bold mt-sm-5">
                                    Почему мы?
                                </h1>
                                <hr className="hr-light"/>
                                <h6 className="mb-4">
                                    Высокий профессиональный уровень специалистов. Врачи имеют
                                    большой опыт практической работы, систематически проходят
                                    курсы повышения квалификации в образовательных центрах мира,
                                    принимают участие в международных семинарах и конференциях.
                                </h6>
                                <MDBBtn color="white" onClick={this.toggle(9)}>
                                    Получи консультацию бесплатно
                                </MDBBtn>
                            </div>
                            <MDBCol md="6" xl="5" className="mt-xl-5"/>
                        </MDBRow>
                    </MDBContainer>
                </MDBMask>
                <MDBModal isOpen={this.state.modal9} toggle={this.toggle(9)} centered>
                    <MDBModalHeader toggle={this.toggle(9)}>
                        Опишите вашу проблему ниже:
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="12">
                                    <form onSubmit={this.handleSubmit}>
                                        <p className="h5 text-center mb-4">
                                            Мы всегда рады помочь вам
                                        </p>
                                        <div className="grey-text">
                                            <MDBInput
                                                className="senderName"
                                                label="Ваше имя"
                                                name="name"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                onChange={this.handleChange}
                                            />
                                            <MDBInput
                                                className="senderEmail"
                                                label="Ваш email"
                                                name="email"
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                                onChange={this.handleChange}
                                            />
                                            <MDBInput
                                                className="senderSubject"
                                                label="Тема"
                                                name="subject"
                                                icon="tag"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                onChange={this.handleChange}
                                            />
                                            <MDBInput
                                                className="senderMessage"
                                                type="textarea"
                                                name="message"
                                                rows="2"
                                                label="Ваше сообщение"
                                                icon="pencil-alt"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="text-center">
                                            <MDBBtn type="submit" outline color="secondary">
                                                Отправить{" "}
                                                <MDBIcon far icon="paper-plane" className="ml-1"/>
                                            </MDBBtn>
                                        </div>
                                    </form>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBModalBody>
                </MDBModal>
            </header>
        );
    }
}

export default Intro;
