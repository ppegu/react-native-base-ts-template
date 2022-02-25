import React, { createContext, useState } from 'react';
import Loading from 'src/components/Loading';

export const LoadingContext = createContext<any>({});

const LoadingContextProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <Loading loading={loading} />
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
