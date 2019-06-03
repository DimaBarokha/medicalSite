import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '@material/react-select/dist/select.css';
import Select, {Option} from '@material/react-select';

export default class SelectService extends React.Component {
    state = {service: 'Услуга'};

    render() {
        return (
            <Select
                className="select"
                label='Выберите Желаемую Услугу'
                value={this.state.service}
                onChange={(evt) => this.setState({service: evt.target.value})}
            >
                <Option value='pomsky'>Pomsky</Option>
                <Option value='goldenDoodle'>Golden Doodle</Option>
            </Select>
        );
    }
}