import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';

const LoginLink = styled.Text`
  color: #0095f6;
  font-weight: 600;
  margin-top: 20px;
`;

export default function Welcome({ navigation }) {
  const goToSignup = () => navigation.navigate("Signup")
  const goToLogin = () => navigation.navigate("Login")
  return (
    <AuthLayout>
      <AuthButton disabled={false} onPress={goToSignup} text="Sign Up" />
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>Login</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  )
}