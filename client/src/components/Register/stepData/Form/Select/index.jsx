import React from 'react';
import ReactDOM from 'react-dom';
import {withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class NativeSelects extends React.Component {
    static props = {
        timeData: [
            "10:30",
            '11:20'
        ]
    };
    state = {
        age: '',
        name: 'hai',
        labelWidth: 0,
    };

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render() {
        const {classes, timeData} = this.props;

        return (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                <Select
                    native
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                >
                    {timeData.map(data => (
                        <option value={data}>
                            {data}
                        </option>
                    ))}
                </Select>
            </FormControl>
        );
    }
}

export default withStyles(styles)(NativeSelects);