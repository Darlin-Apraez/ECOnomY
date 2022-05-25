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
import React, { Component, useState } from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { validateEmail } from "../utils/helpers";

const Login = ({ navigation }: { navigation: any }) => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const [errorEmail, setErrorEmail] = useState("");

  //validar datos
  const registerUser = () => {
    if (usuario == "") {
      alert("Usuario incorrecto / Completar campo");
    } else {
      console.log("Funciona bro");

      //usamos el fetch, señalamos el EndPoint o url donde nosotros enviamos la información
      fetch("http://192.168.1.14/pruebas/login.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },

        //stringify enviar serializados los campos que necesitemos
        body: JSON.stringify({
          usuario: usuario,
          contraseña: contraseña,
        }),
      })
        .then((respuesta) => respuesta.json())
        .then((responseJson) => {
          alert(responseJson);
          if (responseJson == "Ingreso exitoso") {
            //guardo de forma local el token
            AsyncStorage.setItem("token", "86");
            navigation.navigate("DrawerApp");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // Logeo();
  };

  // const validateData = () => {
  //   setErrorEmail("");
  //   let isValid = true;

  //   if (!validateEmail(Email)) {
  //     setErrorEmail("Debes de ingresar un email válido");
  //     alert("Debes ingresar un Email valido");
  //     isValid = false;
  //   }
  //   return isValid;
  // };

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <View style={stylesM.containerGeneral}>
          <Text style={stylesM.textAccount}>USUARIO</Text>
          <TextInput
            style={stylesM.inputAccount}
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
              onPress={registerUser}
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
