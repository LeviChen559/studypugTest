import styled from "@emotion/styled";
import { css, keyframes } from '@emotion/react'
interface Props {
marginTop?: number;
}

const showUpPug = keyframes({
    "0%": {
        top: 90,
        opacity: 1,

    },
    "25%": {
        top: 20,
        opacity: 1,

    },
    "78%": {
        top: 90,
        opacity: 1,

    },
    "100%": {
        top: 20,
        opacity: 1,

    }
})
export const PugImage = styled.div<Props>({
    width: 150,
    height: 95,
    opacity: 1,
    left: 0,
    top: 20,
    zIndex: 2,
    animation: showUpPug + " 5s",
    animationFillMode: "forwards",
    animationPlayState: "running",
    animationTimingFunction: "ease",
    animationDelay: '2s',
    position: "relative",
    "@media (max-width:1200px)": {
        //   display: "none"
    }

},props=>({
    marginTop: props.marginTop,
}))