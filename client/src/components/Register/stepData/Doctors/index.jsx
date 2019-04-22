import React from "react";
import {MDBCol} from "mdbreact";

export const Doctor = ({cbCLick,data}) => {
    const handlerClick = () => {
        cbCLick()
    }
    return (
        <MDBCol md="4">
            <div className="doctor d-flex" onClick={handlerClick}>
                <h3 className="doctor__name">{data.name}</h3>
                <img src={data.src} alt=""/>
            </div>
        </MDBCol>
    );
};
