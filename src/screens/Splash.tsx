import { View, Text, StatusBar, SafeAreaView, Image } from "react-native";
import React from "react";
import { stylesB, stylesL, stylesM, stylesO, stylesS} from "./../appTheme/styles/styles";
import BarStatus from "../components/BarStatus";

const Splash = () => {
  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <Image source={require("./../../assets/img/visto-bueno.png")}/>
      </View>  
    </SafeAreaView>
    
  );
};

export default Splash;
