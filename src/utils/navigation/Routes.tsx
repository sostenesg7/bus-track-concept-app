import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../../src/screens/Login';
import SignUp from '../../../src/screens/SignUp';
import Home from '../../../src/screens/Home';
import {Utils} from '../Utils';
import {Header} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Utils.screenNames.Home}
      screenOptions={{
        headerShown: false,
      }}>
      {/*  <Stack.Screen name={Utils.screenNames.LOGIN} component={Login} />
      <Stack.Screen name={Utils.screenNames.SIGNUP} component={SignUp} />
      */}
      <Stack.Screen
        name={Utils.screenNames.Home}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
