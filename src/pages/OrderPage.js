import React, {useState} from "react";
import '../style/main/order-page.scss';
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Typography from "@material-ui/core/Typography";
import McAfee from "../images/order-page/mcafee.svg";
import Norton from "../images/order-page/norton.svg";
import Clarifion from "../images/order-page/clarifion.svg";
import Thick from "../images/order-page/steps/thick.svg";
import ProfileImage from "../images/order-page/comments/profile-image.svg";
import RatingStars from "../images/order-page/comments/rating-stars.svg";
import VerifyUser from "../images/order-page/comments/verify-user.svg";
import SatisfactionGuarantee from "../images/order-page/satisfation-guarantee.svg";
import ClarifionSatisfaction from "../images/order-page/clarifion-satisfaction.svg";
import BlueTick from "../images/order-page/blue-tick.svg";
import ClarifionAirIonizer from "../images/order-page/clarifion-air-ionizer.svg";
import EllipsePercent from "../images/order-page/ellipse-percent.svg";
import ArrowRightWhite from "../images/order-page/arrow-right-white.svg";
import Amex from "../images/order-page/banks/amex.svg";
import ApplePay from "../images/order-page/banks/apple-pay.svg";
import GPay from "../images/order-page/banks/g-pay.svg";
import MasterCard from "../images/order-page/banks/master-card.svg";
import PayPal from "../images/order-page/banks/paypal.svg";
import ShopPay from "../images/order-page/banks/shop-pay.svg";
import Visa from "../images/order-page/banks/visa.svg";
import LockGrey from "../images/order-page/lock-grey.svg";
import Divider from "@material-ui/core/Divider";
import RadioImage from "../images/order-page/radio.svg";
import Star from "../images/order-page/star.svg";



