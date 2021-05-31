import React from 'react';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import useMe from '../hooks/useMe';

export default function Me({ navigation }) {
  const { data } = useMe();
  useEffect(() => {
    navigation.setOptions({
      title: data?.me?.userName
    })
  }, [data])
  console.log(data)
  return (
    <View style={{ backgroundColor: "black", flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "white" }}>Hello This Is Me</Text>
    </View>
  )
}