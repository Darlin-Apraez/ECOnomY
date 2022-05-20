import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";

const History = () => {
  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
            backgroundColor: "red",
          }}
        >
          <Text>History</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default History;
