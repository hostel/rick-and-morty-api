import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClientProvider } from '@tanstack/react-query';

import React, { ReactElement } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppNavigator } from './components/common/appNavigator';
import { AuthContextProvider } from './components/common/authProvider';
import { queryClient } from './utils/queryClient';

const App = (): ReactElement => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <AuthContextProvider>
            <AppNavigator />
          </AuthContextProvider>
        </PaperProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
