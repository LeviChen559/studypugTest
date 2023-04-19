import {FlexContainerNoResponsive} from "@/styles/commonStyle";
import {ProcessStick, ProcessBarContainer} from "./style";
import React, {FC} from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ClearIcon from "@mui/icons-material/Clear";
import {Button, Typography} from "@mui/material";
import {globalTheme} from "@/theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
interface Props {
    handlePrevious: () => void;
    page: string;
    setPage: (page: string) => void;
}

const ProcessBar: FC<Props> = ({page, setPage, handlePrevious}) => {
    const tablet = useMediaQuery(globalTheme.breakpoints.down("md"));
    return (
        <ProcessBarContainer>
            <FlexContainerNoResponsive
                height={tablet ? 35 : 50}
                width="100%"
                justifyContent="space-evenly"
                alignItems="flex-start">
                <Button onClick={handlePrevious} sx={{minWidth:40}}>
                    <ArrowRightAltIcon style={{transform: "rotate(180deg)"}} fontSize="medium" />
                </Button>
                {page === "signup" && (
                    <>
                        <FlexContainerNoResponsive
                            width="37.5%"
                            height="100%"
                            flexDirection="column"
                            alignItems="flex-start"
                            justifyContent="space-evenly">
                            <ProcessStick background="#36E0AF" />
                            <FlexContainerNoResponsive>
                            <Typography sx={{ marginTop:0, color: "#424242"}}>Sign Up </Typography>
                            {/* <RadioButtonUncheckedIcon sx={{marginLeft: "4px",color: "#424242", fontSize:16}}/> */}
                            </FlexContainerNoResponsive>
                        </FlexContainerNoResponsive>
                        <FlexContainerNoResponsive
                            width="35%"
                            height="100%"
                            flexDirection="column"
                            alignItems="flex-start"
                            justifyContent="space-evenly">
                            <ProcessStick />
                            <Typography sx={{marginTop:0, color: "#bcbcbc"}}>Choose a plan</Typography>
                        </FlexContainerNoResponsive>
                    </>
                )}
                {page === "payment" && (
                    <>
                        <FlexContainerNoResponsive
                            width="37.5%"
                            height="100%"
                            flexDirection="column"
                            alignItems="flex-start"
                            justifyContent="space-evenly">
                             <ProcessStick background="#36E0AF" style={{opacity:.5}}/>
                            <FlexContainerNoResponsive>
                            <Typography sx={{margin: "0px 0 0 0", color: "#bcbcbc"}}>Sign Up </Typography>
                            <TaskAltIcon sx={{margin: "0px 0 0 4px",color: "#bcbcbc", fontSize:16}}/>
                            </FlexContainerNoResponsive>
                        </FlexContainerNoResponsive>
                        <FlexContainerNoResponsive
                            width="35%"
                            height="100%"
                            flexDirection="column"
                            alignItems="flex-start"
                            justifyContent="space-evenly">
                            <ProcessStick background="#36E0AF" />
                              

                            <Typography sx={{margin: "8px 0 0 0"}}>Choose a plan</Typography>
                                
                        </FlexContainerNoResponsive>
                    </>
                )}
                {/* <Button onClick={handleClear}>
                    <ClearIcon />
                </Button> */}
            </FlexContainerNoResponsive>
        </ProcessBarContainer>
    );
};

export default ProcessBar;
