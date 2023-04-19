import {FlexContainerNoResponsive} from "@/styles/commonStyle";
import {Typography} from "@mui/material";
import React, {FC, ChangeEvent, useState,MouseEvent} from "react";
import {SignUpCardContainer, Condition, InputContainer} from "./style";
import FunctionButton from "../functionButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import InputFormControl from "../inputFormControl";
import {iSignUpError,iEmailSignUp} from "@/types";

interface Props {
    handleNext: (event:MouseEvent<HTMLFormElement>) =>  void;
    onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    email: string;
    password: string;
    error: iSignUpError;
    checked: boolean;
    onChange: () => void;
    googleAuth:()=>void;
    facebookAuth:()=>void;
    appleAuth:()=>void;
}


const SignUPCard: FC<Props> = ({
    handleNext,
    email,
    password,
    onChangeEmail,
    onChangePassword,
    error,
    checked,
    onChange,
    googleAuth,
    facebookAuth,
    appleAuth
}) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const Info1 = [{id: 0, width: "100%", title: "Email", placeholder: "123@studypug.com"}];

    const labelStyle = {
        color: `${error.password == true ? "red" : "#424242"}`,
        marginTop: "20px",
        fontSize: 14,
        "@media (max-width:768px)": {
            marginTop: "10px",
        },
        "@media (max-width:450px)": {
            marginTop: "0px",
        },
    };
    const inputStyle = {
        height: 45,
        width: "100%",
        background: `${error.password == true ? "pink" : "#ffffff"}`,
        paddingTop: "15px",
        'input:-webkit-autofill': {
            'WebkitBoxShadow': '0 0 0 100px white inset !important', // To remove autofill background color
          },
          'input:-webkit-autofill::first-line': {
            color: '#000 !important', // To style autofill text color
          },
        "@media (max-width:450px)": {
            marginTop: "-12.5px",
        },
    };
    return (
        <form onSubmit={handleNext}>
        <SignUpCardContainer>
            <Typography variant="body1" sx={{margin: 0, fontWeight: 700}}>
                Join using
            </Typography>
            <FlexContainerNoResponsive justifyContent="space-evenly" width="100%">
                <FunctionButton buttonText="" width={80} height={35} background="#05A7CF" onClick={googleAuth} boxShadowColor="#0486A6">
                    <GoogleIcon sx={{color: "#f3f6f4"}} />
                </FunctionButton>
                <FunctionButton buttonText="" width={80} height={35} background="#05A7CF" onClick={appleAuth} boxShadowColor="#0486A6">
                    <AppleIcon sx={{color: "#f3f6f4"}} />
                </FunctionButton>
                <FunctionButton buttonText="" width={80} height={35} background="#05A7CF" onClick={facebookAuth} boxShadowColor="#0486A6">
                    <FacebookIcon sx={{color: "#f3f6f4"}} />
                </FunctionButton>
            </FlexContainerNoResponsive>
            <Typography variant="body1" sx={{margin: 0, fontWeight: 700}}>
                or
            </Typography>
            <FlexContainerNoResponsive flexDirection="column" width="90%" justifyContent="space-between">
               
                {Info1.map((input) => {
                    return (
                        <InputFormControl
                            props={input}
                            key={input.id}
                            error={error.email}
                            onChange={onChangeEmail}
                            errorInfo={error.emailErrorInfo}
                            value={email}
                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$"
                            inputMode="email"
                        />
                    );
                })}
                <InputContainer>
                    <FormControl sx={{width: "100%"}}>
                        <InputLabel htmlFor="component-outlined" shrink sx={labelStyle}>
                            Password
                        </InputLabel>
                        <OutlinedInput
                           autoFocus
                            required
                            error={error.password}
                            id="component-outlined2"
                            placeholder="#$%123"
                            sx={inputStyle}
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={onChangePassword}
                            inputProps={{pattern:"^.{6,40}$"}}
                            // startAdornment={<InputAdornment position="start"></InputAdornment>}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </InputContainer>
                <Typography color="red" variant="body2" sx={{width: "100%"}}>
                    {error.passwordErrorInfo}
                </Typography>
                
            </FlexContainerNoResponsive>
            <Condition>
                <FlexContainerNoResponsive >
                <Checkbox
                    sx={{"& .MuiSvgIcon-root": {fontSize: 28, color: "#05A7CF"}}}
                    checked={checked}
                    onChange={onChange}
                />
                <Typography variant="body1">I agree to the StudyPug Terms of Service.</Typography>
                </FlexContainerNoResponsive>
                {checked === false && (
                    <Typography variant="body1" color="red">
                        You must agree the terms.
                    </Typography>
                )}

            </Condition>
            <FunctionButton buttonText="Sign Up & Continue" width={275} height={55}  type="submit"/>
        </SignUpCardContainer>
        </form>
    );
};

export default SignUPCard;
