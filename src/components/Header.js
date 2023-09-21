import React, {useState} from "react";
import '../style/main/header.scss';
import Grid from "@material-ui/core/Grid";
import CheckMark from "../images/header/check-mark.svg";
import HeartLight from "../images/header/heart-light.svg";
import TruckLight from "../images/header/truck-light.svg";
import ArrowSync from "../images/header/arrow-sync.svg";
import ArrowForward from "../images/header/arrow-forward-white.svg";
import ArrowBack from "../images/header/arrow-back-white.svg";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

function switchTextAndImage(
    value: number = 0,
    satisfactionGuarantee,
    freeDelivery,
    happyCustomers,
    moneyBackGuarantee,
    setIndex = () => {
    },
    setTextChanged = () => {
    },
    setImageChanged = () => {
    },
) {
    let changedNumber = value;
    if (changedNumber > 3) {
        changedNumber = 0;
    } else if (changedNumber < 0) {
        changedNumber = 3;
    }
    switch (changedNumber) {
        case 0:
            setTextChanged(satisfactionGuarantee);
            setImageChanged(CheckMark);
            break;
        case 1:
            setTextChanged(freeDelivery);
            setImageChanged(TruckLight);
            break;
        case 2:
            setTextChanged(happyCustomers);
            setImageChanged(HeartLight);
            break;
        case 3:
            setTextChanged(moneyBackGuarantee);
            setImageChanged(ArrowSync);
            break;
        default:
            break;
    }
    setIndex(changedNumber);
}

const renderImageAndText = (text: string = "", image) => {
    return (
        <Grid
            container
            direction={"row"}
            alignItems={"center"}
        >
            <Grid>
                <img
                    className={"header-image"}
                    src={image}
                    alt={"headerImage"}
                />
            </Grid>
            <Grid>
                <Typography className={"header-text"}>
                    {text}
                </Typography>
            </Grid>
        </Grid>
    );
}

function Header() {
    const satisfactionGuarantee = "30-day satisfaction guarantee";
    const freeDelivery = "Free delivery on orders over $40.00";
    const happyCustomers = "50.000+ happy customers";
    const moneyBackGuarantee = "100% Money Back Guarantee";
    const [index, setIndex] = useState(0);
    const [textChanged, setTextChanged] = useState(satisfactionGuarantee);
    const [imageChanged, setImageChanged] = useState(CheckMark);
    return (
        <Grid id={"header"}>
            <Grid className={"header-style-large-screen"}>
                <Grid
                    item
                >
                    {renderImageAndText(satisfactionGuarantee, CheckMark)}
                </Grid>
                <Grid
                    item
                >
                    {renderImageAndText(freeDelivery, TruckLight)}
                </Grid>
                <Grid
                    item
                >
                    {renderImageAndText(happyCustomers, HeartLight)}
                </Grid>
                <Grid
                    item
                >
                    {renderImageAndText(moneyBackGuarantee, ArrowSync)}
                </Grid>
            </Grid>
            <Grid
                className={"header-style-small-screen"}
                container
                alignItems={"center"}
                justifyContent={"space-between"}>
                <Grid item>
                    <IconButton onClick={() => {
                        switchTextAndImage(
                            index - 1,
                            satisfactionGuarantee,
                            freeDelivery,
                            happyCustomers,
                            moneyBackGuarantee,
                            setIndex,
                            setTextChanged,
                            setImageChanged,
                        );
                    }}
                    >
                        <img alt={"ArrowBack"} src={ArrowBack} className={""}/>
                    </IconButton>
                </Grid>
                <Grid item>
                    {renderImageAndText(textChanged, imageChanged)}
                </Grid>
                <Grid item>
                    <IconButton onClick={() => {
                        switchTextAndImage(
                            index + 1,
                            satisfactionGuarantee,
                            freeDelivery,
                            happyCustomers,
                            moneyBackGuarantee,
                            setIndex,
                            setTextChanged,
                            setImageChanged,
                        );
                    }}
                    >
                        <img alt={"ArrowForward"} src={ArrowForward} className={""} />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Header;
