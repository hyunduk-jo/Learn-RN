import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { TextInput } from '../components/auth/AuthShared';

export default function Login() {
  const { register, handleSubmit, setValue } = useForm();

  const passwordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  }

  const onValid = (data) => {
    console.log(data)
  }
  useEffect(() => {
    register("email");
    register("password");
  }, [register])
  return (
    <AuthLayout>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={text => setValue("email", text)}
        autoCapitalize="none"
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        returnKeyType="done"
        lastOne={true}
        onSubmitEditing={handleSubmit(onValid)}
        onChangeText={text => setValue("password", text)}
        autoCapitalize="none"
      />
      <AuthButton text="Log In" disabled={false} onPress={handleSubmit(onValid)} />
    </AuthLayout>
  )
}