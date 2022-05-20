import { View, Text, SafeAreaView, StatusBar, Image } from "react-native";
import React from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";

const Indicators = () => {
  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={[stylesB.completo, stylesM.BacColor]}>
        <View style={stylesM.containerIndicator}>
          <Image
            source={require("./../../assets/img/indicadorUno.png")}
            style={stylesM.indicator}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Indicators;
