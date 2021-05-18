import { useMutation, gql } from '@apollo/client';
import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { isLoggedInVar } from '../apollo';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { TextInput } from '../components/auth/AuthShared';

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!){
    login(email: $email, password: $password) {
      ok
      token
      error
    }
  }
`;

export default function Login({ route: { params } }) {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      password: params?.password,
      email: params?.email
    }
  });

  const onCompleted = (data) => {
    const { login: { ok, token } } = data;
    if (ok) {
      isLoggedInVar(true);
    }
  }

  const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION, { onCompleted });

  const passwordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  }

  const onValid = async (data) => {
    if (!loading) {
      loginMutation({ variables: { ...data } });
    }
  }
  useEffect(() => {
    register("email", {
      required: true
    });
    register("password", {
      required: true
    });
  }, [register])
  return (
    <AuthLayout>
      <TextInput
        value={watch("email")}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={text => setValue("email", text)}
        autoCapitalize="none"
      />
      <TextInput
        value={watch("password")}
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
      <AuthButton loading={loading} text="Log In" disabled={!watch("email") || !watch("password")} onPress={handleSubmit(onValid)} />
    </AuthLayout>
  )
}