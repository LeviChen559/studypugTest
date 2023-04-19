import React, {FC, useState, MouseEvent} from "react";
import {Container, Typography} from "@mui/material";
import {
    BackgroundImageP2,
    SpecialCard,
    PaymentContainer,
    PriceCardsContainer,
    SecureText,
    ButtonContainer,
    SecureImg,
    OrganicShape,
} from "./style";
import {FunnelPageContainer, FunnelPageWrapper} from "@/sections/funnelPage0/style";
import {FlexContainerNoResponsive, FlexContainer} from "@/styles/commonStyle";
import Image from "next/image";
import FunctionButton from "@/components/functionButton";
import PriceCard, {iPriceCard} from "@/components/priceCard";
import CreditCardInfo from "@/components/creditCardInfo";
import SummaryBox from "@/components/summaryBox";
import {useRouter} from "next/router";
import secure from "@/assets/secure.png";
import {iCreditCard, iTestimonial} from "@/types";
import Testimonial from "@/components/testimonial";
import {useSignUp} from "@/context/ThemeContext";

interface page1Props {
    handleNext: (event: MouseEvent<HTMLFormElement>) => void;
    priceData: any;
    script: {
        title: string;
        subtitle: string;
        testimonial: iTestimonial;
        creditCard: {
            title: string;
            notice: [{text1: string; text2: string; text3: string}, {text1: string; text2: string; text3: string}];
        };
        summary: {
            skip1: string;
            skip2: string;
            skipLink: string;
        };
        paymentMethod: string;
    };
    cardInfo: iCreditCard;
    setCardInfo: (cardInFo: iCreditCard) => void;
    setSelectId: (id: number) => void;
    selectId: number;
    errorInfo: IErrorInfo;
}
export interface IErrorInfo {
    plan: string;
    cardName: string;
    cardNumber: string;
    expiry: string;
    cvc: string;
    axiosError: string;
}
const CardProps = [
    {
        id: 0,
        discount_percent: 0,
        string_key: "default",
        regular_amount: 0,
        billing_amount: 0,
        monthly_amount: 0,
        trial_period_length: 0,
        clicked: false,
    },
];

const FunnelPage1: FC<page1Props> = ({
    handleNext,
    priceData,
    script,
    setCardInfo,
    cardInfo,
    selectId,
    setSelectId,
    errorInfo,
}) => {
    const [checked, setChecked] = useState<boolean>(false);
    const {asPath} = useRouter();
    const {signUpData} = useSignUp();
    const handleChange = (id: number) => {
        setSelectId(id);
        setChecked(true);
    };

    const SevenDaysTrial = priceData.find((plan: iPriceCard) => plan.trial_period_length === 7);

    return (
        <FunnelPageContainer>
            <FunnelPageWrapper>
                <Typography variant="h2">{script.title}</Typography>
                <Typography variant="h6" sx={{width: "80vw", textAlign: "center"}}>
                    {script.subtitle}
                </Typography>
                <PriceCardsContainer>
                    {asPath.includes("parent") ? (
                        <SpecialCard background="#ECC889">
                            <Image
                                src="https://www.studypug.com/wp-content/uploads/graphic-family.png"
                                alt=""
                                width={33}
                                height={25}
                            />
                            <FlexContainerNoResponsive flexDirection="column" alignItems="flex-start">
                                <Typography variant="h6" sx={{margin: 0}}>
                                    One Price
                                </Typography>
                                <Typography variant="body2" sx={{margin: 0}}>
                                    for up to 5 children
                                </Typography>
                            </FlexContainerNoResponsive>
                        </SpecialCard>
                    ) : (
                        <Testimonial script={script.testimonial} />
                        )}
                    {priceData.map((card: iPriceCard) => {
                        return (
                            <div key={card.id}>
                                {card.id > 0 && (
                                    <PriceCard
                                    key={card.id}
                                    props={card}
                                    checked={selectId === card.id ? checked : false}
                                    onChange={() => handleChange(card.id)}
                                    />
                                    )}
                            </div>
                        );
                    })}
                </PriceCardsContainer>
                <form onSubmit={handleNext}>
                    <PaymentContainer>
                        <CreditCardInfo
                            script={script.creditCard}
                            notice1={selectId === SevenDaysTrial.id || selectId == 0 ? "block" : "none"}
                            notice2={selectId && selectId !== SevenDaysTrial.id ? "block" : "none"}
                            cardInfo={cardInfo}
                            setCardInfo={setCardInfo}
                        />

                        {selectId == 0 &&
                            CardProps.map((card) => {
                                return (
                                    <div key={card.id}>
                                        {<SummaryBox key={card.id} props={card} script={script.summary} />}
                                    </div>
                                );
                            })}
                        {priceData.map((card: iPriceCard) => {
                            return (
                                <div key={card.id}>
                                    {selectId === card.id && (
                                        <SummaryBox key={card.id} props={card} script={script.summary} />
                                        )}
                                </div>
                            );
                        })}
                    </PaymentContainer>
                    <ButtonContainer>
                        <SecureText>
                            <Typography>🔒 {script.paymentMethod}</Typography>
                        </SecureText>
                        {selectId == 0 && <FunctionButton buttonText={"Pay $0.00 Now"} type="submit" width={175} />}
                        {priceData.map((card: iPriceCard) => {
                            return (
                                <div key={card.id}>
                                    {selectId === card.id && (
                                        <FunctionButton
                                        buttonText={"Pay" + " $" + `${card.billing_amount}` + "  " + " Now"}
                                        width={175}
                                        type="submit"
                                        />
                                        )}
                                </div>
                            );
                        })}
                        <SecureImg>
                            <Image src={secure} alt="secureImage" fill/>
                        </SecureImg>
                    </ButtonContainer>
                    <div style={{textAlign:"center"}}>
                        {errorInfo.plan && (
                            <Typography color="red" variant="body1">
                                {errorInfo.plan}
                            </Typography>
                        )}
                        {errorInfo.cardName && (
                            <Typography color="red" variant="body1">
                                {errorInfo.cardName}
                            </Typography>
                        )}
                        {errorInfo.cardNumber && (
                            <Typography color="red" variant="body1">
                                {errorInfo.cardNumber}
                            </Typography>
                        )}
                        {errorInfo.expiry && (
                            <Typography color="red" variant="body1">
                                {errorInfo.expiry}
                            </Typography>
                        )}
                        {errorInfo.cvc && (
                            <Typography color="red" variant="body1">
                                {errorInfo.cvc}
                            </Typography>
                        )}
                        {errorInfo.axiosError && (
                            <Typography color="red" variant="body1">
                                {errorInfo.axiosError}
                            </Typography>
                        )}
                        </div>
                </form>
            <OrganicShape background={asPath.includes("parent") ? "#ECC889" : "#F3E5DA"}/>
            </FunnelPageWrapper>
            <BackgroundImageP2 background={asPath.includes("parent") ? "#F3E5DA" : "#A2C8F3"} />
           
        </FunnelPageContainer>
    );
};

export default FunnelPage1;
