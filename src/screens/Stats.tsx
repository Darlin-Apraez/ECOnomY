import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";

const Stats = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      {/* <View style={stylesB.completo}> */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
          backgroundColor: "red",
        }}
      >
        <Text>Stats</Text>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Stats;
