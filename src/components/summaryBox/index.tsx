import {FlexContainerNoResponsive} from "@/styles/commonStyle";
import {Typography} from "@mui/material";
import React, {FC} from "react";
import {SummaryContainer, SummaryWrapper, Skipper} from "./style";
import Link from "next/link";

interface Props {
    props: iSummaryBox;
    script: {
        skip1: string;
        skip2: string;
        skipLink: string;
    };
}
interface iSummaryBox {
    id: number;
    productName?: string;
    regular_amount: number;
    billing_amount?: number;
    saving?: number;
    payNow?: number;
    trial_period_length: number;
    string_key: string;
}

const SummaryBox: FC<Props> = ({props, script}) => {
    const startDate = new Date();

    // Set the number of days to add
    const daysToAdd = props.trial_period_length;
    // Calculate the date after adding the specified number of days
    const endDate = new Date(startDate);
    const payDaytimeStamp = endDate.setDate(startDate.getDate() + daysToAdd);
    const date = new Date(payDaytimeStamp);
    switch (date.getMonth() + 1) {
        case 1:
            var month = "Jan";
            break;
        case 2:
            var month = "Feb";
            break;
        case 3:
            var month = "Mar";
            break;
        case 4:
            var month = "Apr";
            break;
        case 5:
            var month = "May";
            break;
        case 6:
            var month = "Jun";
            break;
        case 7:
            var month = "Jul";
            break;
        case 8:
            var month = "Aug";
            break;
        case 9:
            var month = "Sep";
            break;
        case 10:
            var month = "Oct";
            break;
        case 11:
            var month = "Nov";
            break;
        default:
            var month = "Dec";
            break;
    }
    const payDay = "  " + date.getFullYear() + " - " + month + " - " + date.getDate();
    let saving = Number(props.regular_amount) - Number(props.billing_amount);
    const LinkStyle={
        textDecoration: "none",
        cursor: "pointer",
        color: "#05A7CF",
        marginLeft:8,
        "&:hover": {
            opacity: 0.8,
        }
    }
    return (
        <SummaryWrapper>
            <SummaryContainer>
                <Typography variant="h5">Order Summary</Typography>
                <FlexContainerNoResponsive justifyContent="space-between" height={25}>
                    <Typography sx={{margin: 0}}>
                        {props.string_key.replace(/_/g, " ")}
                    </Typography>
                    <Typography sx={{margin: 0}}>${props.regular_amount}</Typography>
                </FlexContainerNoResponsive>
                <FlexContainerNoResponsive justifyContent="space-between" height={25}>
                    <Typography sx={{margin: 0, color: "#36E0AF"}}>Savings</Typography>
                    <Typography sx={{margin: 0, color: "#36E0AF"}}>${saving}{saving===0&&".00"}</Typography>
                </FlexContainerNoResponsive>
                <FlexContainerNoResponsive justifyContent="space-between" height={25}>
                    <Typography style={{margin: 0, fontWeight: 700}}>Total</Typography>
                    <Typography  style={{margin: 0, fontWeight: 700, fontSize:16}}>${props.billing_amount}</Typography>
                </FlexContainerNoResponsive>
                <FlexContainerNoResponsive
                    flexDirection="column"
                    alignItems="space-between"
                    justifyContent="flex-end"
                    height={60}
                    width="100%">
                    {props.trial_period_length === 7 && (
                        <FlexContainerNoResponsive justifyContent="space-between" height={25} width="100%">
                            <Typography variant="body2" sx={{margin: 0}}>Pay on {payDay}</Typography>
                            <Typography variant="body2" sx={{margin: 0}}>${props.billing_amount}</Typography>
                        </FlexContainerNoResponsive>
                    )}
                    <FlexContainerNoResponsive justifyContent="space-between" height={25} width="100%">
                        <Typography sx={{margin: 0, fontWeight: 700}}>Pay Now </Typography>
                        {props.trial_period_length === 7 && (
                            <>
                                <Typography sx={{margin: 0}}>Free 7-day trial</Typography>
                                <Typography sx={{margin: 0, fontWeight: 700}}>$0.00</Typography>
                            </>
                        )}
                        {props.trial_period_length === 0 && (
                            <>
                                <Typography sx={{margin: 0}}></Typography>
                                <Typography sx={{margin: 0, fontWeight: 700}}>${props.billing_amount}</Typography>
                            </>
                        )}
                    </FlexContainerNoResponsive>
                </FlexContainerNoResponsive>
            </SummaryContainer>
            <Skipper>
                <Typography>{script.skip1}</Typography>
                <Link href={script.skipLink} style={LinkStyle}>
                    <Typography > {script.skip2}</Typography>
                </Link>
            </Skipper>
        </SummaryWrapper>
    );
};

export default SummaryBox;
