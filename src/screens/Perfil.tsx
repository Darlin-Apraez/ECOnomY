import {
  Image,
  Platform,
  StatusBar,
  Text,
  TextInput,
  View,
  Clipboard,
  ToastAndroid,
  Alert,
  Appearance,
  ScrollView,
  Linking,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { LotieTranExitosa } from "./../components/lottie";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { Audio } from "expo-av";
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo";

const Perfil = ({ navigation }: { navigation: any }) => {
  const route = useRoute();
  let usuario = route.params?.usuario;
  let contraseña = route.params?.contraseña;
  let modification = route.params?.modification;
  let datosVariable = route.params?.datosVariable;
  let data = route.params?.data;
  let nuevoUsuario = route.params?.nuevoUsuario;
  let newIdentification = route.params?.newIdentification;

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        {/* <TouchableOpacity
          style={stylesM.return}
          onPress={() =>
            navigation.navigate("Balance", {
              usuario: usuario,
              contraseña: contraseña,
              modification: modification,
              datosVariable: datosVariable,
              data: data,
            })
          }
        >
          <Icon name="chevron-left" size={50} color="#5cb032" />
        </TouchableOpacity> */}
        <TouchableOpacity
          style={stylesM.botonScanSend}
          activeOpacity={0.3}
          onPress={() =>
            navigation.navigate("EditarDatos", {
              usuario: usuario,
              contraseña: contraseña,
              datosVariable: datosVariable,
              modification: modification,
              nuevoUsuario: nuevoUsuario,
              newIdentification: newIdentification,
            })
          }
        >
          <Text>Editar datos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesM.botonScanSend}
          activeOpacity={0.3}
          onPress={() =>
            navigation.navigate("History", { datosVariable: datosVariable })
          }
        >
          <Text>Historial</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesM.botonScanSend}
          activeOpacity={0.3}
          onPress={() =>
            navigation.navigate("Indicators", { datosVariable: datosVariable })
          }
        >
          <Text>Indicadores</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => navigation.navigate("Balance", {})}
        >
          <Image
            source={require("./../../assets/img/siembraArbol.jpg")}
            style={stylesM.siembra}
          />
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default Perfil;
