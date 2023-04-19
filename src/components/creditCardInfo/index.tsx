import React, {FC, useState, ChangeEvent} from "react";
import {Typography} from "@mui/material";
import {CreditCardBox} from "./style";
import {FlexContainerNoResponsive} from "@/styles/commonStyle";
import InputFormControl from "@/components/inputFormControl";
import {cc_format} from "@/utils/validation";
import {iCreditCard} from "@/types";
import useMediaQuery from "@mui/material/useMediaQuery";
import {globalTheme} from "@/theme";
interface Props {
    script: {
        title: string;
        notice: [
            {
                text1: string;
                text2: string;
            },
            {
                text1: string;
                text2: string;
            },
        ];
    };
    notice1: string;
    notice2: string;
    cardInfo: iCreditCard;
    setCardInfo: (cardInFo: iCreditCard) => void;
}

const CreditCardInfo: FC<Props> = ({script, notice1, notice2, cardInfo, setCardInfo}) => {
    const desktop = useMediaQuery(globalTheme.breakpoints.down("lg"));

    const Info1 = [
        {id: 0, width: "100%", title: "Full Name", label: "Full Name", placeholder: "John Smith"},
        {id: 1, width: "100%", title: "Card Number", label: "Card Number", placeholder: "1234 1234 1234 1234"},
    ];
    const Info2 = [
        {id: 0, width: "35%", title: "Expiry", label: "Expiry", placeholder: "MMYY"},
        {id: 1, width: "35%", title: "CVC", label: "CVC", placeholder: "1234"},
    ];
    const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setCardInfo({...cardInfo, name: event.target.value});
    };
    const onChangeCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
        setCardInfo({...cardInfo, cardNumber: event.target.value});
    };
    const onChangeExpiry = (event: ChangeEvent<HTMLInputElement>) => {
        setCardInfo({...cardInfo, expiry: event.target.value});
    };
    const onChangeCVC = (event: ChangeEvent<HTMLInputElement>) => {
        setCardInfo({...cardInfo, cvc: event.target.value});
    };
    console.log("cardNumber", cc_format(cardInfo.cardNumber));
    console.log("cardNumber2", typeof cc_format(cardInfo.cardNumber));
    console.log("cardInfo.cardNumber.length", cardInfo.cardNumber.length)
    return (
        <CreditCardBox>
            <Typography variant="h5" sx={{width: "100%", textAlign: desktop ? "center" : "flex-start"}}>
                {script.title}
            </Typography>
            {Info1.map((input, index) => {
                return (
                    <InputFormControl
                        props={input}
                        key={input.id}
                        value={index === 0 ? cardInfo.name : cc_format(cardInfo.cardNumber)}
                        onChange={index === 0 ? onChangeName : onChangeCardNumber}
                        pattern={
                            index === 0
                                ? undefined
                                : cardInfo.cardNumber.length === 19
                                ? "\\d{4}-\\d{4}-\\d{4}-\\d{4}"
                                : "\\d{4}-\\d{6}-\\d{5}"
                        }
                        // inputMode={id===1 ?'numeric':"text"}
                    />
                );
            })}

            <FlexContainerNoResponsive justifyContent="space-between" width="100%">
                {Info2.map((input, id) => {
                    return (
                        <InputFormControl 
                            
                            props={input}
                            key={input.id}
                            onChange={id === 0 ? onChangeExpiry : onChangeCVC}
                            value={id === 0 ? cardInfo.expiry.slice(0, 4) : cardInfo.cvc.slice(0, 4)}
                            pattern={id===0?"\\d{4}":(cardInfo.cardNumber.length===19?"\\d{3}":"\\d{4}")}
                            // inputMode= 'numeric'
                        />
                    );
                })}
            </FlexContainerNoResponsive>
            <Typography sx={{display: notice1}}>
                <span style={{fontWeight: 700}}>{script.notice[0].text1}</span>
                {script.notice[0].text2}
            </Typography>
            <Typography sx={{display: notice2}}>
                <span style={{fontWeight: 700}}>{script.notice[1].text1}</span>
                {script.notice[1].text2}
            </Typography>
        </CreditCardBox>
    );
};

export default CreditCardInfo;
