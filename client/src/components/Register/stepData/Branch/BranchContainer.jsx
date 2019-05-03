import React from 'react'
import BranchesComponent from './branchesComponent'
import {connect} from 'react-redux'
import {setDoctorBranch} from "../../../store/Branch/actions";

class BranchContainer extends React.Component {
    render() {
        return (<BranchesComponent name="Терапивтическое отделение" setDoctorBranch={this.props.setDoctorBranch} />);
    }
}

const mapStateToProps = state => {
    return {
        doctorBranch: state.pick.doctorBranch
    }
}

const mapDispatchToProps = {
    setDoctorBranch: setDoctorBranch,
}
export default connect(mapStateToProps, mapDispatchToProps)(BranchContainer);