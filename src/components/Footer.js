import React from "react";
import '../style/main/footer.scss';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LockWhite from "../images/footer/lock-white.svg";
import Divider from '@material-ui/core/Divider';

function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
    <Grid id={"footer"}>
        <Grid
            container
            className={"footer-main"}
            alignContent={"center"}
        >
            <Grid>
                <Grid
                    container
                    direction={"row"}
                    className={"footer-small-screen-center"}
                >
                    <Typography
                        className={"footer-copyright"}
                    >
                        Copyright (c) {currentYear}
                    </Typography>
                    <Divider
                        orientation={"vertical"}
                        flexItem
                        className={"footer-divider"}
                    />
                    <Typography
                        className={"footer-email-text"}
                    >
                        Clarifionsupport@clarifion.com
                    </Typography>
                </Grid>
            </Grid>
            <Grid>
                <Grid
                    container
                    direction={"row"}
                    className={"footer-margin-to-small-screen footer-small-screen-center"}
                >
                    <img
                        className={"footer-lock-image"}
                        src={LockWhite}
                        alt={"headerImage"}
                    />
                    <Typography
                        className={"footer-copyright"}
                    >
                        Secure 256-bit SSL encryption.
                    </Typography>

                </Grid>
            </Grid>
        </Grid>
    </Grid>
    );
}

export default Footer;
