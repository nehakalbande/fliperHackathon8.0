import { Button, IconButton, TextField } from "@material-ui/core";
import { Lock, PersonOutline } from "@material-ui/icons";
import React from "react";
import "./login.css";

function Login() {
    return (
        <div className='sign-up-root'>
            <div className='left'>left</div>
            <div className='Sign-up-form'>
                <form className='formed-class'>
                    <div className='input-ico-div'>
                        <IconButton disabled className='icons'>
                            <PersonOutline />
                        </IconButton>
                        <TextField
                            label='Username'
                            type='email'
                            fullWidth
                            required
                        />
                    </div>
                    <div className='input-ico-div'>
                        <IconButton disabled className='icons'>
                            <Lock />
                        </IconButton>
                        <TextField
                            label='Password'
                            fullWidth
                            required
                            type='password'
                        />
                    </div>

                    <Button variant='contained' fullWidth>
                        Sign In
                    </Button>
                    <div className='oauth-btn'>
                        <Button variant='contained'>Google</Button>
                        <Button variant='contained'>Facebook</Button>
                    </div>

                    <div className='linnee'>
                        <p>
                            Don't have an account?
                            <a href='/signup'> Sign Up</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
