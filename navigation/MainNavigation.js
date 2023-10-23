import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import SingleDonation from '../screens/SingleDonation/SingleDonation';
import Login from '../screens/Login/Login';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => null}}>
      <Stack.Screen name={Routes.Login} component={Login}></Stack.Screen>
      <Stack.Screen name={Routes.Home} component={Home}></Stack.Screen>
      <Stack.Screen
        name={Routes.Donation}
        component={SingleDonation}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainNavigation;
