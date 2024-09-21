import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ForgotPasswordScreen, LoginScreen} from '../screens/auth';
import ScreenNames from './routes';
import {
  Balance,
  Charity,
  Dashboard,
  Home,
  Preview,
  Preview2,
  Recipient,
  Register,
  Remittance,
  Settings,
  Verify,
} from '~screens/app';
import Wallet from '~screens/app/wallet';

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();
const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreenNames.CHARITY} component={Charity} />
        <Stack.Screen name={ScreenNames.REGISTER} component={Register} />
        <Stack.Screen name={ScreenNames.VERIFY} component={Verify} />
        <Stack.Screen name={ScreenNames.Remittance} component={Remittance} />
        <Stack.Screen name={ScreenNames.Recipient} component={Recipient} />
        <Stack.Screen name={ScreenNames.Preview} component={Preview} />
        <Stack.Screen name={ScreenNames.PREVIEW2} component={Preview2} />
        <Stack.Screen name={ScreenNames.Settings} component={Settings} />
        <Stack.Screen name={ScreenNames.HOME} component={Home} />
        <Stack.Screen name={ScreenNames.WALLET} component={Wallet} />
        <Stack.Screen name={ScreenNames.Dashboard} component={Dashboard} />
        <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
        <Stack.Screen name={ScreenNames.BALANCE} component={Balance} />

        <Stack.Screen
          name={ScreenNames.FORGOT_PASSWORD}
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
export {default as ScreenNames} from './routes';
