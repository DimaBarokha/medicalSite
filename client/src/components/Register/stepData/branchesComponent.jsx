import React from 'react'
import {MDBCol} from "mdbreact";

const BranchComponent = (props) => {
    return(
        <MDBCol md="4">
            <div className="branch">
                <input type="text" value={props.data.name}  readOnly/>
            </div>
        </MDBCol>
    )
}
export default BranchComponent;