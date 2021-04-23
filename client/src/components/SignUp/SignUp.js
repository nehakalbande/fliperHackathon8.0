import React from "react";
import { PersonOutline, Lock, Message } from "@material-ui/icons";
import {
    Button,
    Checkbox,
    FormControlLabel,
    IconButton,
    TextField,
} from "@material-ui/core";
import "./SignUp.css";

const SignUp = () => {
    return (
        <div className='sign-up-root'>
            <div className='left'>Left</div>
            <div className='Sign-up-form'>
                <form className='formed-class'>
                    <div className='input-ico-div'>
                        <IconButton disabled className='icons'>
                            <PersonOutline />
                        </IconButton>

                        <TextField
                            label='Username'
                            type='string'
                            required
                            fullWidth
                        />
                    </div>
                    <div className='input-ico-div'>
                        <IconButton disabled className='icons'>
                            <Lock />
                        </IconButton>
                        <TextField
                            label='Password'
                            type='password'
                            required
                            fullWidth
                        />
                    </div>
                    <div className='input-ico-div'>
                        <IconButton disabled className='icons'>
                            <Message />
                        </IconButton>
                        <TextField
                            label='Email'
                            type='email'
                            required
                            fullWidth
                        />
                    </div>
                    <div className='input-ico-div'>
                        <FormControlLabel
                            control={
                                <Checkbox value='remember' color='primary' />
                            }
                            label={
                                <p>
                                    I have accepted{" "}
                                    <a href='/tc'>Terms & conditions</a>
                                </p>
                            }
                        />
                    </div>
                    <Button variant='contained' disableElevation fullWidth>
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
