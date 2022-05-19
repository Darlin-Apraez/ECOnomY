import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Alert,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import { stylesM, stylesB } from "../appTheme/styles/styles";

const Register = ({ navigation }: { navigation: any }) => {
  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert("Espera", "¿Seguro que quieres salir?", [
  //       {
  //         text: "Cancelar",
  //         onPress: () => null,
  //         style: "cancel",
  //       },
  //       { text: "Si", onPress: () => BackHandler.exitApp() },
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={[stylesB.completo, stylesM.BacColor]}>
        <View>
          {/* <View> */}
          <Image
            source={require("../../assets/img/ECOnomY.Name.png")}
            style={stylesM.NameScale}
          />
          {/* </View> */}
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateAccount")}
            style={stylesM.buttonCreate}
          >
            <Text style={{ fontSize: 20, marginLeft: 25 }}>CREAR CUENTA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={stylesM.buttonCreate}
          >
            <Text style={{ fontSize: 20, marginLeft: 25 }}>INICIAR SESIÓN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
