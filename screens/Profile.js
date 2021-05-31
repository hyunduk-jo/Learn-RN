import React from 'react';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function Profile({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.userName + " profile"
    })
  }, [])
  return (
    <View style={{ backgroundColor: "black", flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "white" }}>Hello This Is Profile</Text>
    </View>
  )
}