import React, { createContext, useState } from "react";

export const SignInContext = createContext<any>(null); 

const SignInProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {

const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);

const handleCloseSignIn = () => {
  setIsSignInOpen(false);
}

  return (
    <SignInContext.Provider value={{isSignInOpen, setIsSignInOpen, handleCloseSignIn}}>
      {children}
    </SignInContext.Provider>
  );
};

export default SignInProvider;