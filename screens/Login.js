import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <View>
          <Text>Go to Signup</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}