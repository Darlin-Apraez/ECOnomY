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
  const route = useRoute();
  const { data } = route.params;
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

  const send = () => {
    // alert("ENVIO EXITOSO");

    {
      playSound();
    }
    navigation.navigate("Balance", { data });
  };
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
