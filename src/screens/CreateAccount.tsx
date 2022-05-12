import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";

export default class Register extends Component {
  //En el state declaramos los campos
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      Nombre: "",
      Email: "",
      Contraseña: "",
      ConfirContra: "",
    };
  }

  //creamos una constante a la cual le asignamos los campos correspondientes a ese state
  Register = () => {
    const { Nombre } = this.state;
    const { Email } = this.state;
    const { Contraseña } = this.state;
    const { ConfirContra } = this.state;

    //

    //usamos el fetch, señalamos el EndPoint o url donde nosotros enviamos la información
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
  };

  render() {
    // const navigation = useNavigation();
    return (
      <SafeAreaView>
        <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
        {/* <View style={stylesB.completo}> */}
        <View style={stylesM.wrapperCA}>
          <Text style={stylesM.textAccount}>NOMBRE</Text>
          <TextInput
            style={stylesM.inputAccount}
            onChangeText={(Nombre) => this.setState({ Nombre })}
          />

          <Text style={stylesM.textAccount}>EMAIL</Text>
          <TextInput
            style={[stylesM.inputAccount, stylesM.textEmailFrame]}
            onChangeText={(Email) => this.setState({ Email })}
          />

          <Text style={stylesM.textAccount}>CONTRASEÑA</Text>
          <TextInput
            style={stylesM.inputAccount}
            onChangeText={(Contraseña) => this.setState({ Contraseña })}
          />

          <Text style={stylesM.textAccount}>CONFIRMAR CONTRASEÑA</Text>
          <TextInput
            style={stylesM.inputAccount}
            onChangeText={(ConfirContra) => this.setState({ ConfirContra })}
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
            onPress={this.Register}

            // onPress={() => navigation.navigate(Balance)}
          >
            <Text style={{fontWeight: "bold", margin: 15, left: 5.5,}}>ENVIAR</Text>
          </TouchableOpacity>
        </View>

        {/* </View> */}
      </SafeAreaView>
    );
  }
}
