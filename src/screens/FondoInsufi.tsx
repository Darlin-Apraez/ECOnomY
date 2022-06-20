import {
  Image,
  Platform,
  StatusBar,
  Text,
  TextInput,
  View,
  Clipboard,
  ToastAndroid,
  Alert,
  Appearance,
  ScrollView,
  Linking,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
// import { LotieFondoInsufi } from "./../components/lottie";
// import { LotieTranExitosa } from "./../components/lottie";
const FondoInsufi = () => {
  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>{/* <LotieFondoInsufi /> */}</View>
    </SafeAreaView>
  );
};

export default FondoInsufi;
