import { NativeBaseProvider } from 'native-base';
import React from 'react';
import LoaderContextProvider from './contexts/LoaderContext';
import ThemeContextProvider from './contexts/ThemeContext';
import StackNavigation from './navigations/StackNavigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <ThemeContextProvider>
        <LoaderContextProvider>
          <StackNavigation />
        </LoaderContextProvider>
      </ThemeContextProvider>
    </NativeBaseProvider>
  );
};

export default App;
