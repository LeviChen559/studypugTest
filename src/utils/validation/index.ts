import {iEmailSignUp} from "@/types";
const validRegexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validRegexPassword = /^[^\s]{6,40}$/;
export const emailIsValid = (email: string) => validRegexEmail.test(email);
export const passwordIsValid = (password: string) => validRegexPassword.test(password);



export const cc_format = (value: string) => {
  const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  let formattedValue = "";
  
  if ((/^3[47]\d{0,13}$/).test(v)) {
    // American Express (Amex) card number
    formattedValue = v.replace(/^(\d{4})(\d{6})(\d{5})$/, "$1-$2-$3");
    
  }
   else if ((/^4[0-9]{12}(?:[0-9]{3})?$/).test(v)) {
    // Visa card number
    const parts = v.match(/\d{1,4}/g) || [];
    formattedValue = parts.join("-");
  } else if ((/^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/).test(v)) {
    // MasterCard card number
    const parts = v.match(/\d{1,4}/g) || [];
    formattedValue = parts.join("-");
  } else {
    // Other card numbers
    const parts = v.match(/\d{1,4}/g) || [];
    formattedValue = parts.join("-");
  }
  
  return formattedValue;
};
 export const thisYear = new Date().getFullYear();