import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  KeyboardAvoidingView,
} from "react-native";
import React, { Component, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { validateEmail } from "../utils/helpers";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CreateAccount = ({ navigation }: { navigation: any }) => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confircontra, setConfirContra] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

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

  const validation = () => {
    if (usuario == "") {
      alert("Es necesario el usuario");
    } else if (contraseña == "") {
      alert("Es necesaria la contraseña");
    } else if (contraseña == "") {
      alert("Es necesario confirmar la contraseña");
    } else if (contraseña != confircontra) {
      alert("Las contraseñas no coinciden");
    } else {
      //usamos el fetch, señalamos el EndPoint o url donde nosotros enviamos la información
      navigation.navigate("DrawerApp");
      fetch("http://192.168.1.14/pruebas/newregistro.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        //stringify enviar serializados los campos que necesitemos
        body: JSON.stringify({
          usuario: usuario,
          contraseña: contraseña,
          confircontra: confircontra,
        }),
      })
        .then((respuesta) => respuesta.text())
        .then((responseJson) => {
          alert(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <KeyboardAvoidingView
        contentContainerStyle={[stylesB.completo, stylesO.completo__flexGrow]}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled
        enableOnAndroid={true}
      >
        <View style={stylesM.containerInterno}>
          <View style={stylesM.wrapperCA}>
            {/* <Text style={stylesM.textAccount}>NOMBRE</Text>
            <TextInput
              style={stylesM.inputAccount}
              onChangeText={(Nombre) => setNombre(Nombre)}
            /> */}

            <Text style={stylesM.textAccount}>USUARIO</Text>
            <TextInput
              style={stylesM.inputAccount}
              onChangeText={(usuario) => setUsuario(usuario)}
            />

            <Text style={stylesM.textAccount}>CONTRASEÑA</Text>
            <TextInput
              style={stylesM.inputAccount}
              onChangeText={(contraseña) => setContraseña(contraseña)}
            />

            <Text style={stylesM.textAccount}>CONFIRMAR CONTRASEÑA</Text>
            <TextInput
              style={stylesM.inputAccount}
              onChangeText={(confircontra) => setConfirContra(confircontra)}
            />
          </View>
          <View style={stylesM.containerCaRegister}>
            <TouchableOpacity
              style={[stylesM.botonGreen, stylesO.botonGreen_alineacion]}
              onPress={validation}
            >
              <Text style={stylesM.textBoton}>REGISTRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateAccount;
