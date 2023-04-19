import Typography from "@mui/material/Typography";
import {ButtonContainer} from "./style";
import {FC} from "react";
import GoogleIcon from '@mui/icons-material/Google';
interface Props {
    buttonText: string;
    height?: number;
    width?: number;
    background?: string;
    variant?:
        | "button"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "subtitle1"
        | "subtitle2"
        | "body1"
        | "body2"
        | "caption"
        | "overline"
        | "inherit";
    color?: string;
    border?: string;
    boxShadowHeight?: string;
    boxShadowColor?: string;
    margin?: string;
    onClick?: () => void;
    routeTo?: string;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
}

const FunctionButton: FC<Props> = ({
    margin,
    buttonText,
    width,
    height,
    background,
    onClick,
    variant = "button",
    color = "textPrimary",
    border,
    boxShadowHeight="5px",
    boxShadowColor,
    children,
    type
}) => {
    return (
        <ButtonContainer
            type={type}
            width={width}
            height={height}
            background={background}
            onClick={onClick}
            border={border}
            boxShadowHeight={boxShadowHeight}
            boxShadowColor={boxShadowColor}
            margin={margin}>
            <Typography
                variant={variant}
                color={color}
                sx={{textTransform: "none", margin: 0, padding: 0, overflow: "visible"}}
                noWrap
                gutterBottom>
                {buttonText}
            </Typography>
            {children}
        </ButtonContainer>
    );
};

export default FunctionButton;
