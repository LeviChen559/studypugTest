import type {AppProps} from "next/app";
import {ThemeProvider} from "@mui/material/styles";
import globalTheme from "@/theme";
import {ThemeContextProvider} from "@/context/ThemeContext";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {appWithTranslation} from "next-i18next";
import ReactGA from "react-ga4";
import {useTheme} from "@/context/ThemeContext";
import Script from "next/script";
import ErrorBoundary from "@/components/ErrorBoundary";
import {Router} from "next/router";
import {SessionProvider} from "next-auth/react";

export function reportWebVitals(metric: any) {
    switch (metric.name) {
        case "FCP":
            // handle FCP results
            break;
        case "LCP":
            // handle LCP results
            break;
        case "CLS":
            // handle CLS results
            break;
        case "FID":
            // handle FID results
            break;
        case "TTFB":
            // handle TTFB results
            break;
        case "INP":
            // handle INP results (note: INP is still an experimental metric)
            break;
        default:
            break;
    }
}

ReactGA.initialize("GA_MEASUREMENT_ID");
const useInterceptNextDataHref = ({router, namespace}: {router: Router; namespace: string}) => {
    useEffect(() => {
        if (router.pageLoader?.getDataHref) {
            const originalGetDataHref = router.pageLoader.getDataHref;
            router.pageLoader.getDataHref = function (args: {
                href: string;
                asPath: string;
                ssg?: boolean;
                rsc?: boolean;
                locale?: string | false;
            }) {
                const r = originalGetDataHref.call(router.pageLoader, args);
                return r && r.startsWith("/_next/data") ? `${namespace}${r}` : r;
            };
        }
    }, [router, namespace]);
};

const App = ({Component, pageProps, router}: AppProps) => {
    useEffect(() => {
        window.scrollTo(0, -100);
    }, []);
    useInterceptNextDataHref({
        router,
        namespace: "/next_sp",
    });
    return (
        <ErrorBoundary>
            <SessionProvider
                // Provider options are not required but can be useful in situations where
                // you have a short session maxAge time. Shown here with default values.
                session={pageProps.session}>
                <ThemeProvider theme={globalTheme}>
                    <Script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id='${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}'`}></Script>
                    <Script
                        id={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
                        dangerouslySetInnerHTML={{
                            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            `,
                        }}></Script>
                    <ThemeContextProvider>
                        <Component {...pageProps} />
                    </ThemeContextProvider>
                </ThemeProvider>
            </SessionProvider>
        </ErrorBoundary>
    );
};
export default appWithTranslation(App);
