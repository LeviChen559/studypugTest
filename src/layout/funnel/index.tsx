import Header from "@/sections/header";
import {LayoutContainer} from "../style";
import {FC, useState, useEffect} from "react";
import {NextSeo} from "next-seo";
import {useTheme} from "@/context/ThemeContext";
import {useRouter} from "next/router";
import HeaderSignUp from "@/sections/headerSignUp";

interface Props {
    children?: React.ReactNode;
    title?: any;
    description?: any;
    locale: string;
}

const Layout: FC<Props> = (props) => {
    const [scrolled, setScrolled] = useState(false);
    const {theme, setTheme} = useTheme();
    const {asPath} = useRouter();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <NextSeo title={props.title} description={props.description} />
            <HeaderSignUp locale={props.locale}/>
            <LayoutContainer background={"#ffffff"}>{props.children}</LayoutContainer>

            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 1.8;
                    color: #333;
                    font-family: sans-serif;
                    
                }
            `}</style>
        </>
    );
};
export default Layout;
