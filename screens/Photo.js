import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { logUserOut } from '../apollo';

export default function Photo({ navigation }) {
  return (
    <View style={{ backgroundColor: "black", flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "white" }}>Hello This Is Photo</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text style={{ color: "white" }}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logUserOut}>
        <Text style={{ color: "white" }}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  )
}