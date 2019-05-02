export const validate = values => {
    const errors = {};
    if (!values.mobile) {
        errors.mobile = "Обязательно для заполнения";
    }
    if (!values.username) {
        errors.username = "Обязательно для заполнения";
    } else if (values.username.length > 15) {
        errors.username = "Должно быть меньше 15 символов";
    }
    if (!values.lastname) {
        errors.lastname = "Обязательно для заполнения";
    } else if (values.lastname.length > 15) {
        errors.lastname = "Должно быть меньше 15 символов";
    }

    if (!values.email) {
        errors.email = "обязательно для заполнения";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Неправильный email адрес";
    }
    if (!values.age) {
        errors.age = "обязательно для заполнения";
    } else if (isNaN(Number(values.age))) {
        errors.age = "Должно быть число";
    } else if (Number(values.age) < 18) {
        errors.age =
            "Извините, но запись на прием может осуществляться лицами старше 18 лет";
    }
    return errors;
};