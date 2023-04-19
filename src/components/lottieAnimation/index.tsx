import React, {FC} from "react";
import {Player} from "@lottiefiles/react-lottie-player";
import {LottieAnimationWrapper} from "./style";

interface Props {
    animationUrl?: any;
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    right?: number;
    animationDelay?: string;
    display?: string;
}

const LottieAnimation: FC<Props> = ({animationUrl, width, height, top, left, right, animationDelay, display}) => {
    return (
        <LottieAnimationWrapper
            top={top}
            left={left}
            right={right}
            style={{height: height, width: width}}
            display={display}>
            <Player src={animationUrl} className="player" loop autoplay />
        </LottieAnimationWrapper>
    );
};

export default LottieAnimation;
