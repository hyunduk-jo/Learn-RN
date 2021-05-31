import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native';
import styled from 'styled-components/native';

const Input = styled.TextInput``;

export default function Search({ navigation }) {
  const { setValue, register, watch } = useForm();
  const SearchBox = () => <TextInput
    style={{ backgroundColor: "white" }}
    placeholderTextColor="black"
    placeholder="Search photos"
    autoCapitalize="none"
    returnKeyLabel="Search"
    returnKeyLabel="search"
    onChangeText={text => setValue("term", text)}
  />
  useEffect(() => {
    navigation.setOptions({
      headerTitle: SearchBox
    });
    register("term");
  }, [])
  console.log(watch())
  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => Keyboard.dismiss()} disabled={Platform.OS === "web"}>
      <View style={{ backgroundColor: "black", flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "white" }}>Hello This Is Search</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
          <Text style={{ color: "white" }}>Photo</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}