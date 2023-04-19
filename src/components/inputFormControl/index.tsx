import React, {FC, ChangeEvent} from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import {Typography} from "@mui/material";

interface myFormControlProps {
    props: iMyformControl;
    error?: boolean;
    errorInfo?: unknown;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    pattern?:string 
    inputMode?: "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
}
interface iMyformControl {
    width: string;
    title: string;
    placeholder: string;
    startAdornment?: any;
    endAdornment?: any;
   
   
}
const InputFormControl: FC<myFormControlProps> = ({props, error, onChange, errorInfo, value, pattern,inputMode}) => {
    const labelStyle = {
        color: `${error ? "red" : "#424242"}`,
        marginTop: "20px",
        fontSize: 14,
       
        "@media (max-width:768px)": {
            marginTop: "10px",
        },
        "@media (max-width:450px)": {
            marginTop: "12.5px",
        },
    };
    const inputStyle = {
        height: 45,
        width: "100%",
        background: `${error ? "pink" : "#ffffff"}`,
        paddingTop: "15px",
        'input:-webkit-autofill': {
            'WebkitBoxShadow': '0 0 0 100px white inset !important', // To remove autofill background color
          },
          'input:-webkit-autofill::first-line': {
            color: '#000 !important', // To style autofill text color
          },
          
        
    };
    return (
        <>
            <FormControl sx={{width: props.width,}}>
                <InputLabel htmlFor="component-outlined" shrink sx={labelStyle}>
                    {props.title}
                </InputLabel>
                <OutlinedInput
                    id="component-outlined"
                    placeholder={props.placeholder}
                    sx={inputStyle}
                    startAdornment={props.startAdornment}
                    endAdornment={props.endAdornment}
                    error={error}
                    onChange={onChange}
                    value={value}
                    inputProps={{ inputMode: inputMode, pattern:pattern  }}
                    
                />
            </FormControl>
           {errorInfo&&  <Typography color="red" variant="body2" sx={{width: "100%"}}>
            {errorInfo as React.ReactNode}
            </Typography>}
        </>
    );
};

export default InputFormControl;
