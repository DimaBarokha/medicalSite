import React from 'react'
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol} from "mdbreact";

const CardComponent = (props) =>
    <MDBCol>
        <MDBCard
            className="staff__card"
            style={{width: "20rem", margin: "10px 0"}}
        >
            <MDBCardImage
                className="img-fluid staff__card-image"
                src={props.item.src}
                waves
            />
            <MDBCardBody>
                <MDBCardTitle>{props.item.title}</MDBCardTitle>
                <p className="staff__card-post">{props.item.position}</p>
                <MDBCardText>
                    {props.item.description}
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>


export default CardComponent