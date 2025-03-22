import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";

const RegisterScreen = () => {

  return (
    <View>
      <Text>Register</Text>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="Register" />
    </View>
  );
};

export default RegisterScreen;
