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
      Email: "",
      Contraseña: "",
    };
  }

  //creamos una constante a la cual le asignamos los campos correspondientes a ese state
  Loginn = () => {
    const { Email } = this.state;
    const { Contraseña } = this.state;

    // const re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (Email == "") {
      alert("Llenar los dos campos");
    } else if (Contraseña == "") {
      alert("Llenar los dos campos");
    } else {
      //usamos el fetch, señalamos el EndPoint o url donde nosotros enviamos la información
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

      // function navegacion({ navigation }: { navigation: any }) {
      //   navigation.navigate("Balance");
      // }
    }
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
            onChangeText={(Email) => this.setState({ Email })}
          />

          <Text style={stylesM.textAccount}>CONTRASEÑA</Text>
          <TextInput
            style={stylesM.inputAccount}
            onChangeText={(Contraseña) => this.setState({ Contraseña })}
          />

          <TouchableOpacity
            style={{
              backgroundColor: "green",
              width: 100,
              height: 40,
              marginTop: 20,
              marginLeft: 40,
            }}
            onPress={this.Loginn}
          >
            <Text>Enviar</Text>
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </SafeAreaView>
    );
  }
}
