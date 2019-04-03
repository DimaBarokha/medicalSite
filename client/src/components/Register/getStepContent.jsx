import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";
import React from "react";

export default function getStepContent(step, func) {
    switch (step) {
        case 0:
            return (
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="4">
                            <div className="branch">
                                <input type="text" value="Врач хирург" onClick={func} readOnly/>
                            </div>
                        </MDBCol>
                        <MDBCol md="4">
                            <div className="branch">
                                <input type="text" value="Врач Терапевт" onClick={func} readOnly/>
                            </div>
                        </MDBCol>
                        <MDBCol md="4">
                            <div className="branch">
                                <input type="text" value="Врач каридиолог" onClick={func} readOnly/>
                            </div>
                        </MDBCol>
                        <MDBCol md="4">
                            <div className="branch">
                                <input type="text" value="Врач невролог" onClick={func} readOnly/>
                            </div>
                        </MDBCol>
                        <MDBCol md="4">
                            <div className="branch">
                                <input type="text" value="Врач стомотолог" onClick={func} readOnly/>
                            </div>
                        </MDBCol>
                        <MDBCol md="4">
                            <div className="branch">
                                <input type="text" value="Врач аллерголог" onClick={func} readOnly/>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            );
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return (
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <form>
                                <p className="h5 text-center mb-4">Sign up</p>
                                <div className="grey-text">
                                    <MDBInput
                                        label="Your name"
                                        icon="user"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your email"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Confirm your email"
                                        icon="exclamation-triangle"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your password"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="primary">Register</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            );
        default:
            return 'Unknown step';
    }
}