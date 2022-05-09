import { View, Text, StatusBar, SafeAreaView, Image } from "react-native";
import React, {useRef} from "react";
import { stylesB, stylesL, stylesM, stylesO, stylesS} from "./../appTheme/styles/styles";
import BarStatus from "../components/BarStatus";
import LottieView from 'lottie-react-native';

const Splash = ({ navigation }: { navigation: any }) => {
  const animation = useRef(null);
  function navegar() {navigation.navigate("Register")}
  setTimeout (()=> {navegar()},5500)
  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <Image source={require("./../../assets/img/logo-ECOnomY.png")} style={stylesM.EcoLogo}/>
        <LottieView
        autoPlay
        ref={animation}
        style={stylesM.SplashContain}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../assets/lottie/67943-tree-green.json')}
      />
      </View>  
    </SafeAreaView>
    
  );
};

export default Splash;
