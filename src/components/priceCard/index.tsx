import {FlexContainerNoResponsive} from "@/styles/commonStyle";
import {Typography} from "@mui/material";
import React, {FC} from "react";
import {PriceCardContainer, SecondLayer, Discount, FirstLayer, DiscountMobile} from "./style";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

interface Props {
    props: iPriceCard;
    checked: boolean;
    onChange: () => void;
}

export interface iPriceCard {
    id: number;
    discount_percent: string;
    string_key: string;
    regular_amount: number;
    billing_amount: number;
    monthly_amount: string;
    clicked: boolean;
    trial_period_length: number;
    plan_key: string;
}

const PriceCard: FC<Props> = ({props, checked, onChange}) => {
    return (
        <PriceCardContainer
            onClick={onChange}
            background={
                props.id === 351||props.id === 164 ? "#A776C8" : "#ffffff" ? (props.id === 352||props.id === 165 ? "#4AAF92" : "#ffffff") : "#ffffff"
            }
            id={props.id.toString()}>
            {(props.id !==350&&props.id!==163 ) && (
                <FirstLayer>
                    <Typography variant="body2" color="textSecondary" sx={{margin: 0}}>
                        {props.id == 351 ? "POPULAR" : "SAVE MORE"}
                    </Typography>
                    <Discount>
                        <Typography variant="body2" color="textSecondary" sx={{margin: 0}}>
                            {props.discount_percent}% off
                        </Typography>
                    </Discount>
                </FirstLayer>
            )}
            <SecondLayer>
                {(props.id !== 350 || 163) && (
                    <DiscountMobile>
                        <Typography variant="body2" color="textSecondary" sx={{margin: 0}}>
                            {props.discount_percent}% off
                        </Typography>
                    </DiscountMobile>
                )}
                <Checkbox
                    icon={<RadioButtonUncheckedIcon sx={{color: "#b4b4b4"}} fontSize="large" />}
                    checkedIcon={<CheckCircleOutlineIcon fontSize="large" />}
                    checked={checked}
                    onChange={onChange}
                />
                <FlexContainerNoResponsive flexDirection="column" alignItems="flex-start">
                    <Typography variant="body2" sx={{margin: 0}}>
                        {props.string_key.replace(/_/g, " ")}
                    </Typography>
                    <FlexContainerNoResponsive height={32}>
                        {props.id > 1 && (
                            <Typography
                                variant="h6"
                                sx={{
                                    margin: 0,
                                    color: "#b4b4b4",
                                    textDecoration: "line-through",
                                    textDecorationColor: "red",
                                }}>
                                ${props.regular_amount}
                            </Typography>
                        )}
                        <Typography variant="h6" sx={{margin: "0 0 0 8px"}}>
                            ${props.billing_amount}
                        </Typography>
                    </FlexContainerNoResponsive>
                    <Typography variant="body2" sx={{margin: 0}}>
                        ${props.monthly_amount} / mo
                    </Typography>
                </FlexContainerNoResponsive>
            </SecondLayer>
        </PriceCardContainer>
    );
};

export default PriceCard;
