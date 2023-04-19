import styled from "@emotion/styled";
interface Props {
    position?: "absolute" | "relative";
    background?: string
}


export const FunnelPageContainer = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    height: "77.5vh",
    width: "100vw",
    overflow: "hidden",
    paddingTop: 50,
    "@media (max-width:1200px)": {
        height:"100%",
        width: "100vw"
    },
    "@media (max-width:768px)": {
        paddingTop: 16,
        height:"100%",
    }

})
export const FunnelPageWrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 2,
    width: 1200,
    height: 600,
    position: "relative",
    "@media (max-width:1200px)": {
        height: 1100,
    },
    "@media (max-width:768px)": {
        height: 1000,
    }
})



export const BackgroundImage = styled.div<Props>({
    clipPath: "path('M1058.25 219.633C1073.42 333.546 963.551 434.155 828.669 515.346C725.523 577.434 532.696 656.84 402.555 659.789C269.472 662.805 102.975 623.329 35.977 550.327C-28.9822 479.548 8.51435 351.467 39.3283 264.019C74.7799 163.41 156.808 50.4199 302.472 18.2491C441.252 -12.4012 612.188 -1.45525 736.213 35.6562C885.33 80.2758 1043.1 105.808 1058.25 219.633Z')",
    background: "#F3E5DA",
    width: 1060,
    height: 665,
    position: "absolute",
    zIndex: 0,
    top: 24,
    "@media(max-width:768px)": {
        top: 12
    }
}, props => ({
    background: props.background
}))


export const ColorBlock = styled.div<Props>({
    clipPath: "path('M319.457 0.959805C389.609 4.066 456.745 19.1419 505.331 49.2071C552.832 78.6007 576.419 118.415 574.934 159.05C573.482 198.796 542.007 234.451 497.474 264.25C449.32 296.471 392.198 330.33 319.457 329.998C247.005 329.666 197.804 291.424 144.173 262.635C86.1202 231.473 9.11324 205.148 0.999207 159.05C-7.57138 110.358 40.044 62.9017 103.474 31.4137C162.389 2.1668 242.728 -2.43759 319.457 0.959805Z')",
    // background: "#ECC889",
    width: 575,
    height: 330,
    position: "absolute",
    zIndex: 1,
    marginTop: 250,
    marginLeft: 375,
    "@media(max-width:768px)": {
        transform: "scale(0.5)",
        marginTop: 400,
        marginLeft: 300,
    }
}, props => ({
    background: props.background
})
)
export const StudentImage = styled.div<Props>({
    width: 315,
    height: 255,
    position: "relative",

    "@media (max-width: 768px)": {
        top: 0,
        height:125,
        width:107.5
    },
    "@media (max-width: 450px)": {
        marginLeft: "-50%",

    },
 
})


export const OrganicImage = styled.div<Props>({
    label: "organic-image",
    width: 385,
    height: 260,
    clipPath: "path('M195.352 0.211285C246.868 -1.78639 298.622 10.3956 335.436 36.1656C372.554 62.1486 389.517 98.9531 389.391 136.04C389.266 173.032 373.645 210.942 334.761 235.433C297.615 258.83 244.816 260.523 195.352 258.257C149.722 256.167 106.832 245.184 72.7762 223.432C36.5014 200.262 4.60817 170.761 4.00857 136.04C3.40372 101.015 34.9049 71.1838 69.7202 46.4695C104.442 21.8219 146.427 2.10848 195.352 0.211285Z')",
    overflow: "hidden",
    position: "relative",
    "@media (max-width: 1200px)": {
        transform: "scale(0.9)",
    },
    "@media (max-width: 768px)": {
        // transform: "scale(.7)",
        // marginLeft: "-17.5%",
         height: 260*0.7,
        width: 385*.7,
        marginTop: -25,
    },
    "@media (max-width: 450px)": {
        // transform: "scale(.5)",
           height: 260*0.5,
        width: 385*.5,

    },
    "@media (max-width: 350px)": {
    
    },

},
)
export const ImageWrapper = styled.div<Props>({
    // width: 385,
    // height: 275,
    // position: "relative",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // "@media (max-width:768px)": {
    //     width: "100%",
    // }
})
export const FlexContainer = styled.div({
    label: 'FlexContainer',
    marginTop: 36,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    // height: 430,
    "@media (max-width: 768px)": {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 16,
        height: "100%",
    },
    "@media (max-width: 450px)": {
        // marginTop: 55,

    }
})

export const PictureContainer = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: 350,
    margin: "0 25px",
    "@media (max-width: 768px)": {
        flexDirection: "row",
        width: "80vw",
        height: "auto",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: 16
    },
    "@media (max-width: 450px)": {
        height: "auto",

    }
})
export const TextContainerDesktop = styled.div({
    "@media (max-width: 768px)": {
        display: "none",
    }
})
export const TextContainerTablet = styled.div({
    width: "70%",
    "@media (max-width: 450px)": {
  width: "65%",
    },
    "@media (min-width: 768px)": {
        display: "none",
    }
})


export const TrustWrapper = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 700,
    "@media (max-width: 768px)": {
        width: "80vw",
        flexDirection: "column",
        marginTop: 16

    }
})