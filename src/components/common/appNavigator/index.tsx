import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Loader } from '../../common/loader';
import { SIGN_IN_ROUTE, SIGN_UP_ROUTE, CHARACTERS, CHARACTER } from '../../../constants/routes';
import { AuthContext } from '../authProvider';
import { SignIn } from '../../screens/signIn';
import { SignUp } from '../../screens/signUp';
import { Characters } from '../../screens/characters';
import { Character } from '../../screens/character';
import { TRootStackParamList } from './appNavigator.types';

const Stack = createNativeStackNavigator<TRootStackParamList>();

export const AppNavigator = (): React.ReactElement => {
  const { isSignedIn, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SIGN_IN_ROUTE}>
        {isSignedIn ? (
          <Stack.Group>
            <Stack.Screen name={CHARACTERS} component={Characters} />
            <Stack.Screen name={CHARACTER} component={Character} />
          </Stack.Group>
        ) : (
          <>
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen name={SIGN_IN_ROUTE} component={SignIn} />
            </Stack.Group>
            <Stack.Screen name={SIGN_UP_ROUTE} component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
