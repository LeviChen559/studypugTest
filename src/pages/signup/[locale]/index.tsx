import React, {FC, useEffect, useState} from "react";
import Layout from "@/layout/funnel";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import i18nextConfig from "../../../../next-i18next.config";
import {getI18nPaths} from "../../../../getI18nPaths";
import ProcessBar from "@/components/processBar";
import {Container, Typography} from "@mui/material";
import {useRouter} from "next/router";
import {useSignUp} from "@/context/ThemeContext";
import FunnelPage0 from "@/sections/funnelPage0";
import {signIn} from "next-auth/react";
import {useTheme} from "@/context/ThemeContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import {globalTheme} from "@/theme";

interface Props {
    locale: string;
  
}

const SignUP: FC<Props> = ({locale,}) => {
    const {t, i18n} = useTranslation(["funnel"]);
    const [page, setPage] = useState<string>("signup");
    const router = useRouter();
    const {asPath} = useRouter();
    const {theme, setTheme} = useTheme();
    const mobile = useMediaQuery(globalTheme.breakpoints.down("sm"));

    const handlePrevious = () => {
        if (page === "signup") {
            router.back();
        } else {
            router.push(`/signup/${locale}/?role=${theme}`);
        }
    };
    useEffect(() => {
        if (asPath.includes("signup")) {
            setPage("signup");
        } else {
            setPage("payment");
        }

        if (asPath.includes("parent")) {
            setTheme("parent");
        } else if (asPath.includes("student")) {
            setTheme("student");
        } else {
            setTheme("teacher");
        }
    });
    const paymentPage = `/payment/${locale}/?role=${theme}`;
    const googleAuth = () => {
        signIn("google", {callbackUrl: paymentPage});
    };
    const facebookAuth = () => {
        signIn("facebook", {callbackUrl: paymentPage});
    };
    const appleAuth = () => {
 
          
        signIn("apple", {callbackUrl: paymentPage});
    };

    const handleNext = () => {
        router.push(paymentPage);
    };

    return (
        <Layout locale={locale}>
            <Container
                maxWidth="lg"
                style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: mobile ? 65 : 85}}>
                <ProcessBar setPage={setPage} page={page} handlePrevious={handlePrevious} />
                <FunnelPage0
                    googleAuth={googleAuth}
                    locale={locale}
                    handleNext={handleNext}
                    facebookAuth={facebookAuth}
                    appleAuth={appleAuth}
                    script={t(asPath.includes("parent") ? "parent.signup.content" : "student.signup.content", {
                        returnObjects: true,
                    })}
                />
            </Container>
        </Layout>
    );
};

export default SignUP;

export const getStaticPaths = () => ({
    fallback: false,
    paths: getI18nPaths(),
});

//use getStaticProps to get the data from the json file depending on the locale
export const getStaticProps = async (context: any, req: any) => {
    const {locale} = context.params;
 

    return {
        props: {
            locale,
            ...(await serverSideTranslations(context?.params?.locale, ["funnel"], i18nextConfig)),
            // Set cache control headers
            headers: {
                "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
            },
        },
        // Set cache lifetime to 1 hour
        revalidate: 3600,
    };
};
