import React, { Component } from 'react';
import classNames from 'classnames';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { styles } from './authStyles';
import {withStyles} from "@material-ui/core/styles/index";

import './signinStyles.css';

class SignInForm extends Component {

    state = {
        showPassword : false,
    };

    handleChange = name => event => {
        this.props.updateSignInForm({ [name]: event.target.value });
    };

    handleCreateAction = () => {
        const { createGuestUser, formValues } = this.props;
        createGuestUser({
            email: "xxxx",
            firstName: "xxx",
            lastName: "xxx",
            password: "123" ,

        });
    };

    render() {
        const { classes, formValues } = this.props;

        return (
            <div className="sign-in-form">
                <Paper>
                    <form noValidate autoComplete="off">
                        <Grid container={12} xl={12} md={12} justify={'center'} alignContent={'center'}>
                            <Grid container xs={12} xl={7} md={8} spacing={24} >
                                <Grid item xs={6} justify={'center'} alignContent={'center'}>
                                    <div className={"sign-in-form-col"}>
                                        <Grid item xs={12} justify={'center'} alignContent={'center'}>
                                            <TextField
                                                id="firstName"
                                                label="First Name"
                                                className={classes.textField}
                                                value={formValues.firstname}
                                                onChange={this.handleChange('firstName')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={12} justify={'center'} alignContent={'center'}>
                                            <TextField
                                                id="lastName"
                                                label="Last Name"
                                                className={classes.textField}
                                                value={formValues.lastName}
                                                onChange={this.handleChange('lastName')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={12} justify={'center'} alignContent={'center'}>
                                            <TextField
                                                id="filled-adornment-password"
                                                className={classNames(classes.margin, classes.textField)}
                                                variant="filled"
                                                type={this.state.showPassword ? 'text' : 'password'}
                                                label="Password"
                                                value={""}
                                                onChange={this.handleChange('password')}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="Toggle password visibility"
                                                                onClick={this.handleClickShowPassword}
                                                            >
                                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="outlined-email-input"
                                                label="Email"
                                                className={classes.textField}
                                                type="email"
                                                name="email"
                                                autoComplete="email"
                                                margin="normal"
                                                variant="outlined"
                                                value={formValues.email}
                                                onChange={this.handleChange('email')}
                                            />
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className={"sign-in-form-col col-right-padding"}>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormLabel component="legend">Gender</FormLabel>
                                            <RadioGroup
                                                aria-label="Gender"
                                                name="gender1"
                                                className={classes.group}
                                                value={this.state.value}
                                                onChange={this.handleChange}
                                            >
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button onClick={this.handleCreateAction} variant="contained" size="medium" color="primary" className={"sign-in-button"}>
                                        Create User
                                    </Button>
                                    <div className="errorMessage">{ formValues.errors.message }</div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>

            </div>
        );
    }
}

export default withStyles(styles)(SignInForm);