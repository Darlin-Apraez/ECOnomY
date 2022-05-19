import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
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

const CreateAccount = ({ navigation }: { navigation: any }) => {
  const [Nombre, setNombre] = useState("");
  const [Email, setEmail] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [ConfirContra, setConfirContra] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const validateData = () => {
    setErrorEmail("");
    let isValid = true;

    if (!validateEmail(Email)) {
      setErrorEmail("Debes de ingresar un email válido");
      alert("Debes ingresar un Email valido");
      isValid = false;
    }
    return isValid;
  };

  const validation = () => {
    if (Nombre == "") {
      alert("Es necesario el nombre");
    } else if (!validateData()) {
      return;
    } else if (Contraseña == "") {
      alert("Es necesaria la contraseña");
    } else if (ConfirContra == "") {
      alert("Es necesario confirmar la contraseña");
    } else if (Contraseña != ConfirContra) {
      alert("Las contraseñas no coinciden");
    } else {
      //usamos el fetch, señalamos el EndPoint o url donde nosotros enviamos la información
      navigation.navigate("DrawerApp");
      fetch("http://192.168.1.15/pruebas/registro.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        //stringify enviar serializados los campos que necesitemos
        body: JSON.stringify({
          nombre: Nombre,
          Email: Email,
          Contraseña: Contraseña,
          ConfirContra: ConfirContra,
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
      <View style={stylesB.completo}>
        <View style={stylesM.wrapperCA}>
          <Text style={stylesM.textAccount}>NOMBRE</Text>
          <TextInput
            style={stylesM.inputAccount}
            onChangeText={(Nombre) => setNombre(Nombre)}
          />

          <Text style={stylesM.textAccount}>EMAIL</Text>
          <TextInput
            style={stylesM.inputAccount}
            onChangeText={(Email) => setEmail(Email)}
          />

          <Text style={stylesM.textAccount}>CONTRASEÑA</Text>
          <TextInput
            style={stylesM.inputAccount}
            onChangeText={(Contraseña) => setContraseña(Contraseña)}
          />

          <Text style={stylesM.textAccount}>CONFIRMAR CONTRASEÑA</Text>
          <TextInput
            style={stylesM.inputAccount}
            onChangeText={(ConfirContra) => setConfirContra(ConfirContra)}
          />
        </View>
        <TouchableOpacity
          style={[
            stylesM.botonGreen,
            stylesL.JustifyAlign,
            stylesO.botonGreen_alineacion,
          ]}
          onPress={validation}

          // onPress={() => navigation.navigate(Balance)}
        >
          <Text style={stylesM.textBoton}>REGISTRAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;
