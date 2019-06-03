import React from "react";
import {Field, reduxForm} from "redux-form";
import {MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow} from "mdbreact";
import {validate} from "./validation";
import InputMask from "react-input-mask";
import MaterialInput from "@material-ui/core/Input";
import axios from "axios";
import {DatePicker} from 'antd';
import {TimePicker} from 'antd';
import locale from 'antd/lib/date-picker/locale/ru_RU';
import 'moment/locale/ru'
import 'antd/lib/date-picker/style/index.css'
import 'antd/lib/time-picker/style/index.css'
import 'antd/lib/input/style/index.css'
import SelectService from '../Form/Select'
import moment from "moment";

const warn = values => {
    const warnings = {};
    if (values.age < 19) {
        warnings.age = "Hmm, you seem a bit young...";
    }
    if (!values.complaints) {
        warnings.complaints =
            "Желательно заполнить ваши жалобу, можно максимально кратко, чтоб доктору знать с чем он бдует иметь дело";
    }
    if (!/^[а-яё]+$/i.test(values.username)) {
        warnings.username = "Указывайте пожалуйста на русском ваши данные";
    }
    return warnings;
};
const renderMask = ({
                        input,
                        icon,
                        label,
                        id,
                        type,
                        meta: {touched, error, warning}
                    }) => (
    <div>
        <div className="d-flex">
            <MDBIcon icon="phone" className="icon"/>
            <InputMask mask="+375 (99) 999-99-99" disabled={false} {...input}>
                {inputProps => (
                    <MaterialInput
                        name="mobile"
                        {...inputProps}
                        type="tel"
                        fullWidth
                        placeholder="Ваш номер телефона"
                    />
                )}
            </InputMask>
            {touched &&
            ((error && (
                    <span className="error_message">{`Поле ${label} ${error}`}</span>
                )) ||
                (warning && <span className="warning-color">{warning}</span>))}
        </div>
    </div>
);
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


class ValidationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            lastname: "",
            date: null,
            time: null,
            email: "",
            mobile: "",
            age: "",
            complaints: "",
            doctor: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.submitEmail = this.submitEmail.bind(this);
    }

    handleChangeDate(date) {
        //console.log(date, dateString);
        this.setState({date:date.format('MMMM Do YYYY')}, () => console.log(this.state.date));
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
        console.log(e.target.value)
    };
    handleChangeTime = time => {
        this.setState({time:time.format('LTS')}, () => console.log(this.state.time));
    };
    DatePick = () => (
        <DatePicker  placeholder="Дата приема"
                    onChange={this.handleChangeDate}/>
    );
    TimePick = () => (
        <TimePicker locale={locale} placeholder="Время приема" onChange={this.handleChangeTime} format={'HH:mm'}/>
    );

    async submitEmail() {
        const {
            username,
            lastname,
            date,
            time,
            email,
            mobile,
            age,
            complaints,
            doctor
        } = this.state;

        const form1 = await axios.post("/api/patient", {
            username,
            lastname,
            date,
            time,
            email,
            mobile,
            age,
            complaints,
            doctor
        });

    }

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;
        return (
            <MDBContainer>
                <MDBRow className="flex-center">
                    <MDBCol md="6">
                        <form onSubmit={handleSubmit(this.submitEmail)} className="">
                            <Field
                                name="username"
                                icon="user"
                                type="text"
                                id="form1"
                                component={renderField}
                                label="Ваше имя*"
                                onChange={this.handleChange}
                            />
                            <Field
                                name="lastname"
                                icon="user"
                                type="text"
                                id="form2"
                                component={renderField}
                                label="Ваша фамилия*"
                                onChange={this.handleChange}
                            />

                            <Field
                                name="email"
                                type="email"
                                icon="envelope"
                                label="Ваш email*"
                                component={renderField}
                                onChange={this.handleChange}
                            />
                            <Field
                                name="mobile"
                                type="tel"
                                icon="user-md"
                                label="Ваш телефон"
                                component={renderMask}
                                onChange={this.handleChange}
                            />
                            <Field
                                name="age"
                                type="number"
                                icon="baby-carriage"
                                label="Возраст пациента*"
                                component={renderField}
                                onChange={this.handleChange}
                            />
                            <Field
                                name="complaints"
                                icon="medkit"
                                type="textarea"
                                component={renderField}
                                label="Краткое описание жалоб*"
                                onChange={this.handleChange}
                            />
                            <span>
                                    Ваши данные для приема
                                </span>
                            <div className="">

                                <Field
                                    name="date"
                                    type="text"
                                    id="form3"
                                    component={this.DatePick}
                                />
                                <Field
                                    name="time"
                                    type="text"
                                    id="form4"
                                    component={this.TimePick}
                                />
                            </div>
                            <Field
                                name="date"
                                type="text"
                                id="form3"
                                component={SelectService}
                            />
                            <Field
                                name="doctor"
                                type="text"
                                icon="user-md"
                                label="Ваш доктор"
                                component={renderField}
                                onChange={this.handleChange}
                            />
                            <div>
                                <button type="submit" disabled={submitting} className="btn btn-primary">
                                    Отправить ваши данные
                                </button>
                                <button
                                    type="button"
                                    disabled={pristine || submitting}
                                    onClick={reset}
                                >
                                    Очистить
                                </button>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        )
    }
}

export default reduxForm({
    form: "ValidationForm", // a unique identifier for this form
    validate, // <--- validation function given to redux-form
    warn // <--- warning function given to redux-form
})(ValidationForm);
