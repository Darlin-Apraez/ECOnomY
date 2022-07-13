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
import { Audio } from "expo-av";
import { LotieTranExitosa } from "./../components/lottie";

const QRSendPoint = ({ navigation }: { navigation: any }) => {
  const route = useRoute();
  const [valorc, onChangeText] = useState("");
  const [cedula, setCedula] = useState("");
  const [datos, setDatos] = useState("");
  //sonido
  const [sound, setSound] = useState();
  //   const datos =
  //     "El usuario: " + cedula + "\nCantidad de ECOpuntos enviados: " + valorc;
  //Función sonido
  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("./../../assets/audio/transaction.mp3"),
      { shouldPlay: true }
    );
    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();
  }

  const sendOnline = () => {
    // alert("ENVIO EXITOSO");

    // {
    //   playSound();
    // }
    //navigation.navigate("TranExitosa", { data: data });
    alert("Modo online temporalmente desactivado");
  };

  const { data } = route.params;
  let inDatos = route.params?.datos;
  let inSumas = route.params?.inSuma;
  let datosVariable = route.params?.datosVariable;
  let usuario = route.params?.usuario;
  let op2 = route.params?.op2;
  let modification = route.params?.modification;
  let newIdentification = route.params?.newIdentification;
  let changeUser = route.params?.changeUser;
  let changeContra = route.params?.changeContra;

  const send = () => {
    // alert("ENVIO EXITOSO");
    const restaData = Number(inSumas) - Number(inDatos);
    const restaData2 = Number(datosVariable) - Number(inDatos);
    const sumaData = Number(inSumas) + Number(inSumas);
    navigation.navigate("TranExitosa", {
      restaData: restaData,
      sumaData: sumaData,
      datosVariable: datosVariable,
      restaData2: restaData2,
      inDatos: inDatos,
      usuario: usuario,
      op2: op2,
      modification: modification,
      newIdentification: newIdentification,
      changeUser: changeUser,
      changeContra: changeContra,
    });
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
            value={inDatos}
            //getRef={cedula}
          />
        </View>
        <View>
          <TouchableOpacity style={stylesM.btnQRConfirm} onPress={send}>
            <Text>CONTINUAR</Text>
          </TouchableOpacity>
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
