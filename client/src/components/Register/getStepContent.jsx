import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";
import React from "react";
import doctor from '../Staff/img/doctor1.jpg'
import BranchesComponent from './stepData/branchesComponent'
import branchesData from './stepData/branchesData'

export default function getStepContent(step, nextStep) {
    switch (step) {
        case 0:
            return (
                <MDBContainer>
                    <MDBRow>
                        {
                            branchesData.map((items, index) =>
                                <BranchesComponent data={items} onClick={nextStep} key={index}/>
                            )}
                    </MDBRow>
                </MDBContainer>
            );
        case 1:
            return (
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="4">
                            <div className="doctor d-flex" onClick={nextStep}>
                                <h3 className="doctor__name">
                                    Царик С А
                                </h3>
                                <img src={doctor} alt=""/>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            );
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