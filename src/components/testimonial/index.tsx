import Image from "next/image";
import React, {FC} from "react";
import {TestimonialContainer, ImageContainer} from "./style";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import {FlexContainerNoResponsive} from "@/styles/commonStyle";
import {iTestimonial} from "@/types";
import {globalTheme} from "@/theme";
interface Props {
    script: iTestimonial;
    display?: any;
}

const Testimonial: FC<Props> = ({script, display}) => {
    const tablet = useMediaQuery(globalTheme.breakpoints.down("md"));

    return (
            <TestimonialContainer>
                <ImageContainer>
                    <Image
                        src={script.img}
                        alt="user img"
                        fill
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"     
                        loading="eager"
                    />
                </ImageContainer>
                <FlexContainerNoResponsive
                    flexDirection="column"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                    width="90%"
                    height={"100%"}>
                    <Typography
                        variant="body2"
                        lineHeight={1.25}
                        style={{fontStyle: "italic", marginTop: tablet ? "1rem" : "0rem"}}>
                        {script.opinion.substring(0, 40)+" ..."}
                    </Typography>
                    <FlexContainerNoResponsive
                        flexDirection="column"
                        alignItems="flex-start"
                        height="auto"
                        style={{marginTop: 4}}>
                        <Typography variant="body2" sx={{marginTop: 0}}>
                            {script.name}
                        </Typography>
                    </FlexContainerNoResponsive>
                </FlexContainerNoResponsive>
            </TestimonialContainer>
    
    );
};
export default Testimonial;
