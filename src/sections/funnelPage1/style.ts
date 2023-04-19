import styled from "@emotion/styled"

interface Props {
    background?: string
}
export const FunnelPageContainer = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    height: 800,
    width: "100vw",
    overflow: "hidden",
    paddingTop: 50,
    "@media (max-width:1200px)": {
        height:700,
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
    height: "100%"
})
export const SpecialCard = styled.div<Props>({
    width: 210,
    height: 80,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 4,
    "@media (max-width:1200px)": {
        width: 650,
    },
    "@media (max-width:768px)": {
        width: 450,
    },
    "@media (max-width:450px)": {
        width: "90vw",
    }
}, props => ({
    background: props.background
}))


export const BackgroundImageP2 = styled.div<Props>({
    clipPath: "path('M1058.25 219.633C1073.42 333.546 963.551 434.155 828.669 515.346C725.523 577.434 532.696 656.84 402.555 659.789C269.472 662.805 102.975 623.329 35.977 550.327C-28.9822 479.548 8.51435 351.467 39.3283 264.019C74.7799 163.41 156.808 50.4199 302.472 18.2491C441.252 -12.4012 612.188 -1.45525 736.213 35.6562C885.33 80.2758 1043.1 105.808 1058.25 219.633Z')",
    width: 1060,
    height: 665,
    position: "absolute",
    zIndex: 0,
    top: 165,
    transform: "scale(2,1.5)"
}, props => ({
    background: props.background
}))
export const OrganicShape = styled.div<Props>({
    clipPath: "path('M11.7471 54.3666C22.4816 31.4925 42.3479 12.946 71.9077 4.8162C100.807 -3.13198 135.146 -0.111042 167.179 11.6182C198.511 23.0909 223.061 43.5901 241.428 66.8883C261.289 92.0808 281.39 120.76 272.549 145.276C263.743 169.695 227.629 175.774 198.486 185.963C166.94 196.992 136.994 215.77 99.4989 205.779C59.8942 195.225 27.8942 166.005 10.416 135.847C-5.81823 107.836 0.00610755 79.3851 11.7471 54.3666Z')",
    width: 285 ,
    height: 210,
    position: "absolute",
    zIndex: -1,
    top: 50,
    right: "-2.5%",
    "@media (max-width:1200px)": {
         top: "50%",
        right: "-10%",
    },
    "@media (max-width:768px)": {
        top: "50%",
       right: "-5%",
   }
}, props => ({
    background: props.background
}))
export const PaymentContainer = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    "@media (max-width:1200px)": {
        flexDirection: "column",
    }
})
export const PriceCardsContainer = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    marginTop: 24,
    "@media (max-width:1200px)": {
        width: 650,
        flexWrap: "wrap",
        marginTop: 12,
        justifyContent: "space-evenly",
    },
    "@media (max-width:768px)": {
        width: 440,
    },
    "@media (max-width:450px)": {
        width: "90vw",
    },
     "@media (max-width:350px)": {
        width: "95vw",
    }
})

export const SecureText = styled.div({
    marginBottom:8,

})
export const SecureImg = styled.div({
    height:45,
    width:110,
    position: "absolute",
    right: 0, 
    bottom: 0,
    "@media (max-width:1200px)": {
        position: "relative",
        marginTop: 12,
    }
})

export const ButtonContainer = styled.div({
    width: "100%",
    height: "auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    "@media (max-width:1200px)":{
        marginTop: 16,
    },
    "@media (max-width:768px)":{
        marginTop: 0,
    },
    "@media (max-width:450px)":{
        marginTop:8,
    }
})