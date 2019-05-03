import React from 'react'
import {MDBCol} from "mdbreact";

class BranchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onBranchClick = this.onBranchClick.bind(this)
    }

    onBranchClick(event) {
        this.props.setDoctorBranch(event.target.value)
    }

    render() {
        return (

            <MDBCol md="4">
                <div className="branch">
                    <input type="text" value={this.props.name} onClick={this.onBranchClick} readOnly/>
                </div>
            </MDBCol>
        )
    }


}

export default BranchComponent;