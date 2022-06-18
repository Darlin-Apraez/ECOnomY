import { View, Text, StatusBar, SafeAreaView, Image } from "react-native";
import React, { useRef, useState } from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import BarStatus from "../components/BarStatus";
import LottieView from "lottie-react-native";
import * as Animatable from "react-native-animatable";
import { useRoute } from "@react-navigation/native";

const Splash = ({ navigation }: { navigation: any }) => {
  const animation = useRef(null);

  function navegar() {
    navigation.navigate("Register");
  }
  setTimeout(() => {
    navegar();
  }, 5500);
  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <View style={stylesL.JustifyAlign}>
          <Animatable.View animation="zoomIn" duration={2000} delay={1000}>
            <Image
              source={require("./../../assets/img/logo-ECOnomY.png")}
              style={stylesM.EcoLogo}
            />
          </Animatable.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
