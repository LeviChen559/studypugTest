import React, {FC, useEffect, useState, useRef, MouseEvent} from "react";
import Layout from "@/layout/funnel";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import  i18nextConfig from "../../../../next-i18next.config";
import {getI18nPaths} from "../../../../getI18nPaths";
import ProcessBar from "@/components/processBar";
import {Container, Typography} from "@mui/material";
import {useRouter} from "next/router";
import FunnelPage1 from "@/sections/funnelPage1";
import {iPriceData} from "@/types";
import {signIn, useSession, getSession, signOut} from "next-auth/react";
import {useTheme} from "@/context/ThemeContext";
import {handlePayment} from "@/pages/api/handleSignUpApi";
import {iCreditCard, iPriceCard} from "@/types";
import {useSignUp} from "@/context/ThemeContext";
import {getCookieValue} from "@/utils/handleCookie";
import useMediaQuery from "@mui/material/useMediaQuery";
import {globalTheme} from "@/theme";
import {BounceAnimation} from "@/styles/commonStyle";
import {FlexContainerNoResponsive} from "@/styles/commonStyle";
import LottieAnimation from "@/components/lottieAnimation";
import SubscriptJson from "@/assets/animations/subscription.json";
import {IErrorInfo} from "@/sections/funnelPage1";
import {thisYear} from "@/utils/validation";

interface Props {
    studentPriceData: Array<iPriceData>;
    parentPriceData: Array<iPriceData>;
    locale: string;
}

