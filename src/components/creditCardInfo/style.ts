import styled from "@emotion/styled";

interface Props {
    background?: string;
}

export const CreditCardBox =styled.div<Props>({
    label:"CreditCardBox",
    width:430,
    height:250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 20,
    margin:8,
    "@media (max-width:1200px)":{
        //  justifyContent: "space-evenly",
        height:235,
        width:650,
    },
      "@media (max-width:768px)":{
         justifyContent: "space-evenly",
        height:230,
        width:440,
        paddingTop: 10,
      
    },"@media (max-width:450px)":{
        width:"90vw",
        minWidth:280,
    }, 
},props=>({
    background:props.background
})
)
