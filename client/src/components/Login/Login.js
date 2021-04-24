import { Button, IconButton, TextField, Divider } from "@material-ui/core";
import { Facebook, Lock, PersonOutline, Phone } from "@material-ui/icons";
import { React } from "react";
import "./login.css";
import { Card, CardContent } from "@material-ui/core";

const Login = () => {
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
                    <div>
                        <Button
                            variant='contained'
                            fullWidth
                            style={{ backgroundColor: "#2E527D" }}
                        >
                            Sign In
                        </Button>
                    </div>
                    <br />

                    <Divider />

                    <div className='oauth-btn'>
                        <Button
                            variant='contained'
                            startIcon={<Phone />}
                            style={{ backgroundColor: "#2E527D" }}
                            // onChange={this.handleInput}
                        >
                            Phone
                        </Button>
                        <Button
                            variant='contained'
                            startIcon={<Facebook />}
                            style={{ backgroundColor: "#2E527D" }}
                        >
                            Facebook
                        </Button>
                    </div>
                    <div className='linnee'>
                        <p>
                            Don't have an account? &nbsp;
                            <a href='/signup' className='signy'>
                                Sign Up
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
