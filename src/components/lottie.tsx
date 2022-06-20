import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";

const LotieInternet = () => {
  return (
    <LottieView
      style={stylesM.lottieinternet}
      source={require("./../screens/Lottie/noInternet.json")}
      autoPlay={true}
      loop={true}
      speed={0.5}
    />
  );
};

const LotieTranExitosa = () => {
  return (
    <LottieView
      style={stylesM.lottieTranExitosa}
      source={require("./../screens/Lottie/TranExitosa (2).json")}
      autoPlay={true}
      loop={true}
      speed={1}
    />
  );
};

const LotieTranFallida = () => {
  return (
    <LottieView
      style={stylesM.lottieTranFallida}
      source={require("./../screens/Lottie/TransError.json")}
      autoPlay={true}
      loop={true}
      speed={1}
    />
  );
};

const LotieScanQR = () => {
  return (
    <LottieView
      style={stylesM.lottieScanQR}
      source={require("./../screens/Lottie/scanQR.json")}
      autoPlay={true}
      loop={true}
      speed={1}
    />
  );
};

// const LotieFondoInsufi = () => {
//   return (
//     <LottieView
//       style={stylesM.lottieFndInsuf}
//       source={require("./../../assets/lottie/fndInsufi.json")}
//       autoPlay={true}
//       loop={true}
//       speed={1}
//     />
//   );
// };

export {
  LotieInternet,
  LotieTranExitosa,
  LotieTranFallida,
  LotieScanQR,
  //LotieFondoInsufi,
};
