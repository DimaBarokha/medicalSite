import React from 'react'
import {MDBCol} from "mdbreact";

const BranchComponent = ({data, cbClick,pickDoctor}) => {
    const handlerClick = () => {
       cbClick();
       pickDoctor(data);
    }
    return(
        <MDBCol md="4">
            <div className="branch">
                <input type="text" value={data.name}  onClick={handlerClick} readOnly/>
            </div>
        </MDBCol>
    )
}
export default BranchComponent;