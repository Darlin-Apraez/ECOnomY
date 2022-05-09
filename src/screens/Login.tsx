import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";

const Login = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
