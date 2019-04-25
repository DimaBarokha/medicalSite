import React, {useState} from "react";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import {MDBIcon} from "mdbreact";
import {DatePicker, MuiPickersUtilsProvider} from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";

class LocalizedUtils extends DateFnsUtils {
    getDatePickerHeaderText(date) {
        return format(date, "d MMM yyyy", {locale: this.locale});
    }
}

function DateFnsLocalizationExample() {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <MuiPickersUtilsProvider utils={LocalizedUtils} locale={ruLocale}>
            <div className="md-form">
                <div className="d-flex">
                <MDBIcon far icon="calendar-alt" />
                <DatePicker
                    clearable
                    helperText="Дата вашего приема"
                    value={selectedDate}
                    onChange={handleDateChange}
                    clearLabel="очистить"
                    cancelLabel="Отмена"
                    minDate={new Date("2019-04-01")}
                    maxDate={new Date("2019-06-01")}
                />
                </div>
            </div>
        </MuiPickersUtilsProvider>
    );
}

export default DateFnsLocalizationExample;
