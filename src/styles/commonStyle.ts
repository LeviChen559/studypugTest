import styled from "@emotion/styled";
import useMediaQuery from '@mui/material/useMediaQuery';


import { keyframes } from "@emotion/react";



interface Props {
   justifyContent?: string;
   alignItems?: string;
   flexDirection?: "row" | "column";
   width?: string | number;
   height?: string | number;
   flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
   textAlign?: "center" | "left" | "right"
}

export const FlexContainer = styled.div<Props>({
   display: "flex",
   flexDirection: "row",
   justifyContent: "center",
   alignItems: "center",
   width: "100%",
   height: "100%",
   flexWrap: "nowrap",
   "@media (max-width: 1200px)": {
      flexDirection: "column",
      flexWrap: "wrap",
   }

}, props => ({
   justifyContent: props.justifyContent,
   alignItems: props.alignItems,
   flexDirection: props.flexDirection,
   width: props.width,
   height: props.height,
   flexWrap: props.flexWrap,
})
)

export const FlexContainerNoResponsive = styled.div<Props>({
   display: "flex",
   flexDirection: "row",
   justifyContent: "center",
   alignItems: "center",
   flexWrap: "nowrap",

}, props => ({
   justifyContent: props.justifyContent,
   alignItems: props.alignItems,
   flexDirection: props.flexDirection,
   width: props.width,
   height: props.height,
   flexWrap: props.flexWrap,
   textAlign: props.textAlign
})
)

export const DesktopUp= styled.div({
   display: "block",
   "@media (max-width: 1200px)": {
     display: "none",
   }
 })
export const DesktopDown= styled.div({
   display: "none",
   "@media (max-width: 1200px)": {
     display: "block",
   }
 })
 export const TabletUp= styled.div({
   display: "block",
   "@media (max-width: 768px)": {
     display: "none",
   }
 })
export const TabletDown= styled.div({
   display: "none",
   "@media (max-width: 768px)": {
     display: "block",
   }
 })
 export const MobileUp= styled.div({
   display: "block",
   "@media (max-width: 450px)": {
     display: "none",
   }
 })
 export const MobileDown= styled.div({
   display: "none",
   "@media (max-width: 450px)": {
     display: "block",
   }
 })



export const slideIn = keyframes({
   '0%': {
      transform: "translate3d(-150px,0 , 0)",
      opacity: .5
   },
   '15%': {
      transform: "translate3d(0px, 0px, 0)",
      opacity: 1
   },


   '100%': {
      transform: "translate3d(0, 0, 0)",
      opacity: 1
   }
})
export const slideInRight = keyframes({
   '0%': {
      transform: "translate3d(150px,0 , 0)",
      opacity: .5
   },
   '15%': {
      transform: "translate3d(0px, 0px, 0)",
      opacity: 1
   },


   '100%': {
      transform: "translate3d(0, 0, 0)",
      opacity: 1
   }
})


export const SlideInLeftAnimation = styled.div({
   animation: slideIn + ' 7.5s',
   animationIterationCount: "infinite",
   animationTimingFunction: "ease-out",
   animationPlayState: "running"

}, props => ({

}))

export const SlideInRightAnimation = styled.div({
   animation: slideInRight + ' 7.5s',
   animationIterationCount: "infinite",
   animationTimingFunction: "ease-out",
   animationPlayState: "running"

}, props => ({

}))


const bounce = keyframes({
   "from, 20%, 53%, 80%, to": {
     transform: "translate3d(0,0,0)",
   },
 
   "40%, 43%": {
     transform: "translate3d(0, -30px, 0)",
   },
 
   "70%": {
     transform: "translate3d(0, -15px, 0)",
   },
 
   "90%": {
     transform: "translate3d(0,-4px,0)",
   },
 });
 const fadeIn = keyframes({
   "0%": {
     opacity: 0,
   },
 
   "100%": {
     opacity: 1,
   },
 });
 

 
 export const BounceAnimation = styled.div({
   animation: bounce + " 3s",
 });