import { AppBar, Button, Toolbar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const MyAppBar = () => {
    return (
        <div style={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar style={{ justifyContent: "space-between" }}>
                    <img src='' alt='web logo' className='logo' />
                    <div>
                        
                            <Link to='/about'><Button color='secondary' variant='contained'>About Us </Button> </Link>
                            
                            <Link to='/help'> <Button color='inherit' varient='contained'>Help </Button></Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default MyAppBar;
