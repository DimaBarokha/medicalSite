import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BranchComponent from "./stepData/Branch/branchesComponent";
import branchesData from "./stepData/Branch/branchesData";
import {Doctor} from "./stepData/Doctors";
import doctorData from "./stepData/Doctors/doctorData";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import FormPage from "./stepData/Form";
import BranchContainer from "./stepData/Branch/BranchContainer";

const styles = theme => ({
    root: {
        width: "90%"
    },
    backButton: {
        marginRight: theme.spacing.unit
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit
    }
});

function getSteps() {
    return ([
        <p>Выбор отделения</p>,
        <p>Выбор врача</p>,
        <p>Заполнение данных</p>,
    ]);
}

class HorizontalLabelPositionBelowStepper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeStep: 0,
            values: [],
            branches: []
        };
        this.addValueToArray = this.addValueToArray.bind(this);
    }

    renderBranches = ({id_Branch, name}) =>
        <MDBCol md="4">
        <div className="branch">
            <input type="text" value={name}  key = {id_Branch} onClick={this.handleNext} readOnly/>

        </div>
    </MDBCol>
    getBranches = _ => {
        fetch('http://localhost:3001/branches')
            .then(response => response.json())
            .then(response =>this.setState({branches: response.data}))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getBranches();
    }

    addValueToArray(e) {
        const {textContent} = this.setState({
            values: e.target.value
        });
        const {values} = this.state;
        if (values.indexOf(textContent) === -1) {
            this.setState({
                values: [...this.state.values, textContent]
            });
        }
    }

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0
        });
    };

    getStepContent(stepIndex) {
        const {branches} = this.state
        switch (stepIndex) {
            case 0:
                return (
                    <>
                        <MDBRow>
                            {branches.map(this.renderBranches)}
                            {/*         {branchesData.map((data, index) => (
                                <BranchComponent
                                    data={data}
                                    key={index}
                                    pickDoctor={item => alert(item.name)}
                                    cbClick={this.handleNext}
                                />
                            ))}*/}
                        </MDBRow>
                    </>
                );
            case 1:
                return (
                    <>
                        <MDBContainer>
                            <MDBRow>
                                {doctorData.map(data => (
                                    <Doctor data={data} cbCLick={this.handleNext}/>
                                ))}
                            </MDBRow>
                        </MDBContainer>
                    </>
                );
            case 2:
                return (
                    <>
                        <FormPage/>
                    </>
                );
            case 3:
                return (
                    <>
                    </>
                );

            default:
                return "Unknown stepIndex";
        }
    }

    render() {
        const {classes} = this.props;
        const steps = getSteps();
        const {activeStep} = this.state;

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {this.state.activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                All steps completed
                            </Typography>
                        </div>
                    ) : (
                        <div>
                            <div className={classes.instructions}>
                                {this.getStepContent(activeStep)}
                            </div>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    className={classes.backButton}
                                >
                                    Назад
                                </Button>
                                {
                                    activeStep === 2 ?
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleNext}
                                        >
                                            Закончить
                                        </Button>
                                        :
                                        null
                                }

                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(HorizontalLabelPositionBelowStepper);
