import styled  from "@emotion/styled";


export  const SignUpCardContainer  =  styled.div({
    display:  "flex" ,
    flexDirection:  "column" ,
    alignItems:  "center" ,
    justifyContent:  "space-evenly" ,
    width:  310 ,
    minHeight:  380 ,
    backgroundColor:  "#FFFFFF" ,
    borderRadius:  8 ,
    padding:"12px 0",
    boxSizing: "border-box",
    boxShadow:  "0px 4px 0 rgba(0, 0, 0, 0.25)" ,
    border:  "1px solid rgba(0, 0, 0, 0.05)" ,
   "@media (max-width:768px)":{
    width: "80vw",
    minWidth:280,
    // height:   ,
   },
})

export  const Condition  =  styled.div({
    display:  "flex" ,
    flexDirection:  "column" ,
    alignItems:  "center" ,
    justifyContent:  "center" ,
    width:  280 ,
   "@media (max-width:768px)":{
    width: "100%",
    minWidth:280,
    // height:   ,
   },
})
export const InputContainer = styled.div({
    width: "100%",
   "@media (max-width:768px)":{
    marginTop:12
   },"@media (max-width:450px)":{
    marginTop:24
   }

})

export const SignUpForm =styled.form({
    
})