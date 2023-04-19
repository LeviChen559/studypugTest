import React, {useEffect, FC} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "../../components/logo";
import Flag from "../../components/flag";
import Typography from "@mui/material/Typography";
import {HeaderContainer, HeaderContainerLeft, HeaderContainerRight, HeaderWrapper} from "./style";
import RoleSwitcher from "../../components/roleSwitcher";
import flag_CA from "@/assets/flags/ca.png";
import flag_UK from "@/assets/flags/uk.png";
import flag_AU from "@/assets/flags/au.png";
import flag_US from "@/assets/flags/us.png";
import flag_SG from "@/assets/flags/sg.png";
import flag_NZ from "@/assets/flags/nz.png";
import flag_IE from "@/assets/flags/ie.png";
import flag_Latam from "@/assets/flags/latam.png";
import Container from "@mui/material/Container";
import {useRouter} from "next/router";
import {useTheme, useSignUp} from "@/context/ThemeContext";
import {colorTheme} from "@/theme";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Link from "next/link";
import {globalTheme} from "@/theme";
import {locales} from "@/const";
import {useSession} from "next-auth/react";

interface Props {
    locale: string;
}

const Header: FC<Props> = ({locale}) => {
    const mobile = useMediaQuery(globalTheme.breakpoints.down("sm"));
    const tablet = useMediaQuery(globalTheme.breakpoints.down("md"));
    const {data: session, status} = useSession();
    const {asPath} = useRouter();

    const {theme, setTheme} = useTheme();
    const {signUpData} = useSignUp();
    useEffect(() => {
        if (asPath.includes("parent")) {
            setTheme("parent");
        } else if (asPath.includes("student")) {
            setTheme("student");
        }
    }, [asPath]);

    const useLocale = locales.filter((locale: string) => {
        return asPath.includes(`/${locale}`);
    });
    console.log("session", session);
    console.log("signUpData", signUpData);
    return (
        <HeaderWrapper background="rgba(255,255,255,.9)">
            <Container maxWidth="lg">
                <HeaderContainer>
                    <HeaderContainerLeft>
                        <Logo locale={locale} />
                        {asPath.includes("/latam") ? (
                            <RoleSwitcher
                                text={
                                    asPath.includes("parent")
                                        ? "Para Padres"
                                        : asPath.includes("student")
                                        ? "Para Estudiantes"
                                        : "Para Maestros"
                                }
                                color={colorTheme[theme].roleSwitch}
                            />
                        ) : (
                            <RoleSwitcher
                                text={
                                    asPath.includes("parent")
                                        ? "For Parents"
                                        : asPath.includes("student")
                                        ? "For Students"
                                        : "For Teachers"
                                }
                                color={colorTheme[theme].roleSwitch}
                            />
                        )}
                    </HeaderContainerLeft>
                    {useLocale.map((locale: string, id: number) => {
                        return (
                            <HeaderContainerRight key={id}>
                                {session && status === "authenticated" ? (
                                    <>
                                        <Typography sx={{margin: " 0 1rem 0 0"}}>
                                            {session.firstName }
                                        </Typography>
                                    </>
                                ) : signUpData.email !== "" ? (
                                    <Typography sx={{margin: " 0 1rem 0 0"}}>
                                        {signUpData.email.split("@")[0]}
                                    </Typography>
                                ) : (
                                    <>
                                        {mobile ? (
                                            <Link href={`https://www.studypug.com/${locale}/signin.html?role=${theme}`}>
                                                <AccountCircleRoundedIcon
                                                    sx={{
                                                        color: colorTheme[theme].roleSwitch,
                                                        lineHeight: 18,
                                                        marginTop: 1,
                                                        marginRight: "1rem",
                                                    }}
                                                />
                                            </Link>
                                        ) : (
                                            <Link href={`https://www.studypug.com/${locale}/signin.html?role=${theme}`}>
                                                <Typography
                                                    variant={tablet ? "body1" : "h6"}
                                                    sx={{
                                                        textDecoration: "underline",
                                                        color: colorTheme[theme].roleSwitch,
                                                        "&:hover": {opacity: 0.5},
                                                        marginRight: "1rem",
                                                    }}>
                                                    {asPath.includes("latam") ? "Iniciar Sesión" : "Sign In"}
                                                </Typography>
                                            </Link>
                                        )}
                                    </>
                                )}
                                {locale === "ca" && <Flag src={flag_CA} alt="Flag-Canada" />}
                                {locale === "us" && <Flag src={flag_US} alt="Flag-United States" />}
                                {locale === "uk" && <Flag src={flag_UK} alt="Flag-united Kingdom" />}
                                {locale === "au" && <Flag src={flag_AU} alt="Flag-Australia" />}
                                {locale === "sg" && <Flag src={flag_SG} alt="Flag-Singapore" />}
                                {locale === "ie" && <Flag src={flag_IE} alt="Flag-Ireland" />}
                                {locale === "nz" && <Flag src={flag_NZ} alt="Flag-New Zealand" />}
                                {locale === "latam" && <Flag src={flag_Latam} alt="Flag-Latam" />}
                            </HeaderContainerRight>
                        );
                    })}
                </HeaderContainer>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
