
import React from 'react'
import Container from '../../components/Container';
import { View, Text, Button } from 'react-native';
import Props from './props';

const Login = (props: Props) => {


  return (
    <Container
      containerStyle={{
      }}
    >
      <Text>Login Screen</Text>

      <Button
        title={'Login'}
        onPress={() => {

        }}
      />

      <Button
        title={'SignUp'}
        onPress={() => {

        }}
      />
    </Container>
  );

}

export default Login;