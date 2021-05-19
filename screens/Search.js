import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { isLoggedInVar, tokenVar } from '../apollo';

export default function Search({ navigation }) {
  const logout = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("loggedIn");
    isLoggedInVar(false);
    tokenVar("");
  }
  return (
    <View style={{ backgroundColor: "black", flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "white" }}>Hello This Is Search</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
        <Text style={{ color: "white" }}>Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logout}>
        <Text style={{ color: "white" }}>logout</Text>
      </TouchableOpacity>
    </View>
  )
}