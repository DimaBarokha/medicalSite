import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {MDBIcon, MDBInput} from 'mdbreact'
import purple from "@material-ui/core/es/colors/purple";

const TextFields= () =>{
    return(
        <TextField
            id="standard-uncontrolled"
            label="Uncontrolled"
            defaultValue="foo"
            margin="normal"
        />
    )
}


export default TextFields;