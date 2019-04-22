import React from "react";
import style from "./index.module.css";
import * as calendar from "./datePickerModules";
import classnames from "classnames";

export default class Index extends React.Component {
    static defaultProps = {
        date: new Date(),
        years: [2019, 2020],
        monthNames: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ],
        weekDaysNames: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
        onChange: Function.prototype
    };
    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null
    };

    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);
        console.log(date);
        this.setState({date});
    };
    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);
        console.log(date);
        this.setState({date});
    };
    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;
        const date = new Date(year, month);
        console.log(date);
        this.setState({date});
    };
    handleDayClick = date => {
        console.log(date);
        this.setState({selectedDate: date});
        this.props.onChange(date);
    };

    render() {
        const {years, monthNames, weekDaysNames} = this.props;
        const monthData = calendar.getMonthData(this.year, this.month);
        const {currentDate, selectedDate} = this.state;

        return (
            <div className={style.calendar}>
                <div className={style.header}>
                    <button
                        className={style.btn}
                        onClick={this.handlePrevMonthButtonClick}
                    >
                        {"<"}
                    </button>
                    <select
                        ref={element => (this.monthSelect = element)}
                        value={this.month}
                        onChange={this.handleSelectChange}
                    >
                        {monthNames.map((name, index) => (
                            <option key={name} value={index}>
                                {name}
                            </option>
                        ))}
                    </select>
                    <select
                        ref={element => (this.yearSelect = element)}
                        value={this.year}
                        onChange={this.handleSelectChange}
                    >
                        {years.map(year => (
                            <option value={year} key={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                    <button
                        className={style.btn}
                        onClick={this.handleNextMonthButtonClick}
                    >
                        {">"}
                    </button>
                </div>
                <table>
                    <thead>
                    <tr>
                        {weekDaysNames.map(day => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {monthData.map((week, index) => (
                        <tr key={index}>
                            {week.map((date, index) =>
                                date ? (
                                    <td
                                        className={classnames(style.day, {
                                            [style.today]: calendar.areEqual(date, currentDate),
                                            [style.selected]: calendar.areEqual(date, selectedDate)
                                        })}
                                        key={index}
                                        onClick={() => this.handleDayClick(date)}
                                    >
                                        {date.getDate()}
                                    </td>
                                ) : (
                                    <td key={index}/>
                                )
                            )}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