const Payment: FC<Props> = ({studentPriceData, parentPriceData, locale}) => {
    const mobile = useMediaQuery(globalTheme.breakpoints.down("sm"));
    const {data: session, status} = useSession();
    const {t, i18n} = useTranslation(["funnel"]);
    const [page, setPage] = useState<string>("signup");
    const router = useRouter();
    const {asPath} = useRouter();
    const {theme} = useTheme();
    const [selectId, setSelectId] = useState<number>(0);
    const {signUpData, setSignUpData} = useSignUp();
    const [apiKey, setApiKey] = useState<string>("");
    const [subscription, setSubscription] = useState<boolean>(false);
    const [passChecked, setPassChecked] = useState<boolean>(true);
    const [cardInfo, setCardInfo] = useState<iCreditCard>({
        name: "",
        cardNumber: "",
        expiry: "",
        cvc: "",
    });
    const [errorInfo, setErrorInfo] = useState<IErrorInfo>({
        plan: "",
        cardName: "",
        cardNumber: "",
        expiry: "",
        cvc: "",
        axiosError: "",
    });
    const choosePlan_Parent = parentPriceData.find((item: iPriceData) => item.id === selectId)?.plan_key;
    const choosePlan_student = studentPriceData.find((item: iPriceData) => item.id === selectId)?.plan_key;
    const bill = {
        full_name: cardInfo.name,
        cc_number: cardInfo.cardNumber.replace(/-/g, ""),
        expire_month: cardInfo.expiry.slice(0, 2),
        expire_year: 20 + cardInfo.expiry.slice(2, 4),
        card_sec_val: cardInfo.cvc.slice(0, 4),
        region: locale,
        billing_plan_key: asPath.includes("student") ? choosePlan_student : choosePlan_Parent,
        extra_user_limit: 0,
    };
    useEffect(() => {
        if (asPath.includes("signup")) {
            setPage("signup");
        } else {
            setPage("payment");
        }
        const apiKeyValue = getCookieValue("apiKey");
        if (apiKeyValue) {
            setApiKey(apiKeyValue);
        }
        switch(true){
            case selectId > 0:
                setErrorInfo({...errorInfo, plan: ""});
                setPassChecked(true);
                break;
            case bill.full_name !== null:
                setErrorInfo({...errorInfo, cardName: ""});
                setPassChecked(true);
                break;
            case bill.cc_number.length === 15 || bill.cc_number.length === 16:
                setErrorInfo({...errorInfo, cardName: ""});
                setPassChecked(true);
                break;
            case bill.expire_month.length === 2:
                setErrorInfo({...errorInfo, expiry: ""});
                setPassChecked(true);
                break;
            case bill.expire_year.length === 4 :
                setErrorInfo({...errorInfo, expiry: ""});   
                setPassChecked(true);
                break;
            case Number(bill.expire_year) > thisYear:
                setErrorInfo({...errorInfo, expiry: ""});
                setPassChecked(true);
                break;
            case bill.card_sec_val.length > 2:
                setErrorInfo({...errorInfo, cvc: ""});
                setPassChecked(true);
                break;


        }
    }, [selectId, bill.full_name, bill.cc_number, bill.expire_month, bill.expire_year, bill.card_sec_val]);

    const handlePrevious = () => {
        if (page === "signup") {
            router.back();
        } else {
            signOut({callbackUrl: `/signup/${locale}?role=${theme}`});
        }
    };
    const subscribed = () => {
        setErrorInfo({...errorInfo, cardNumber: "", cardName: "", expiry: "", cvc: "", plan: "",axiosError:""});
        setSubscription(true);
        scrollTo(0, 0);
        setTimeout(() => {
            router.push(`https://studypug.com/${theme}s/${locale}`);
        }, 2500);
    };
    const handleNext = async (event: MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (selectId < 1) {
            setErrorInfo({...errorInfo, plan: "Please select a plan."});
            setPassChecked(false);
        } else if (bill.full_name === null) {
            setErrorInfo({...errorInfo, cardName: "Please input your card name."});
            setPassChecked(false);
        } else if (bill.cc_number.length < 15 || bill.cc_number.length > 16) {
            setErrorInfo({...errorInfo, cardNumber: "Please check your card number."});
            setPassChecked(false);
        } else if (bill.expire_month.length < 2) {
            setErrorInfo({...errorInfo, cardNumber: "Please check your card expiry."});
            setPassChecked(false);
        } else if (bill.expire_year.length < 2 || Number(bill.expire_year) < thisYear) {
            setErrorInfo({...errorInfo, cardNumber: "Please check your card expiry."});
            setPassChecked(false);
        } else if (bill.card_sec_val.length < 3) {
            setErrorInfo({...errorInfo, cardNumber: "Please check your card CVC."});
            setPassChecked(false);
        } else if (errorInfo.axiosError !== ""){
    
            setPassChecked(false);
        } 
        //pay with googleAuth/facebookAuth/appleAuth
         else if (session&&passChecked === true && session.idToken) {
            const res = await handlePayment(
                `${process.env.NEXT_PUBLIC_SP_API}billing/subscription`,
                bill,
                session.idToken,
            );
            // console.log("res", res);
            // console.log("payment", res.status);
            setErrorInfo({...errorInfo, axiosError: res.data});
            // subscribed();
        //pay with email
        } else if (passChecked === true && apiKey && session?.idToken === undefined) {
            const res = await handlePayment(`${process.env.NEXT_PUBLIC_SP_API}billing/subscription`, bill, apiKey);
            // console.log("res", res);
            setErrorInfo({...errorInfo, axiosError: res.data});
            subscribed();
        }
    };
    
    if (status === "unauthenticated") {
        if (signUpData.email === "") {
            return <div>The page is not authenticated.Please go back to previous page.</div>;
        }
    }
    return (
        <Layout locale={locale}>
            <Container
                maxWidth="lg"
                style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: mobile ? 65 : 85}}>
                <ProcessBar setPage={setPage} page={page} handlePrevious={handlePrevious} />

                <div style={{opacity: subscription === false ? 1 : 0.1}}>
                    {asPath.includes("student") && (
                        <FunnelPage1
                            selectId={selectId}
                            setSelectId={setSelectId}
                            cardInfo={cardInfo}
                            setCardInfo={setCardInfo}
                            script={t("student.payment.content", {returnObjects: true})}
                            handleNext={handleNext}
                            priceData={studentPriceData}
                            errorInfo={errorInfo}
                        />
                    )}
                    {asPath.includes("parent") && (
                        <FunnelPage1
                            selectId={selectId}
                            setSelectId={setSelectId}
                            cardInfo={cardInfo}
                            setCardInfo={setCardInfo}
                            script={t("parent.payment.content", {returnObjects: true})}
                            handleNext={handleNext}
                            priceData={parentPriceData}
                            errorInfo={errorInfo}
                        />
                    )}
                </div>
                <FlexContainerNoResponsive
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                    height={400}
                    style={{
                        display: subscription === true ? "flex" : "none",
                        position: "absolute",
                        marginTop: mobile ? 50 : 100,
                    }}>
                    <BounceAnimation></BounceAnimation>
                    <LottieAnimation
                        animationUrl={SubscriptJson}
                        width={mobile ? 300 : 400}
                        height={mobile ? 300 : 400}
                    />
                    <Typography variant="h3"> You’re subscribed!</Typography>
                    <Typography variant="h4"> A confirmation email will be sent to your email shortly.</Typography>
                </FlexContainerNoResponsive>
            </Container>
        </Layout>
    );
};

export default Payment;

export const getStaticPaths = () => ({
    fallback: false,
    paths: getI18nPaths(),
});

//use getStaticProps to get the data from the json file depending on the locale
export const getStaticProps = async (context: any, req: any) => {
    const {locale} = context.params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_SP__PRICE_API}${locale}`);
    const priceData = await response.json();
    const parentPriceData = Object.values(priceData.parent.plans);
    const studentPriceData = Object.values(priceData.student.plans);
    // const session = await getSession(context);

    return {
        props: {
            locale,
            parentPriceData,
            studentPriceData,
            ...(await serverSideTranslations(context?.params?.locale, ["funnel"],  i18nextConfig)),
            // Set cache control headers
            headers: {
                "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
            },
        },
    };
};
