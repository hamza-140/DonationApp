import React from 'react';
import {SafeAreaView} from 'react-native';
import {Input} from 'react-native-elements';
import globalStyle from '../../assets/styles/globalStyle';

const Login = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Input label="Email"></Input>
      <Input label="Password" placeholder="****"></Input>
    </SafeAreaView>
  );
};

export default Login;
