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

const Login = ({ navigation }: { navigation: any }) => {
  const [Email, setEmail] = useState("");
  const [Contraseña, setContraseña] = useState("");

  function Logeo() {
    if (Email == "") {
      alert("Llenar los dos campos");
    } else if (Contraseña == "") {
      alert("Llenar los dos campos");
    } else {
      //usamos el fetch, señalamos el EndPoint o url donde nosotros enviamos la información
      navigation.navigate("DrawerApp");
      fetch("http://192.168.1.16/pruebas/login.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },

        //stringify enviar serializados los campos que necesitemos
        body: JSON.stringify({
          Email: Email,
          Contraseña: Contraseña,
        }),
      })
        .then((respuesta) => respuesta.text())
        .then((responseJson) => {
          alert(responseJson);
          //guardo de forma local el token
          AsyncStorage.setItem("token", "86");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      {/* <View style={stylesB.completo}> */}
      <View>
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

        <TouchableOpacity
          style={{
            backgroundColor: "green",
            width: 100,
            height: 40,
            marginTop: 20,
            marginLeft: 40,
          }}
          onPress={Logeo}
        >
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Login;
