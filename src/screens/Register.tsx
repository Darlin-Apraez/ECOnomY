import { View, Text, Image, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";

const Register = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <Text>Register</Text>
        <Image
          source={require("../../assets/img/ECOnomY.Name.png")}
          style={stylesM.NameScale}
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;
