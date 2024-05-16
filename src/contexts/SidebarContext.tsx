import React, { createContext, useState } from "react";

export const SidebarContext = createContext<any>(null); 

const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {

const [isOpen, setIsOpen] = useState(false);

const handleClose = () => {
  setIsOpen(false);
}

  return (
    <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
