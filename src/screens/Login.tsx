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
import React, { Component } from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";

export default class Login extends Component {
  //En el state declaramos los campos
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      correo: "",
      clave: "",
    };
  }

  //creamos una constante a la cual le asignamos los campos correspondientes a ese state
  Login = () => {
    const { correo } = this.state;
    const { clave } = this.state;

    //usamos el fetch, señalamos el EndPoint o url donde nosotros enviamos la información
    fetch("http://192.168.1.16/pruebas/login.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      //stringify enviar serializados los campos que necesitemos
      body: JSON.stringify({
        correo: correo,
        clave: clave,
      }),
    })
      .then((respuesta) => respuesta.json())
      .then((responseJson) => {
        alert(responseJson);
        //guardo de forma local el token
        AsyncStorage.setItem("token", "86");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //el onChangeText lo utilizamos para cambiar ese contenido y mandarlo directamente a el state

  render() {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
        {/* <View style={stylesB.completo}> */}
        <View>
          <Text style={stylesM.textAccount}>EMAIL</Text>
          <TextInput
            style={stylesM.inputAccount}
            onChangeText={(correo) => this.setState({ correo })}
          />

          <Text style={stylesM.textAccount}>CONTRASEÑA</Text>
          <TextInput
            style={stylesM.inputAccount}
            onChangeText={(clave) => this.setState({ clave })}
          />

          <TouchableOpacity
            style={{
              backgroundColor: "green",
              width: 100,
              height: 40,
              marginTop: 20,
              marginLeft: 40,
            }}
            onPress={this.Login}
          >
            <Text>Enviar</Text>
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </SafeAreaView>
    );
  }
}
