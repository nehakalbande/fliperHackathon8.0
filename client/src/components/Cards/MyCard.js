import {
    Box,
    Card,
    CardActions,
    CardContent,
    Divider,
} from "@material-ui/core";
import React from "react";
import "./mycard.css";

const MyCard = () => {
    return (
        <Card className='mycard'>
            <CardContent className='mycard-inner'>
                <div className='teams-name'>
                    <h2>Rajastan Royals {"\t"} RR</h2>
                    <h4>vs</h4>
                    <h2>Rajastan Royals {"\t"} RR</h2>
                </div>
                <Divider orientation='vertical' flexItem />
                <div className='main-time-div'>
                    <div>
                        <h4>Time remaining</h4>
                        <Box className='time-box'>19:22:33</Box>
                    </div>
                    <div>
                        <h4>22 Sep 2024</h4>
                        <h4>08:00 IST</h4>
                    </div>
                </div>
            </CardContent>
            <CardActions
                disableSpacing
                style={{
                    textAlign: "end",
                    alignContent: "center",
                    justifyContent: "flex-end   ",
                }}
            >
                Venue
            </CardActions>
        </Card>
    );
};

export default MyCard;
