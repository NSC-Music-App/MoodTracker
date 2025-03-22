import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";

const LoginScreen = () => {
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email or Username" />
      <TextInput placeholder="Password"  />
      <Button title="Login" />
    </View>
  );
};

export default LoginScreen;
