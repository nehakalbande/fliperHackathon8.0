import { Card, CardContent, CardHeader, Divider } from "@material-ui/core";
import React from "react";
import "./mobilecard.css";

const MobileCard = () => {
    return (
        <Card className='mobile-card'>
            <CardHeader
                className='card-header'
                subheader='Venue'
                action={
                    <div className='date-time'>
                        <h5>DATE</h5>
                        <h5>Time</h5>
                    </div>
                }
            />
            <Divider />
            <CardContent className='cardcontent'>
                <h5>
                    <h3>RR</h3> Rajastan Royals
                </h5>
                <h5 className='time-remain'>TIME REMAINING</h5>
                <h5>
                    <h3>MI</h3> INDIANS
                </h5>
            </CardContent>
        </Card>
    );
};

export default MobileCard;
