import React from "react";
import "./HomePage.css";
import imagyyy from "../../2.jpg";
import { Card, CardContent } from "@material-ui/core";
import { Button } from "@material-ui/core";

function HomePage() {
    return (
        <div className='conty'>
            <div className='homyyy'>
                <Button
                    variant='contained'
                    className='nice'
                    color='primary'
                    style={{ backgroundColor: "#2E527D" }}
                    href='/login'
                >
                    Log In
                </Button>

                <Button
                    variant='contained'
                    color='primary'
                    className='nice'
                    style={{ backgroundColor: "#2E527D" }}
                    href='/signup'
                >
                    Sign In
                </Button>
            </div>

            <div className='headings'>
                <div className='logo'>
                    <a href='/'>
                        <img src='' alt='LOGO' className='LOGO-IMAGE' />
                    </a>
                </div>
                <h3>Play And Win</h3>
                <h5>Lineyyyyyyyyyyyyyyyyyyyyyyyy</h5>
            </div>
            <div className='heady-body'>
                <div className='lefty'>
                    <Card className='leftyy-1'>
                        <CardContent>
                            <div className='leftyy-2'>
                                <h2>How To Play</h2>
                                <p>
                                    Videobolt uses cookies to improve your
                                    website preferences like “Remember me”. To
                                    learn more about cookies and Videobolt’s
                                    experience on our platform and track your
                                    use of cookies in order to process your
                                    usage of them,read our Privacy Policy here.
                                    By hitting Accept you agree to Videobolt’s
                                    personal data and personalize and improve
                                    your experience using the platform.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className='righty'>
                    <img src={imagyyy} alt='' className='righty-image' />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
