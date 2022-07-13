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

const TranExitosa = ({ navigation }: { navigation: any }) => {
  //sonido
  const [sound, setSound] = useState();
  const [cedula, setCedula] = useState("");
  const route = useRoute();
  let data = route.params?.data;
  let sumaData = route.params?.sumaData;

  // let inData = route.params?.data;

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

  let restaData = route.params?.restaData;
  let datosVariable = route.params?.datosVariable;
  let restaData2 = route.params?.restaData2;
  let inDatos = route.params?.inDatos;
  let usuario = route.params?.usuario;
  let op2 = route.params?.op2;
  //dato modificado identificación
  let modification = route.params?.modification;
  let newIdentification = route.params?.newIdentification;
  let changeUser = route.params?.changeUser;
  let changeContra = route.params?.changeContra;

  const send = () => {
    // alert("ENVIO EXITOSO");

    {
      playSound();
    }
    navigation.navigate("DrawerApp", {
      data,
      sumaData,
      datosVariable,
      variante: datosVariable,
      restaData,
      restaData2,
      inDatos,
      usuario,
      op2,
      modification,
      newIdentification,
      changeUser,
      changeContra,
    });
    setTimeout(() => {
      navigation.navigate("Balance", {
        data,
        datosVariable,
        variante: datosVariable,
        restaData2,
        inDatos,
        usuario,
        op2,
        modification,
        newIdentification,
        changeUser,
        changeContra,
      });
    });
  };

  //número de acción sostenible
  //acción 1: siembra de arboles
  // const acc1 = route.params?.acc1;
  // //acción2: limpieza de playas o parques
  // const acc2 = route.params?.acc2;
  // //acción 3: reciclaje
  // const acc3 = route.params?.acc3;

  // let acciones = acc1 || acc2 || acc3;

  // const op2 = usuario + "-" + inDatos + "-" + cedula + "-" + acciones;

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <LotieTranExitosa />
        <View>
          <Text style={stylesM.txtconectar} numberOfLines={3}>
            TRANSACCIÓN EXITOSA
          </Text>
        </View>
        <View>
          <TouchableOpacity style={stylesM.btnQRSend} onPress={send}>
            <Text>CONTINUAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TranExitosa;
