import React from 'react';
import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';
import styled from 'styled-components/native';


const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 0px 40px;
`;

const Logo = styled.Image`
  max-width: 50%;
  height: 100px;
  width: 100%;
  margin: 0 auto;
`;

export default function AuthLayout({ children }) {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }
  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={dismissKeyboard} disabled={Platform.OS === "web"}>
      <Container>
        <KeyboardAvoidingView style={{ width: "100%" }} behavior="position" keyboardVerticalOffset={Platform.OS === "ios" ? 30 : -300}>
          <Logo resizeMode="contain" source={require("../../assets/logo.png")} />
          {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  )
}