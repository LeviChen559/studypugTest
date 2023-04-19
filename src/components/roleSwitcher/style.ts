import styled from '@emotion/styled'


export const RoleSwitcherContainer= styled.button(
    {
      
      color:"#ffffff",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      height: 30,
      width: 150,
      border:"none",
      background:"none",
      cursor:"pointer",
      "@media (max-width:768px)": {
        width: 125,
      },
      '&:hover':{   
       opacity:0.5
      }
    },
    props => ({
    //   fontSize: props.fontSize
    })
  )
