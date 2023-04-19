import styled from "@emotion/styled";
import { css, keyframes } from '@emotion/react'
interface Props {
    animationPlayState?: string
    display?: string
}
export const slideIn = keyframes({
 '0%':{
    transform: "translate3d(-150px,0 , 0)",
    opacity:0
 },
 '25%':{
    transform: "translate3d(0px, 0px, 0)",
    opacity:1
 },


 '100%':{
    transform: "translate3d(0, 0, 0)",
    opacity:1
 }
})


export const SlideInUpAnimation = styled.div<Props>({
  animation: slideIn + ' 7.5s',
  animationIterationCount : "infinite",
animationTimingFunction : "ease-out",
animationPlayState : "running"

},props=>({
    animationPlayState : props.animationPlayState
}))

export const TestimonialContainer = styled.div<Props>({

    width: 210,
    height: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: ".5rem",
    padding: "1rem",
    background: "#FAC9C9",
    borderRadius: 10,
    boxSizing: "border-box",
    position: "relative",
    "@media (max-width: 1200px)": {
    flexDirection: "column",
    width:"100%",
    height: 90,

    },

},props=>({
    props: props.display
}),)

export const ImageContainer = styled.div({
    borderRadius: "50%",
    overflow: "hidden",
    width:35,
    height: 35,
    position: "absolute",
    left:-17.5,
    "@media (max-width: 1200px)": {
        left: 47.5,
        top:-17.5,
    }

})