import styled from "@emotion/styled";


export const PriceCardContainer = styled.div({
    width: 210,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    borderRadius: 8,
    margin:8,
    background: "#ffffff",
    "@media (max-width:1200px)":{
        width:200
    },
    "@media (max-width:768px)":{
        width:125
    },
    "@media (max-width:450px)":{
        width:100,
        margin:2,
    }

}, (props: { background: string }) => ({
    background: props.background,
}))

export const FirstLayer = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height:35,
    "@media (max-width:1200px)":{
        // flexDirection: "column",
        // height:35,
        // position: "absolute",
        marginBottom:5
    }
})
export const SecondLayer = styled.div({
    width: "100%",
    height: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderRadius: 8,
    boxShadow: "0px 4px 0 rgba(0, 0, 0, 0.25)",
    background: "#ffffff",
    zIndex: 1,
    "@media (max-width: 1200px)":{
         paddingTop:5,
         flexDirection: "column",
         alignItems: "center",
         height: 130,
        
    }
}, (props: { background?: string }) => ({
    background: props.background,
}))

export const Discount = styled.div({
    width: 70,
    height: 22,
    borderRadius: 4,
    border: "1px solid #ffffff",
    background:"#EC6A5C",
    display: "flex",
    alignItems: "center",
    padding:"0 4px",
    boxSizing: "border-box",
    "@media (max-width: 1200px)":{
        display: "none",
    }
})

export const DiscountMobile = styled.div({
    width: 70,
    height: 22,
    borderRadius: 4,
    border: "1px solid #ffffff",
    background:"#EC6A5C",
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
    padding:"0 4px",
    boxSizing: "border-box",
    zIndex:3,
    position:"absolute",
    marginTop:-15,
    "@media (min-width: 1200px)":{
        display: "none",
    }
})