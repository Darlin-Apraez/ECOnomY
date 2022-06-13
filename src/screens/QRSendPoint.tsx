import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Alert,
  BackHandler,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import QRCode from "react-qr-code";
import { useRoute } from "@react-navigation/native";

const QRSendPoint = ({ navigation }: { navigation: any }) => {
  const route = useRoute();
  const [valorc, onChangeText] = useState("");
  const [cedula, setCedula] = useState("");
  const [datos, setDatos] = useState("");
  //   const datos =
  //     "El usuario: " + cedula + "\nCantidad de ECOpuntos enviados: " + valorc;
  const sendOnline = () => {
    alert("ENVIO EXITOSO");
    navigation.navigate("Balance");
  };

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <View style={stylesM.containerTexto}>
          <Text>
            Si estas cerca de tú ECOamigo o ECOafiliado, escanea este QR para
            que el otro ECOamigo o ECOafiliado reciba tus ECOpuntos.
          </Text>
        </View>
        <View style={stylesM.containerQRSend}>
          <QRCode
            //value={cedula}
            // logo={logoImg}
            // logoSize={100}
            size={150}
            value={route.params.datos}
            //getRef={cedula}
          />
        </View>

        <View style={stylesM.containerTextoDos}>
          <Text>
            Si "NO" estas cerca de tú ECOamigo o ECOafiliado, presiona el boton
            para enviar los ECOpuntos.
          </Text>
          <View style={[stylesM.containerBtnQR, stylesL.JustifyAlign]}>
            <TouchableOpacity style={stylesM.btnQRSend} onPress={sendOnline}>
              <Text style={stylesM.txtBtnQR}>ENVIAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default QRSendPoint;
