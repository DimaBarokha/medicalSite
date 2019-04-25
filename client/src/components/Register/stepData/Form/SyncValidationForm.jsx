import React from "react";
import {Field, reduxForm} from "redux-form";
import {MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";
import DatePick from './TimePicker'
const validate = values => {
    const errors = {};
    if (!values.username && !values.lastname) {
        errors.username = "Обязательно для заполнения";
        errors.lastname = "Обязательно для заполнения"
    } else if (values.username.length > 15 && values.lastname.length > 15) {
        errors.username = "Должно быть меньше 15 символов";
        errors.lastname = "Должно быть меньше 15 символов";
    }
  /*  if (!values.lastname) {
        errors.lastname = "Обязательно для заполнения"
    } else if (values.username.length > 15) {
        errors.username = "Должно быть меньше 15 символов";
        errors.lastname = "Должно быть меньше 15 символов";
    }*/

    if (!values.email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }
    if (!values.age) {
        errors.age = "Required";
    } else if (isNaN(Number(values.age))) {
        errors.age = "Must be a number";
    } else if (Number(values.age) < 18) {
        errors.age = "Sorry, you must be at least 18 years old";
    }
    return errors;
};

const warn = values => {
    const warnings = {};
    if (values.age < 19) {
        warnings.age = "Hmm, you seem a bit young...";
    }
    if ((!/^[а-яё]+$/i.test(values.username))) {
        warnings.username = "Указывайте пожалуйста на русском ваши данные";
    }
    return warnings;
};

const renderField = ({
                         input,
                         icon,
                         label,
                         id,
                         type,
                         meta: {touched, error, warning}
                     }) => (
    <div>
        <div>
            <MDBInput
                {...input}
                id={id}
                label={label}
                type={type}
                className="form-control"
                icon={icon}
            />
            {touched &&
            ((error && <span className="error_message">{`Поле ${label} ${error}`}</span>) ||
                (warning && <span className="warning-color">{warning}</span>))}
        </div>
    </div>
);

const SyncValidationForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <MDBContainer>
            <MDBRow className="flex-center">
                <MDBCol md="6">
                    <form onSubmit={handleSubmit} className="md-form">
                        <Field
                            name="username"
                            icon="user"
                            type="text"
                            id="form1"
                            component={renderField}
                            label="Ваше имя*"
                        />
                        <Field
                            name="lastname"
                            icon="user"
                            type="text"
                            id="form2"
                            component={renderField}
                            label="Ваша фамилия*"
                        />
                        <Field name="date"  icon="user" type="email" id="form3" component={DatePick}/>
                        <Field name="mobile" type="email" component={renderField}/>
                        <Field name="age" type="number" component={renderField}/>
                        <div>
                            <button type="submit" disabled={submitting}>
                                Submit
                            </button>
                            <button
                                type="button"
                                disabled={pristine || submitting}
                                onClick={reset}
                            >
                                Clear Values
                            </button>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default reduxForm({
    form: "syncValidation", // a unique identifier for this form
    validate, // <--- validation function given to redux-form
    warn // <--- warning function given to redux-form
})(SyncValidationForm);
