import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { CoreNavigationStack } from './navigation/CoreNavigationStack';

export const App = () => {

  return (
    <PaperProvider>
      <CoreNavigationStack/>
    </PaperProvider>
  )
}

export default App;
