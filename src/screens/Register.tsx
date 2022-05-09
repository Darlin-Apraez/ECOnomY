import { View, Text, Image, StatusBar, SafeAreaView} from "react-native";
import React from "react";
import { stylesB, stylesL, stylesM, stylesO, stylesS} from "./../appTheme/styles/styles";


const Register = () => {
  return (
    <View>
      <Image source={require("../../assets/img/ECOnomY.Name.png")} style={stylesM.NameScale}/>
    </View>
  );
};

export default Register;
