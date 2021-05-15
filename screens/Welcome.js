import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const Logo = styled.Image`
  max-width: 50%;
  height: 100px;
`;

const SignUp = styled.View`
  background-color: #0095f6;
  padding: 7px 10px;
  border-radius: 5px;
`;
const SignUpText = styled.Text`
  color: white;
  font-weight: 600;
`;

const LoginLink = styled.Text`
  color: #0095f6;
  font-weight: 600;
  margin-top: 10px;
`;

export default function Welcome({ navigation }) {
  const goToSignup = () => navigation.navigate("Signup")
  const goToLogin = () => navigation.navigate("Login")
  return (
    <Container>
      <Logo resizeMode="contain" source={require("../assets/logo.png")} />
      <TouchableOpacity onPress={goToSignup}>
        <SignUp>
          <SignUpText>Sign Up</SignUpText>
        </SignUp>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>Login</LoginLink>
      </TouchableOpacity>
    </Container>
  )
}