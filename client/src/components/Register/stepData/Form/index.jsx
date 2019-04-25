import React from "react";
import SyncValidationForm from './SyncValidationForm'
import showResults from "./showResults";

const Form = () => {
    return (
        <SyncValidationForm onSubmit={showResults}/>
    );
}
export default Form;