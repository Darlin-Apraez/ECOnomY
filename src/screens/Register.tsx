import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";
import { stylesM, stylesB } from '../appTheme/styles/styles';

const Register = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={stylesB.body}>

      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={[stylesB.completo,
      stylesM.BacColor,
      ]}>
        {/* <View style={stylesB.completo}>  */}
        {/* <View style={{backgroundColor:"red"}}> */}
        <View>
          {/* <View> */}
          <Image source={require("../../assets/img/ECOnomY.Name.png")} style={stylesM.NameScale}/>
         {/* </View> */}
          <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")} style={stylesM.buttonCreate}>
          <Text style={{fontSize:20, marginLeft: 25,}}>CREAR CUENTA</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate("Login")} style={stylesM.buttonCreate}>
          <Text style={{fontSize:20, marginLeft: 25,}}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}

      {/* </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Register;
