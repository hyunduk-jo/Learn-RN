import React from 'react';
import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
  background-color: #0095f6;
  padding: 15px 10px;
  border-radius: 5px;
  width: 100%;
  opacity: ${props => props.disabled ? "0.5" : "1"}
`;
const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
`;

export default function AuthButton({ onPress, disabled, text }) {
  return (
    <Button disabled={disabled} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  )
}