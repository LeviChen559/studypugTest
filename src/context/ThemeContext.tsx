import React, { createContext, useState, useContext,FC } from 'react';


interface iSignUpData{
  email: string;
  password: string;
}


interface Props {
  theme: string,
  setTheme: (theme: string) => void,
  signUpData: iSignUpData,
  setSignUpData: (signUpData:iSignUpData ) => void,
  userToken:  any,
  setUserToken: (token:string) => void,

}

const initialStates = {
  theme: "parent",
  setTheme: () => { },
  signUpData: {email:"",password:""},
  setSignUpData: () => { },
  userToken: "",
  setUserToken: () => { },
}

interface ThemeContextProviderPros {
  children: React.ReactNode
}


export const ThemeContext = createContext<Props>(initialStates);

export const ThemeContextProvider:FC<ThemeContextProviderPros> = ({ children }) => {
  //children all the pages/components insider this provider
  const [theme, setTheme] = useState(initialStates.theme)
  const [signUpData, setSignUpData] = useState(initialStates.signUpData)
  const [userToken, setUserToken] = useState(initialStates.userToken)


  
  //put in the variables you want to share
  return <ThemeContext.Provider value={{ theme, setTheme,signUpData,setSignUpData,userToken,setUserToken }}>
 
    {children}
  </ThemeContext.Provider>
}

//use the Context to create Hooks like useTheme
export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext)
  return { theme, setTheme }
}
export function useSignUp() {
  const { signUpData, setSignUpData } = useContext(ThemeContext)
  return { signUpData, setSignUpData }
}
export function useToken() {
  const { userToken, setUserToken } = useContext(ThemeContext)
  return { userToken, setUserToken }
}


