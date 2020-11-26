import React from "react";

import {MDBContainer, MDBRow, MDBCol, MDBMask, MDBBtn} from "mdbreact";

import Modal from "./Modal";

import textData from './introText/textData'
import IntroText from "./introText/IntroText";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
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
                                {
                                    textData.map((items, index) =>
                                        <IntroText items ={items} key = {index}/>
                                    )
                                }
                                <MDBBtn color="white" onClick={this.toggle(9)}>
                                    Получи консультацию бесплатно
                                </MDBBtn>
                            </div>
                            <MDBCol md="6" xl="5" className="mt-xl-5"/>
                        </MDBRow>
                    </MDBContainer>
                </MDBMask>
                <Modal isOpen={this.state.modal9} onToggle={this.toggle(9)} />
            </header>
        );
    }
}

export default Index;

