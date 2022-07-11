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
import { useRoute } from "@react-navigation/native";

//import ReactNativeBiometrics from "react-native-biometrics";
//import * as Keychain from 'react-native-keychain';
import { validateEmail } from "../utils/helpers";
import { getData } from "../../api";

let STORAGE_KEY = "@user_input";

const Login = ({ navigation }: { navigation: any }) => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [input, setInput] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const route = useRoute();
  let modification = route.params?.modification;

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

  const componentDid = () => {
    AsyncStorage.getItem(usuario).then((value) => useState({ usuario: value }));
    AsyncStorage.getItem(contraseña).then((value) =>
      useState({ contraseña: value })
    );
  };

  const validationLogin = async () => {
    // const [inputUsername, setInputUsername] = useState("");
    // const [inputPassword, setInputpassword] = useState("");
    // const myUsername = usuario;
    // const myPassword = contraseña;
    // if (inputUsername == "" && inputPassword == "") {
    //   alert("Es necesaria la cédula y la contraseña");
    // } else if (inputUsername != myUsername && inputPassword != myPassword) {
    //   alert("Cuenta no encontrada");
    // } else if (inputUsername == myUsername && inputPassword == "") {
    //   alert("Contraseña vacia");
    // } else if (inputUsername == "" && inputPassword == myPassword) {
    // } else if (inputUsername == myUsername && inputPassword == myPassword) {
    //   navigation.navigate("DrawerApp", { usuario: usuario });
    // } else {
    //   alert("Failed to save the data to the storage");
    // }
    navigation.navigate("DrawerApp", {
      usuario: usuario,
      contraseña: contraseña,
      modification: modification,
    });
    setTimeout(() => {
      navigation.navigate("Balance", {
        usuario,
        contraseña,
        modification: modification,
      });
    });

    // try {
    //   await AsyncStorage.getItem(usuario).then((value) =>
    //     useState({ usuario: value })
    //   );
    //   await AsyncStorage.getItem(contraseña).then((value) =>
    //     useState({ contraseña: value })
    //   );
    //   getData();
    //   alert("Ingreso exitoso");
    //   navigation.navigate("DrawerApp", { usuario: usuario });
    // } catch (error) {
    //   alert("Failed to save the data to the storage");
    // }

    // try {
    //   await AsyncStorage.getItem(usuario);
    //   await AsyncStorage.getItem(contraseña);
    //   AsyncStorage.setItem("token", "86");
    //   alert("Ingreso exitoso");
    //   navigation.navigate("DrawerApp", { usuario: usuario });
    // } catch (e) {
    //   alert("Failed to save the data to the storage");
    // }
  };

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <View style={stylesM.containerGeneral}>
          <Text style={stylesM.textAccount}>IDENTIFICACIÓN</Text>
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
