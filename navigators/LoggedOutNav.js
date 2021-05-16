import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  return <Stack.Navigator screenOptions={{
    headerBackTitleVisible: false,
    headerTitle: false,
    headerTransparent: true,
    headerTintColor: "white"
  }}>
    <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
  </Stack.Navigator>
}