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

const CreateAccount = ({ navigation }: { navigation: any }) => {
  const [Nombre, setNombre] = useState("");
  const [Email, setEmail] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [ConfirContra, setConfirContra] = useState("");

  //creamos una constante a la cual le asignamos los campos correspondientes a ese state
  function Registro() {
    if (Nombre == "") {
      alert("Es necesario el nombre");
    } else if (Email == "") {
      alert("Es necesario el email");
    } else if (Contraseña == "") {
      alert("Es necesaria la contraseña");
    } else if (ConfirContra == "") {
      alert("Es necesario confirmar la contraseña");
    } else if (Contraseña != ConfirContra) {
      alert("Las contraseñas no coinciden");
    } else {
      //usamos el fetch, señalamos el EndPoint o url donde nosotros enviamos la información
      navigation.navigate("DrawerApp");
      fetch("http://192.168.1.16/pruebas/registro.php", {
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
  }

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      {/* <View style={stylesB.completo}> */}
      <View style={stylesM.wrapperCA}>
        <Text style={stylesM.textAccount}>NOMBRE</Text>
        <TextInput
          style={stylesM.inputAccount}
          onChangeText={(Nombre) => setNombre(Nombre)}
        />

        <Text style={stylesM.textAccount}>EMAIL</Text>
        <TextInput
          style={[stylesM.inputAccount, stylesM.textEmailFrame]}
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

        <TouchableOpacity
          style={{
            backgroundColor: "#5CB032",
            width: 105,
            height: 50,
            marginTop: 20,
            marginLeft: 40,
            borderRadius: 8,
            // padding: 13,
            // paddingLeft: 23,
            right: -105,
            top: 50,
          }}
          onPress={Registro}

          // onPress={() => navigation.navigate(Balance)}
        >
          <Text style={{ fontWeight: "bold", margin: 15, left: 5.5 }}>
            ENVIAR
          </Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default CreateAccount;
