import Typography from "@mui/material/Typography";
import {ButtonContainer} from "./style";
import {FC} from "react";
import {useRouter} from "next/router";
interface Props {
    buttonText: string,
    height?: number,
    width?: number | string,
    background?: string,
    variant?:"button" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "overline" | "inherit" ,
    color?: string,
    border?: string,
    boxShadowHeight?: string,
    onClick?: () => void,
    routeTo?: string | undefined | null,
    margin?: string,
    padding?: string,

}
const CtaButton:FC<Props> = ({ padding,buttonText, width, height, background, routeTo="/", variant="button",color="textPrimary",border,boxShadowHeight,margin }) => {
    const router = useRouter();

    const goToPage = (routeTo: string | null) => {
        if (routeTo !== null) {
            router.push(routeTo);
        }
    };

    return (
        <ButtonContainer padding={padding}width={width} height={height} background={background} onClick={()=>goToPage(routeTo)} border={border} boxShadowHeight={boxShadowHeight} margin={margin}>

            <Typography variant={variant} color={color} sx={{ textTransform: 'none',margin:0,padding:0,overflow:"visible" }} noWrap gutterBottom>{buttonText}</Typography>


        </ButtonContainer>
    );
};

export default CtaButton;
