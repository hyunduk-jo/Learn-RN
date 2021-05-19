import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import Search from '../screens/Search';
import Notification from '../screens/Notifications';
import { Ionicons } from "@expo/vector-icons";
import { View } from 'react-native';
import Me from '../screens/Me';
import StackNavFactory from '../components/nav/StackNavFactory';

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        style: {
          backgroundColor: "black",
          borderTopColor: "rgba(255,255,255,0.3)"
        },
        showLabel: false
      }}>
      <Tabs.Screen name="Feed" options={{
        tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? "home" : "home-outline"} color={color} size={22} />
      }}>
        {() => <StackNavFactory screenName="Feed" />}
      </Tabs.Screen>
      <Tabs.Screen name="Search" options={{
        tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? "search" : "search-outline"} color={color} size={22} />
      }}>
        {() => <StackNavFactory screenName="Search" />}
      </Tabs.Screen>
      <Tabs.Screen name="Camera" options={{
        tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? "camera" : "camera-outline"} color={color} size={26} />
      }}>
        {() => <View />}
      </Tabs.Screen>
      <Tabs.Screen name="Notification" options={{
        tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? "heart" : "heart-outline"} color={color} size={22} />
      }}>
        {() => <StackNavFactory screenName="Notification" />}
      </Tabs.Screen>
      <Tabs.Screen name="Me" options={{
        tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? "person" : "person-outline"} color={color} size={22} />
      }}>
        {() => <StackNavFactory screenName="Me" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  )
}