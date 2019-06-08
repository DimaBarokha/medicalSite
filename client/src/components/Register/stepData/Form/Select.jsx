import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '@material/react-select/dist/select.css';
import Select, {Option} from '@material/react-select';

export default class SelectService extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            serviceNames: [], // варианты
            serviceName: '' //  значение
        };
    }

    getServices = _ => {
        fetch('http://localhost:3001/prices')
            .then(response => response.json())
            .then(response => this.setState({serviceNames: response.data}))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getServices();
    }

    renderServices = ({id_service, title}) =>
        <Option key={id_service} value={title}>{title}</Option>

    render() {
        const {serviceNames, serviceName} = this.state
        return (
            <>
                <p style={{marginTop: "20px",fontSize:"24px",marginBottom: "-20px"}}>Услуга:</p>
                <Select
                    className="select"
                    value={serviceName}
                    onChange={(evt) => this.setState({serviceName: evt.target.value}, () => console.log(this.state.serviceName))}
                >
                    {serviceNames.map(this.renderServices)}
                </Select>
            </>
        );
    }
}