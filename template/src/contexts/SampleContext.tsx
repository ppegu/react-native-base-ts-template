import React, { createContext } from 'react';

export const SampleContext = createContext<any>({});

const SampleContextProvider = ({ children }: any) => {
  return <SampleContext.Provider value={{}}>{children}</SampleContext.Provider>;
};

export default SampleContextProvider;