const renderSteps = (arraySteps: any = [], actualStep: number = 3) => {
    return (
        <Grid
            container
            direction={"row"}
            justifyContent={"space-between"}
            className={"order-page-step"}
        >
            {
                arraySteps.map((step, index) => {
                    return (
                        <Grid key={index}>
                           <Grid
                               container
                               className={"order-page-step-direction"}
                           >
                               <Grid
                                   alignItems={"center"}
                                   justifyContent={"center"}
                                   direction={"column"}
                                   container
                                   className={
                                       (index + 1) < actualStep
                                           ? "order-page-step-green"
                                           : (index + 1) === actualStep
                                               ? "order-page-step-blue"
                                               : "order-page-step-transparent"

                                   }
                               >
                                   {
                                       (index + 1) < actualStep
                                           ?  <img
                                               className={"order-page-step-thick-image"}
                                               src={Thick}
                                               alt={index}
                                           />
                                           :<Typography>
                                               {index + 1}
                                           </Typography>
                                   }
                               </Grid>
                               <Grid>
                                   <Typography className={"order-page-step-text"}>
                                       <span className={"order-page-step-text-small-screen-none"}>
                                           {"Step " + (index+1) + ": "}
                                       </span>
                                       {(index + 1) === actualStep ? <b>{step?.text}</b> : step?.text}
                                   </Typography>
                               </Grid>
                           </Grid>

                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

function OrderPage() {

    const [steps, setSteps] = useState([
        {
            text: "Cart Review",
        },
        {
            text: "Checkout",
        },
        {
            text: "Special Offer",
        },
        {
            text: "Confirmation",
        },
    ]);
    const actualStep = 3;
    return (
        <Grid>
            <Header/>
            <Grid id={"order-page"}>
                <Grid
                    container
                    direction={"row"}
                    justifyContent={"space-between"}
                    className={"order-page-images"}
                >
                    <Grid>
                        <img
                            className={"order-page-clarifion-image"}
                            src={Clarifion}
                            alt={"Clarifion"}
                        />
                    </Grid>
                    <Grid>
                        <Grid
                            container
                            direction={"row"}
                            alignItems={"center"}
                        >
                            <img
                                className={"order-page-mc-afee-image"}
                                src={McAfee}
                                alt={"McAfee"}
                            />
                            <img
                                className={"order-page-norton-image"}
                                src={Norton}
                                alt={"Norton"}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    className={"order-page-in-progress-text"}
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Typography className={"order-page-in-progress-text-wait"}>
                        Wait ! your order in progress.
                    </Typography>
                    <Typography className={"order-page-in-progress-text-lorem"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                    </Typography>
                </Grid>
                <Grid>
                    {renderSteps(steps, actualStep)}
                </Grid>
                <Grid
                    className={"order-page-main-container"}
                >
                    <Grid
                        className={"order-page-main-content-container"}
                    >
                        <Grid
                            item
                        >
                            <Grid
                                container
                                diretion={"column"}
                                className={"order-page-main-content-container-left-part"}
                            >
                                <img
                                    className={"order-page-main-content-container-clorifion-image"}
                                    src={ClarifionSatisfaction}
                                    alt={"Clarifion Satisfaction"}
                                />
                                {/*Comments*/}
                                <Grid
                                    className={"order-page-comments-section"}
                                >
                                    <Grid className={"order-page-comments-padding"}>
                                        <Grid
                                            container
                                            direction={"row"}
                                        >
                                            <img
                                                className={"order-page-comments-section-profile-image"}
                                                src={ProfileImage}
                                                alt={"Profile"}
                                            />
                                            <Grid
                                                style={{marginLeft: "13px"}}
                                            >
                                                <img
                                                    src={RatingStars}
                                                    alt={"Stars"}
                                                />
                                                <Grid
                                                    container
                                                    direction={"row"}
                                                    alignItems={"center"}
                                                >
                                                    <Typography
                                                        className={"order-page-comments-user-name"}
                                                    >
                                                        Ken T.
                                                    </Typography>
                                                    <img
                                                        className={"order-page-comments-verify-image"}
                                                        src={VerifyUser}
                                                        alt={"Verify user"}
                                                    />
                                                    <Typography
                                                        className={"order-page-comments-verify-user"}
                                                    >
                                                        Verified Customer
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Typography className={"order-page-comments-section-comments-text"}>
                                            “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon.
                                            When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could
                                            breathe better. Wonderful.”
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                        >
                            <Grid
                                container
                                direction={"column"}
                                className={"order-page-main-content-container-right-part"}
                            >
                                <Grid>
                                    <Typography
                                        className={"order-page-main-content-container-right-part-text"}
                                    >
                                        <span
                                            className={"order-page-main-content-container-right-part-text-blue"}
                                        >
                                             {" ONE TIME ONLY "}
                                        </span>
                                        special price for 6 extra Clarifion for only
                                        <span
                                            className={"order-page-main-content-container-right-part-text-blue"}
                                        >
                                            {" $14 each "}
                                        </span>
                                        ($84.00 total!)
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <img
                                        className={"order-page-main-content-container-right-part-clorifion-image-small-width-large-height"}
                                        src={ClarifionSatisfaction}
                                        alt={"Clarifion Satisfaction"}
                                    />
                                </Grid>
                                <Grid
                                    container
                                    className={"order-page-main-content-container-right-container-price"}
                                >
                                    <Grid>
                                        <img
                                            className={"order-page-main-content-container-right-container-price-clarifion-air-ionizer-image"}
                                            src={ClarifionAirIonizer}
                                            alt={"Clarifion Air Ionizer"}
                                        />
                                    </Grid>
                                    <Grid
                                        className={"container-price"}
                                    >
                                        <Grid
                                            container
                                            justifyContent={"space-between"}
                                            direction={"row"}
                                            className={"container-price-image-and-price"}
                                            alignItems={"center"}
                                        >
                                            <Typography
                                                className={"container-price-clarifion-air-style"}
                                            >
                                                Clarifion Air Ionizer
                                            </Typography>
                                            <Grid>
                                                <Grid
                                                    container
                                                    justifyContent={"center"}
                                                    alignItems={"center"}
                                                    direction={"row"}
                                                >
                                                    <Typography className={"container-price-clarifion-air-price-without-discount"}>
                                                        $180
                                                    </Typography>
                                                    <Typography  className={"container-price-clarifion-air-price-with-discount"}>
                                                        $84
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            className={"container-price-stars"}
                                        >
                                            <img
                                                className={'container-price-stars-size'}
                                                src={Star}
                                                alt={"Star"}
                                            />
                                            <img
                                                className={'container-price-stars-size'}
                                                src={Star}
                                                alt={"Star"}
                                            />
                                            <img
                                                className={'container-price-stars-size'}
                                                src={Star}
                                                alt={"Star"}
                                            />
                                            <img
                                                className={'container-price-stars-size'}
                                                src={Star}
                                                alt={"Star"}
                                            />
                                            <img
                                                className={'container-price-stars-size'}
                                                src={Star}
                                                alt={"Star"}
                                            />
                                        </Grid>
                                        <Grid
                                            container
                                            direction={"row"}
                                            className={"container-price-radio"}
                                        >
                                            <img
                                                src={RadioImage}
                                                alt={"RadioImage"}
                                                className={"container-price-radio-img-margin"}
                                            />
                                            <Typography
                                                className={"container-price-12-left-stock"}
                                            >
                                                12 left in Stock
                                            </Typography>
                                        </Grid>
                                        <Typography
                                            className={"container-price-simply-plug"}
                                        >
                                            Simply plug a Clarifion into any standard outlet and <br/>
                                            replace bulky, expensive air purifiers with a simple.
                                        </Typography>
                                    </Grid>
                                    <Typography
                                        className={"container-price-simply-plug-small-screen"}
                                    >
                                        Simply plug a Clarifion into any standard outlet and
                                        replace bulky, expensive air purifiers with a simple.
                                    </Typography>
                                </Grid>
                                <Grid
                                    container
                                >
                                    <Grid
                                        container
                                        direction={"row"}
                                        style={{marginBottom: "12px"}}
                                        alignItems={"center"}
                                    >
                                        <img
                                            src={BlueTick}
                                            alt={"Blue tick"}
                                            className={"order-page-main-content-container-right-part-blue-tick"}
                                        />
                                        <Typography
                                            className={"order-page-main-content-container-right-part-tick-text"}
                                        >
                                            Negative Ion Technology may <b>help with allergens</b>
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        container
                                        direction={"row"}
                                        style={{marginBottom: "12px"}}
                                        alignItems={"center"}
                                    >
                                        <img
                                            src={BlueTick}
                                            alt={"Blue tick"}
                                            className={"order-page-main-content-container-right-part-blue-tick"}
                                        />
                                        <Typography
                                            className={"order-page-main-content-container-right-part-tick-text"}
                                        >
                                            Designed for <b>air rejuvenation</b>
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        container
                                        direction={"row"}
                                        style={{marginBottom: "30px"}}
                                        alignItems={"center"}
                                    >
                                        <img
                                            src={BlueTick}
                                            alt={"Blue tick"}
                                            className={"order-page-main-content-container-right-part-blue-tick"}
                                        />
                                        <Typography
                                            className={"order-page-main-content-container-right-part-tick-text"}
                                        >
                                            <b>Perfect for every room</b> in all types of places.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    className={"order-page-main-content-container-right-part-save-53"}
                                    alignItems={"center"}
                                    alignContent={"center"}
                                    direction={"row"}
                                    container
                                >
                                    <img
                                        className={"order-page-main-content-container-right-part-save-53-blue-ellipse"}
                                        src={EllipsePercent}
                                        alt={"Ellipse Percent"}
                                    />
                                    <Grid>
                                        <Typography className={"order-page-main-content-container-right-part-save-53-text"}>
                                            Save
                                            <span className={"order-page-main-content-container-right-part-save-53-blue-text"}>
                                                {" 53% "}
                                            </span>
                                            and get
                                            <span className={"order-page-main-content-container-right-part-save-53-blue-text"}>
                                                {" 6 extra Clarifision "}<br className={"display-br"}/>
                                            </span>
                                            for only
                                            <span className={"order-page-main-content-container-right-part-save-53-blue-text"}>
                                                {" $14 Each"}
                                            </span>
                                            .
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    className={"order-page-main-content-container-right-part-button-container"}
                                    container
                                    justifyContent={"center"}
                                >
                                    <Grid
                                        className={"grid-button"}
                                    >
                                        <Grid
                                            container
                                            direction={"row"}
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            className={"grid-button-container"}
                                        >
                                            <Typography className={"text-style"}>
                                                Yes - Claim my discount
                                            </Typography>
                                            <img
                                                className={"arrow-style"}
                                                src={ArrowRightWhite}
                                                alt={"Arrow Right White"}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction={"row"}
                                        className={"information"}
                                    >
                                        <Typography
                                            className={"text-style"}
                                        >
                                            Free shipping
                                        </Typography>
                                        <Divider
                                            orientation={"vertical"}
                                            flexItem
                                            className={"divider"}
                                        />
                                        <Grid>
                                            <Grid
                                                className={"text-image-container"}
                                                container
                                                justifyContent={"center"}
                                            >
                                                <Grid>
                                                    <img
                                                        src={LockGrey}
                                                        alt={"Lock Grey"}
                                                        className={"lock-size"}
                                                    />
                                                </Grid>
                                               <Grid>
                                                   <Typography
                                                       className={"text-style"}
                                                       style={{marginTop: "1px"}}
                                                   >
                                                       Secure 256-bit SSL encryption.
                                                   </Typography>
                                               </Grid>
                                            </Grid>
                                        </Grid>
                                        <Divider
                                            orientation={"vertical"}
                                            flexItem
                                            className={"divider-display"}
                                        />
                                        <Divider
                                            orientation={"horizontal"}
                                            flexItem
                                            className={"divider-display-horizontal"}
                                        />
                                        <Grid
                                            className={"banks"}
                                        >
                                            <img
                                                className={"img-margin"}
                                                src={Visa}
                                                alt={"Visa"}
                                            />
                                            <img className={"img-margin"}
                                                 src={ShopPay}
                                                 alt={"ShopPay"}
                                            />
                                            <img
                                                className={"img-margin"}
                                                src={PayPal}
                                                alt={"PayPal"}
                                            />
                                            <img
                                                className={"img-margin"}
                                                src={MasterCard}
                                                alt={"MasterCard"}
                                            />
                                            <img
                                                className={"img-margin"}
                                                src={GPay}
                                                alt={"GPay"}
                                            />
                                            <img
                                                className={"img-margin"}
                                                src={ApplePay}
                                                alt={"ApplePay"}
                                            />
                                            <img
                                                className={"img-margin"}
                                                src={Amex}
                                                alt={"Amex"}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid>
                                        <Typography
                                            className={"no-thanks-style"}
                                        >
                                            No thanks, I don’t want this.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    className={"order-page-guarantee-satisfaction"}
                                    container
                                    alignItems={"center"}
                                >
                                    <img
                                        className={"order-page-guarantee-satisfaction-img"}
                                        src={SatisfactionGuarantee}
                                        alt={"Satisfaction Guarantee"}
                                    />
                                    <Grid>
                                        <Typography
                                            className={"order-page-guarantee-satisfaction-text"}
                                        >
                                            If you are not completely thrilled with your Clarifion - We
                                            have a 30 day satisfaction guarantee. Please refer to our
                                            return policy at the bottom of the page for more details.
                                            Happy Shopping!
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
    );
}

export default OrderPage;
