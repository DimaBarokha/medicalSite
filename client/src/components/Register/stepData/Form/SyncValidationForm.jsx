import React from "react";
import {Field, reduxForm} from "redux-form";
import {MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";
import DatePick from "./DatePicker/TimePicker";
import {validate} from "./validation";


const warn = values => {
    const warnings = {};
    if (values.age < 19) {
        warnings.age = "Hmm, you seem a bit young...";
    }
    if (!values.complaints) {
        warnings.complaints = "Желательно заполнить ваши жалобу, можно максимально кратко, чтоб доктору знать с чем он бдует иметь дело";
    }
    if (!/^[а-яё]+$/i.test(values.username)) {
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
            ((error && (
                    <span className="error_message">{`Поле ${label} ${error}`}</span>
                )) ||
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
                        <Field
                            name="date"
                            icon="user"
                            type="email"
                            id="form3"
                            component={DatePick}
                        />
                        <Field
                            name="email"
                            type="email"
                            icon="envelope"
                            label="Ваш email*"
                            component={renderField}
                        />
                        <Field
                            name="age"
                            type="number"
                            icon="baby-carriage"
                            label="Возраст пациента*"
                            component={renderField}
                        />
                        <Field
                            name="complaints"
                            icon="medkit"
                            type="textarea"
                            component={renderField}
                            label="Краткое описание жалоб*"
                        />
                        <Field
                            name="doctor"
                            type="text"
                            icon="user-md"
                            label="Ваш доктор"
                            component={renderField}
                        />
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
