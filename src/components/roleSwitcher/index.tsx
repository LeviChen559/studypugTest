import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import {RoleSwitcherContainer} from "./style";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {useRouter} from "next/router";
import {useTheme} from "@/context/ThemeContext";
import {locales} from "@/const";

interface Props {
    text: string;
    color: any;
}

export default function RoleSwitcher({text, color}: Props) {
    const router = useRouter();

    const {asPath} = useRouter();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLink = (url: string) => {
        router.push(url);
    };

    return (
        <>
            <RoleSwitcherContainer
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}>
                <Typography variant="body1" sx={{color: color}} noWrap>
                    {text}
                </Typography>
                <div style={{transform: "rotate(-25deg)", paddingTop: 0}}>
                    <ArrowDropDownIcon sx={{color: color, fontSize: 14}} />
                </div>
            </RoleSwitcherContainer>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                    sx: {width: 145},
                }}>
                {locales.map((locale: string, id: number) => {
                    return (
                        <div key={id}>
                            {asPath.includes(`/${locale}`) && (
                                <div>
                                    {!asPath.includes("parent") && (
                                        <MenuItem onClick={() => handleLink(`/parents/${locale}/`)}>
                                            {asPath.includes("latam") ? "Para Padres" : "For Parents"}
                                        </MenuItem>
                                    )}
                                    {!asPath.includes("student") && (
                                        <MenuItem onClick={() => handleLink(`/students/${locale}/`)}>
                                            {asPath.includes("latam") ? "Para Estudiantes" : "For Students"}
                                        </MenuItem>
                                    )}
                                    {locale !== "latam" && (
                                        <MenuItem
                                            onClick={() => handleLink("https://www.studypug.com/for-teachers-maths/")}>
                                            For Teachers
                                        </MenuItem>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </Menu>
        </>
    );
}
