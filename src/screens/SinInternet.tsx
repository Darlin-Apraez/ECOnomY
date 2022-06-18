import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { LotieInternet } from "./../components/lottie";

const SinInternet = () => {
  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"#FBF7FF"} barStyle={"dark-content"} />
      <View style={[stylesB.completo, stylesM.internet]}>
        <LotieInternet />
        <View>
          <Text style={stylesM.txtconectar} numberOfLines={3}>
            No se puede conectar a una red local.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SinInternet;
