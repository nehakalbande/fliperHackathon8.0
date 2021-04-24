import { Box, Button, useMediaQuery } from "@material-ui/core";
import React from "react";
import MobileCard from "../Cards/MobileCard";
import MyCard from "../Cards/MyCard";
import "./Dashboard.css";

const DashBoard = () => {
    const matches = useMediaQuery("(max-width:680px)");
    return (
        <Box className='dashboard-root'>
            <h3>Upcoming Matches</h3>

            {matches ? <MobileCard /> : <MyCard />}
            <div className='dashh'>
                <Button variant='contained' color='primary'>
                    Primary
                </Button>
            </div>
        </Box>
    );
};

export default DashBoard;
