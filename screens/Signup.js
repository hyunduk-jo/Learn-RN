import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function Signup({ navigation }) {
  return (
    <View>
      <Text>Signup</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View>
          <Text>Go to Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}