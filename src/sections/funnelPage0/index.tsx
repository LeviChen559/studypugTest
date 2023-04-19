import React, {FC, useState, ChangeEvent, useEffect,MouseEvent} from "react";
import SignUPCard from "@/components/signUpCard";
import { Typography} from "@mui/material";
import {
    BackgroundImage,
    ColorBlock,
    OrganicImage,
    FunnelPageContainer,
    FunnelPageWrapper,
    FlexContainer,
    PictureContainer,
    TextContainerDesktop,
    TextContainerTablet,
    ImageWrapper,
    TrustWrapper,
    StudentImage,
} from "./style";
import {FlexContainerNoResponsive} from "@/styles/commonStyle";
import parents from "@/assets/parents.png";
import Image from "next/image";
import {useSignUp} from "@/context/ThemeContext";
import {useRouter} from "next/router";
import studentWithPug from "@/assets/studentWithPug.svg";
import {handleEmailApi} from "@/pages/api/handleSignUpApi";
import {iEmailSignUpFormat} from "@/types";
import {emailIsValid, passwordIsValid} from "@/utils/validation";
import {iSignUpError} from "@/types";
import { setCookie,expires } from "@/utils/handleCookie";
import {iSignupContent} from "@/types";
import useMediaQuery from "@mui/material/useMediaQuery";
import globalTheme from "@/theme";
interface Props {
    locale: string;
    googleAuth: () => void;
    handleNext: () => void;
    facebookAuth: () => void;
    appleAuth: () => void;
    script: iSignupContent;
}

const FunnelPage0: FC<Props> = ({googleAuth, handleNext, facebookAuth, appleAuth, script}) => {
    const {asPath, query} = useRouter();
    const primaryRole = query.role;
    const {signUpData, setSignUpData} = useSignUp();
    const [checked, setChecked] = useState(true);
    const [role, setRole] = useState(primaryRole);
    const [isSignUpError, setIsSignUpError] = useState<boolean>(false);
    const tablet =useMediaQuery(globalTheme.breakpoints.down("md"));
    let date = new Date();

    const [isError, setIsError] = useState<iSignUpError>({
        email: false,
        emailErrorInfo: "",
        password: false,
        passwordErrorInfo: "",
    });
    const [data, setData] = useState<iEmailSignUpFormat>({
        email: "",
        password: "",
        primary_role:
            role === "student" ? "student" : "parent" ? (role === "student" ? "student" : "parent") : "parent",
        timezone_offset: date.getTimezoneOffset(),
    });

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setData({...data, email: event.target.value});
    };

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setData({...data, password: event.target.value});
    };

    useEffect(() => {
        setRole(primaryRole);
        if (signUpData.email !== null) {
            setData({...data, email: signUpData.email});
        }
    }, [signUpData, primaryRole]);

    const handleChange = () => {
        setChecked(!checked);
    };

    const emailSignUp = (event:MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        switch (true) {
            case data.email == "":
                setIsError({...isError, email: true, emailErrorInfo: "Please enter your email"});
                break;
            case !emailIsValid(data.email):
                setIsError({...isError, email: true, emailErrorInfo: "please check your email format"});

                break;
            case !emailIsValid(data.email) && passwordIsValid(data.password):
                setIsError({
                    ...isError,
                    email: true,
                    password: false,
                    emailErrorInfo: "please check your email format",
                    passwordErrorInfo: "",
                });
                break;
            case emailIsValid(data.email) && !passwordIsValid(data.password):
                setIsError({
                    ...isError,
                    email: false,
                    emailErrorInfo: "",
                    password: true,
                    passwordErrorInfo: "Your password must be between 6 and 40 characters long and contain no spaces.",
                });
                break;
            case !passwordIsValid(data.password):
                setIsError({
                    ...isError,
                    password: true,
                    passwordErrorInfo: "Your password must be between 6 and 40 characters long and contain no spaces.",
                });
                break;
            default:
                setSignUpData({...signUpData, email: data.email});
                setIsError({...isError, email: false, emailErrorInfo: "", password: false, passwordErrorInfo: ""});
                if (checked === true) {
                    emailAuth();
                }
        }
    };

    const emailAuth = async () => {
       
        const res = await handleEmailApi(`${process.env.NEXT_PUBLIC_SP_API}/api/user`, data);
        console.log("emailAuth", res);

        if (typeof res !== 'string' &&res?.status !== 200 && isError.email===false) {
            setIsSignUpError(true);
            setIsError({...isError, email: true, emailErrorInfo: res?.text });
        } else {
            setCookie(typeof res !== 'string' &&res?.data.apikey, expires, "/");
            setIsSignUpError(false);
            handleNext();
        }
    };

    return (
        <FunnelPageContainer>
            <FunnelPageWrapper>
                <Typography variant="h2">{script.title}</Typography>
                <Typography variant="h6" >{script.subtitle}</Typography>
                <FlexContainer style={{marginBottom:16}}>
                        <SignUPCard
                            error={isError}
                            handleNext={emailSignUp}
                            password={data.password}
                            email={data.email === "" ? signUpData.email : data.email}
                            onChangeEmail={onChangeEmail}
                            onChangePassword={onChangePassword}
                            checked={checked}
                            onChange={handleChange}
                            googleAuth={googleAuth}
                            facebookAuth={facebookAuth}
                            appleAuth={appleAuth}
                        />
                    <PictureContainer>
                        <TextContainerTablet>
                            <Typography>{script.testimonial.opinion}</Typography>
                            <Typography>{script.testimonial.nameAndLocation}</Typography>
                        </TextContainerTablet>
                        {/* <ImageWrapper>
                        </ImageWrapper> */}
                            {asPath.includes("student") && (
                                <StudentImage>
                                    <Image src={studentWithPug} alt="students" fill />
                                </StudentImage>
                            )}
                            {asPath.includes("parent") && (
                                <OrganicImage>
                                    <Image
                                        src={parents}
                                        fill
                                        alt="parents"
                                        style={{transform: "scaleX(-1)",top:24}}
                                        priority
                                    />
                                </OrganicImage>
                            )}
                        <TextContainerDesktop>
                            <Typography variant="body2">{script.testimonial.opinion}</Typography>
                            <Typography  variant="body2">{script.testimonial.nameAndLocation}</Typography>
                        </TextContainerDesktop>
                    </PictureContainer>
                </FlexContainer>
                {/* <Typography > {script.trust.title}</Typography>
                <TrustWrapper>
                    <Typography>{script.trust.subtitle[0]}</Typography>
                    <Typography>{script.trust.subtitle[1]}</Typography>
                    <Typography>{script.trust.subtitle[2]}</Typography>
                </TrustWrapper> */}
            </FunnelPageWrapper>
            <ColorBlock background={asPath.includes("parent") ? "#ECC889" : "#F3E5DA"} />
            <BackgroundImage background={asPath.includes("parent") ? "#F3E5DA" : "#A2C8F3"} />
        </FunnelPageContainer>
    );
};

export default FunnelPage0;
