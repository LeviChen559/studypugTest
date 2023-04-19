export interface iEmailSignUpFormat {
    email: string;
    password: string;
    primary_role: "parent" | "student" | "teacher";
    timezone_offset: number;
}

export interface iPriceData {
    id: number;
    group_key?: string;
    plan_key?: string;
    trial_period_length: number;
    trial_period_unit?: string;
    trial_amount: string;
    billing_period_length?: number;
    billing_period_unit?: string;
    billing_amount: string;
    monthly_amount?: string;
    regular_amount: string;
    discount_percent: string;
    currency?: string;
    extra_user_max_num?: number;
    extra_user_billing_amount?: string;
    extra_user_monthly_amount?: string;
    extra_user_regular_amount?: string;
    state?: string;
    order_num?: number;
    preferred?: number;
    string_key?: string;
    region?: string;
}

export interface iSignUpError {
    email: boolean;
    emailErrorInfo?: string|unknown;
    password: boolean;
    passwordErrorInfo: string;
}

export interface iSignUpScript {
    [key: string]: {
        head: {
          title: string,
          description: string
        }
        header: { // This defines the index signature
          title: string,
          description: string
        },
        testimonials: {
          opinion: string,
          nameAndLocation: string,
        }
        trust: {
          title: string,
          subtitle: string[],
        }
      }
}


export interface iEmailSignUp {
    data:{
     email:string;
     password:string;
    },
    isError:iIsError,
    setIsError:(isError:iIsError)=>{}
    signUpData:iSignUpData,
    setSignUpData:(signUpData:iSignUpData)=>{},
    checked:boolean;
    emailAuth:()=>{}
}
export interface iSignUpData{
    email:string;
    password:string;
}
export interface iIsError{
    email:boolean;
        emailErrorInfo:string;
        password:boolean;
        passwordErrorInfo:string;
}

export interface iCreditCard {
    name: string;
    cardNumber: string;
    expiry: string;
    cvc: string;
}

export interface iPriceCard {
    id: number;
    discount_percent: string;
    string_key: string;
    regular_amount: number;
    billing_amount: number;
    monthly_amount: string;
    clicked: boolean;
    trial_period_length: number;
    plan_key: string;
}


export interface iBillFormat {
    full_name: string,
    cc_number: string,
    expire_month: string,
    expire_year: string,
    card_sec_val: string,
    region: string,
    billing_plan_key: string | undefined,
    extra_user_limit: number
  };


  export interface iSignupContent {
    title: string;
    subtitle: string;
    testimonial: {
        opinion: string;
        nameAndLocation: string;
    };
    trust: {
        title: string;
        subtitle: string[];
    };
}
export interface iTestimonial {
    id: number;
    opinion: string;
    name: string;
    occupation: string;
    img: string;
    display?: string;
}