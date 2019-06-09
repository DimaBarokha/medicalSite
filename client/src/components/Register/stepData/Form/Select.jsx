import React from 'react';
import '@material/react-select/dist/select.css';
import {Select} from 'antd';
const {Option} = Select;



function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}
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
                <Select
                    showSearch
                    style={{width: "100%"}}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {serviceNames.map(this.renderServices)}
                </Select>
            </>
        );
    }
}