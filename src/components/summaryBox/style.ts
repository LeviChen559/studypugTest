import styled from "@emotion/styled"

export const SummaryContainer =styled.div({
width:430,
height:205,
borderRadius:6,
background:"#ffffff",
display: "flex",
flexDirection: "column",
justifyContent: "space-evenly",
padding:"0px 16px",
boxSizing: "border-box",


"@media (max-width:1200px)":{
    marginTop:0,
    width: 650,
},
   "@media (max-width:768px)":{
    width: 440,
},
   "@media (max-width:450px)":{
    width: "90vw",
    minWidth:280,
}

})

export const SummaryWrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: "20px 8px 0px 8px",
    height:250,
    "@media (max-width:1200px)":{
        marginTop:0,
        height:230,
    },
    "@media (max-width:768px)":{
         height:230,
    }
})
export const Skipper = styled.div({
    display:"flex",
    flexDirection: "row",
    marginTop:0,
    "@media (max-width:768px)":{
        marginTop:8,
    }
})