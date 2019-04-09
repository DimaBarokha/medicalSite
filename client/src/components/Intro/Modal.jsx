import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBRow
} from "mdbreact";
import React from "react";
import axios from "axios";

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

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
            <MDBModal isOpen={this.props.isOpen} centered>
                <MDBModalHeader toggle={this.props.onToggle}>
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
        );
    }
}