import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import React, { Component, useState, useEffect } from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";

//import ReactNativeBiometrics from "react-native-biometrics";
//import * as Keychain from 'react-native-keychain';
import { validateEmail } from "../utils/helpers";
import { readUser } from "../../api";

let STORAGE_KEY = "@user_input";

const Login = ({ navigation }: { navigation: any }) => {
  const [usuario, setUsuario] = useState("");
  // readUser().then((val) => {
  //   setUsuario(val);
  // });

  const [contraseña, setContraseña] = useState("");
  const [input, setInput] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  //validar datos con bd
  // const registerUser = () => {
  //   if (usuario == "") {
  //     alert("Usuario incorrecto / Completar campo");
  //   } else {
  //     console.log("Funciona bro");

  //     //usamos el fetch, señalamos el EndPoint o url donde nosotros enviamos la información
  //     fetch("http://192.168.1.14/pruebas/login.php", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-type": "application/json",
  //       },

  //       //stringify enviar serializados los campos que necesitemos
  //       body: JSON.stringify({
  //         usuario: usuario,
  //         contraseña: contraseña,
  //       }),
  //     })
  //       .then((respuesta) => respuesta.json())
  //       .then((responseJson) => {
  //         alert(responseJson);
  //         if (responseJson == "Ingreso exitoso") {
  //           //guardo de forma local el token
  //           AsyncStorage.setItem("token", "86");
  //           navigation.navigate("DrawerApp", { usuario: usuario });
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // };
  /////////////////

  const validationLogin = async () => {
    if (usuario == "") {
      alert("Es necesaria la cédula");
      readUser();
    } else if (contraseña == "") {
      alert("Es necesaria la contraseña");
    } else {
      alert("Ingreso exitoso");
      navigation.navigate("DrawerApp", { usuario: usuario });
      // try {
      //   await AsyncStorage.getItem(usuario);
      //   await AsyncStorage.getItem(contraseña);
      //   AsyncStorage.setItem("token", "86");
      //   alert("Ingreso exitoso");
      //   navigation.navigate("DrawerApp", { usuario: usuario });
      // } catch (e) {
      //   alert("Failed to save the data to the storage");
      // }
    }
  };

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <View style={stylesM.containerGeneral}>
          <Text style={stylesM.textAccount}>CÉDULA</Text>
          <TextInput
            style={stylesM.inputAccount}
            keyboardType="numeric"
            onChangeText={(usuario) => setUsuario(usuario)}
          />

          <Text style={stylesM.textAccount}>CONTRASEÑA</Text>
          <TextInput
            secureTextEntry={true}
            style={stylesM.inputAccount}
            onChangeText={(contraseña) => setContraseña(contraseña)}
          />
          <View style={stylesM.containerBotonLogin}>
            <TouchableOpacity
              style={[stylesM.botonGreenLogin]}
              onPress={() => navigation.goBack()}
            >
              <Text style={stylesM.textBotonLogin}>REGRESAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[stylesM.botonGreenLogin]}
              onPress={validationLogin}
            >
              <Text style={stylesM.textBotonLogin}>INGRESAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
