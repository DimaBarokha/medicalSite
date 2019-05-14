import React from 'react'
import branchesComponent from './branchesComponent'
import {connect} from 'react-redux'

class BranchContainer extends React.Component {
    render() {
        return (<branchesComponent/>);
    }
}
const mapStateToProps=()=>{
    return{}
}

const mapDispatchToProps = ()=>{
    return{}
}
export default connect(mapStateToProps,);