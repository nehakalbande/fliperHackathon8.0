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
import { Card, CardContent } from "@material-ui/core";

// import { makeStyles } from "@material-ui/core/styles";

const SignUp = () => {
    return (
        <div className='sign-up-root'>
            <div className='left'>
                <Card className='left-1'>
                    <CardContent>
                        <div className='left-2'>
                            <h2>How To Play</h2>
                            <p>
                                Videobolt uses cookies to improve your website
                                preferences like “Remember me”. To learn more
                                about cookies and Videobolt’s experience on our
                                platform and track your use of cookies in order
                                to process your usage of them,read our Privacy
                                Policy here. By hitting Accept you agree to
                                Videobolt’s personal data and personalize and
                                improve your experience using the platform.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
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
                    <Button
                        variant='contained'
                        disableElevation
                        fullWidth
                        style={{ backgroundColor: "#2E527D" }}
                        // classes={{
                        //     root: classes.root,
                        // }}
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
