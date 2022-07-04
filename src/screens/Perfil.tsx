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

const Perfil = ({ navigation }: { navigation: any }) => {
  const route = useRoute();
  let usuario = route.params?.usuario;
  let contraseña = route.params?.contraseña;

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <TouchableOpacity
          style={stylesM.botonScanSend}
          activeOpacity={0.3}
          onPress={() =>
            navigation.navigate("EditarDatos", {
              usuario: usuario,
              contraseña: contraseña,
            })
          }
        >
          <Text>Editar datos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesM.botonScanSend}
          activeOpacity={0.3}
          onPress={() => navigation.navigate("History", {})}
        >
          <Text>Historial</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesM.botonScanSend}
          activeOpacity={0.3}
          onPress={() => navigation.navigate("Indicators", {})}
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
