import {createTheme, responsiveFontSizes} from "@mui/material/styles";
import {Roboto_Slab, DM_Sans, Lato} from "next/font/google";

const roboto_slab = Roboto_Slab({weight: "400", subsets: ["latin"]});
const dm_sans = DM_Sans({weight: "400", subsets: ["latin"]});
const lato = Lato({weight: "400", style: ["normal"], subsets: ["latin"]});

export interface ColorTheme {
    [key: string]: {
        // This defines the index signature
        main: string;
        light: string;
        background: string;
        mainText: string;
        subTitle: string;
        ctaButtonText?: string;
        roleSwitch?: string;
    };
}
export const colorTheme: ColorTheme = {
    "parent": {
        main: "#4BA4CB",
        light: "#ffffff",
        background: "#F3E5DA",
        mainText: "#ffffff",
        subTitle: "#F0C647",
        ctaButtonText: "#ffffff",
        roleSwitch: "#424242",
    },
    "student": {
        main: "#F3E5DA",
        light: "#ffffff",
        background: "#BADAFF",
        mainText: "#424242",
        subTitle: "#EC6A5C",
        ctaButtonText: "#ffffff",
        roleSwitch: "#424242",

    },
    "signup": {
        main: "#F3E5DA",
        light: "#ffffff",
        background: "#ffffff",
        mainText: "#424242",
        subTitle: "#EC6A5C",
        ctaButtonText: "#ffffff",
        roleSwitch: "#424242",
    }
};
export interface iLevelColorTheme {
    elementary: string;
    highSchool: string;
    college: string;
    apIb: string;
    testPrep: string;
}
export const levelColorTheme: iLevelColorTheme = {
    elementary: "#5988CA",
    highSchool: "#A678C9",
    college: "#CAB558",
    apIb: "#61AAA7",
    testPrep: "#DF838C",
};

export let globalTheme = createTheme({
    
    palette: {
        primary: {
            main: "#4BA4CB",
            light: "#ffffff",
            dark: "#F3E5DA",
        },
        secondary: {
            main: "#F3E5DA",
            light: "#ffffff",
            dark: "#BADAFF",
        },
        text: {
            primary: "#424242",
            secondary: "#ffffff",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 450,
            md: 768,
            lg: 1200,
            xl: 1536,
        },
    },
    
    typography: {
        h1: {
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: 0,
            marginBottom: 18,
            fontFamily: dm_sans.style.fontFamily,
            "@media (max-width:1200px)": {
                fontSize: 36,
            },
            "@media (max-width:768px)": {
                fontSize: 28,
                marginBottom: 12,
            },
            "@media (max-width:480px)": {
                fontSize: 24,
                marginBottom: 8,
            },
            "@media (max-width:350px)": {
                fontSize: 22,
                marginBottom: 6,
            },
        },

        h2: {
            fontSize: 36,
            fontWeight: 500,
            letterSpacing: 0,
            marginBottom: 8,
            fontFamily: dm_sans.style.fontFamily,
            "@media (max-width:1200px)": {
                fontSize: 28,
            },
            "@media (max-width:768px)": {
                marginBottom: 0.5,
                fontSize: 20,
            },
        },
        h3: {
            fontSize: 30,
            fontFamily: roboto_slab.style.fontFamily,
            marginBottom: 8,
            "@media (max-width:768px)": {
                fontSize: 26,
                marginBottom: 4,
            },
            "@media (max-width:400px)": {
                fontSize: 20,
            },
        },

        h4: {
            fontSize: 24,
            marginBottom: 8,
            // fontFamily: roboto_slab.style.fontFamily,
        },
        h5: {
            fontSize: 24,
        },
        h6: {
            fontSize: 20,
            fontFamily: lato.style.fontFamily,
            lineHeight: 1.2,
            "@media (max-width:768px)": {
                fontSize: 16,
            },
            "@media (max-width:400px)": {
                fontSize: 14,
            },
        },
        subtitle1: {
            fontSize: 28,
            lineHeight: 1.25,
            marginBottom: 18,
            fontFamily: dm_sans.style.fontFamily,
            "@media (max-width:1200px)": {
                fontSize: 24,
                marginBottom: 16,
            },
            "@media (max-width:768px)": {
                fontSize: 20,
                marginBottom: 12,
            },
            "@media (max-width:450px)": {
                fontSize: 18,
                marginBottom: 8,
            },
        },
        subtitle2: {
            fontSize: 18,
            lineHeight: 1.25,
            fontFamily: dm_sans.style.fontFamily,
            "@media (max-width:768px)": {
                fontSize: 16,
            },
            "@media (max-width:450px)": {
                fontSize: 13,
            },
        },
        body1: {
            fontSize: 16,
            lineHeight: 1.25,
            marginTop: 10,
            fontWeight: 500,
            fontFamily: lato.style.fontFamily,
            "@media (max-width:768px)": {
                fontSize: 14,
                marginTop: 0,
            },
            "@media (max-width:450px)": {
                fontSize: 12,
                marginTop: 0,
            },
        },
        body2: {
            fontSize: 14,
            lineHeight: 1,
            marginTop: 10,
            fontFamily: lato.style.fontFamily,
            "@media (max-width:768px)": {
                marginTop: 0,
                fontSize: 12,
            },
        },
        button: {
            fontSize: 20,
            fontFamily: lato.style.fontFamily,
            "@media (max-width:768px)": {
                fontSize: 14,
            },
        },
    },

        
});

export default globalTheme;
