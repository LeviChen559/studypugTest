import styled from "@emotion/styled";
import { MouseEventHandler } from "react";
interface Props {
    fontSize?: number,
    width?: number | string,
    height?: number
    background?: string,
    boxShadowHeight?: string,
    border?: string,
    margin?: string,
    padding?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
}


export const ButtonContainer = styled.button<Props>(
    {
        background: '#F0C647',
        color: "#424242",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 48,
        // width: 150,
        fontSize: 20,
        fontWeight: "700",
        borderRadius: "6px",
        boxSizing: "border-box",
        border: " 1px solid rgba(0,0,0,.25)",
        boxShadow: " 0px 5px 0 rgba(0,0,0,.5)",
        cursor: "pointer",
        textTransform: "capitalize",
        '&:hover': {
            boxShadow: " 0px 2px 0 rgba(0,0,0,.5)",
            border: " 2px solid rgba(0,0,0,.75)",
        },
        '&:focus': {
            boxShadow: " 0px 1px 0 rgba(0,0,0,.5)",
            border: " 3px solid rgba(0,0,0,.75)",
        },
        "@media (max-width: 400px)": {
            boxShadow: " 0px 3px 0 rgba(0,0,0,.5)",
        }
    },
    props => ({
        fontSize: props.fontSize,
        width: props.width,
        height: props.height,
        background: props.background,
        border: props.border,
        boxShadow: `0px ${props.boxShadowHeight} 0 0 rgba(0,0,0,.5)`,
        margin: props.margin,
        padding: props.padding,

    })
)