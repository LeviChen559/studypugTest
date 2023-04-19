import styled from "@emotion/styled";
import { keyframes } from '@emotion/react'


interface Props {
    top?: number,
    left?: number,
    right?: number,
    animationDelay?: string,
    display?:string
}

const opacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const LottieAnimationWrapper = styled.div<Props>({
    opacity: .7, 
    // background: "#ffffff",
     borderRadius: "50%", 
     position: "absolute", 
    //  animationDelay:"1s"
    
    
  

}, props => ({
    top: props.top,
    left: props.left,
    right: props.right,
    animationDelay: props.animationDelay,
    display:props.display,
    
})
)