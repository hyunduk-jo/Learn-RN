import AuthLayout from '../components/auth/AuthLayout';
import AuthButton from '../components/auth/AuthButton';
import React, { useRef, useEffect } from 'react';
import { TextInput } from '../components/auth/AuthShared';
import { useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';

const CREATE_USER = gql`
  mutation createUser($email: String!, $firstName: String!, $lastName: String, $userName: String!, $password: String!){
    createUser(email: $email, firstName: $firstName, lastName: $lastName, userName: $userName, password: $password){
      ok
      error
    }
  }
`;

export default function Signup({ navigation }) {
  const { register, handleSubmit, setValue, getValues, watch } = useForm();

  const onCompleted = (data) => {
    const { createUser: { ok } } = data;
    const { email, password } = getValues();
    if (ok) {
      navigation.navigate("Login", {
        email,
        password
      })
    }
  }

  const [createUserMutation, { loading }] = useMutation(CREATE_USER, { onCompleted });

  const lastNameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  }

  useEffect(() => {
    register("firstName", {
      required: true,
    });
    register("lastName", {
      required: true,
    });
    register("userName", {
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
    if (!loading) {
      createUserMutation({ variables: { ...data } })
    }
  }
  return (
    <AuthLayout>
      <TextInput
        autoFocus
        placeholder="First Name"
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
        onChangeText={text => setValue("firstName", text)}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(userNameRef)}
        onChangeText={text => setValue("lastName", text)}
      />
      <TextInput
        ref={userNameRef}
        placeholder="User Name"
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
        autoCapitalize="none"
        onChangeText={text => setValue("userName", text)}
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
      <AuthButton
        text="Sign Up"
        loading={loading}
        disabled={
          !watch("email") |
          !watch("firstName") |
          !watch("lastName") |
          !watch("userName") |
          !watch("password")
        }
        onPress={handleSubmit(onValid)}

      />
    </AuthLayout>
  )
}