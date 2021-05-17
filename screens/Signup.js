import AuthLayout from '../components/auth/AuthLayout';
import AuthButton from '../components/auth/AuthButton';
import React, { useRef, useEffect } from 'react';
import { TextInput } from '../components/auth/AuthShared';
import { useForm } from 'react-hook-form';

export default function Signup() {
  const { register, handleSubmit, setValue } = useForm();

  const lastNameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  }

  useEffect(() => {
    register("firstname", {
      required: true,
    });
    register("lastname", {
      required: true,
    });
    register("username", {
      required: true,
    });
    register("email", {
      required: true,
    });
    register("password", {
      required: true,
    });
  }, [register])

  const onValid = (data) => {
    console.log(data)
  }
  return (
    <AuthLayout>
      <TextInput
        autoFocus
        placeholder="First Name"
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
        onChangeText={text => setValue("firstname", text)}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(userNameRef)}
        onChangeText={text => setValue("lastname", text)}
      />
      <TextInput
        ref={userNameRef}
        placeholder="User Name"
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
        autoCapitalize="none"
        onChangeText={text => setValue("username", text)}
      />
      <TextInput
        ref={emailRef}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        autoCapitalize="none"
        onChangeText={text => setValue("email", text)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        returnKeyType="done"
        lastOne={true}
        autoCapitalize="none"
        onChangeText={text => setValue("password", text)}
        onSubmitEditing={handleSubmit(onValid)}
      />
      <AuthButton text="Sign Up" disabled={false} onPress={handleSubmit(onValid)} />
    </AuthLayout>
  )
}