import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  Clipboard,
  Platform,
  ToastAndroid,
  Alert,
} from "react-native";
import React, { useState } from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import QRCode from "react-native-qrcode-svg";
import { useRoute } from "@react-navigation/native";
import { LotieScanQR } from "./../components/lottie";

const Receive = ({ navigation }: { navigation: any }) => {
  // const [usuario, setUsuario] = useState("");
  const route = useRoute();

  //let firstNumber = 10000;
  //y = x++;
  // const aumento = ++firstNumber;
  // const aumento = firstNumber++
  //const lastNumber = 99999;
  //var Aleatorio = firstNumber + Math.floor(Math.random() * lastNumber);
  //const str = Aleatorio.toString();
  //console.log(Aleatorio);

  //const cedula = route.params.usuario;
  //const ced = cedula.toString();

  // let numbers = usuario;
  //const doubled = numbers.map((number) => number);
  // console.log(numbers);
  // const str = numbers;
  let usuario = route.params?.usuario;
  let sumaData = route.params?.sumaData;
  let acm = route.params?.acm;
  let op2 = route.params?.op2;
  //dato modificado identificación
  let modification = route.params?.modification;
  let changeUser = route.params?.changeUser;
  let changeContra = route.params?.changeContra;

  // const CopyWallet = () => {
  //   Clipboard.setString(str);
  //   if (Platform.OS === "android") {
  //     ToastAndroid.show("Dirección copiada", ToastAndroid.SHORT);
  //   } else {
  //     Alert.alert("Dirección copiada");
  //   }
  // };
  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <View style={stylesM.containerboxReceive}>
          <Text style={stylesM.boxReceive}>RECIBIR</Text>
        </View>
        <View style={stylesM.containerQR}>
          {/* <Image
            source={require("./../../assets/img/QR-bordes.png")}
            style={stylesM.imageQR}
          /> */}
          <LotieScanQR />

          {/* <TextInput
            style={stylesM.textInputNumCuenta}
            placeholder="0"
            value={str}
            onChangeText={(usuario) => setUsuario(usuario)}
            editable={false}
          /> */}

          {/* <TouchableOpacity
            activeOpacity={0.8}
            style={stylesM.boton}
            onPress={() => CopyWallet()}
          >
            <Text>Copiar</Text>
          </TouchableOpacity> */}
        </View>
        <TouchableOpacity
          style={stylesM.botonScanSend}
          activeOpacity={0.3}
          onPress={() =>
            navigation.navigate("QrReader", {
              sumaData: sumaData,
              usuario: usuario,
              op2: op2,
              modification: modification,
              changeUser: changeUser,
              changeContra: changeContra,
            })
          }
        >
          <Text style={stylesM.textGenerate}>Escanear QR</Text>
        </TouchableOpacity>

        <View style={stylesM.containerbtns}>
          <TouchableOpacity
            style={stylesM.btnBack}
            onPress={() => navigation.goBack()}
          >
            <Text style={stylesM.textBtnSend}>REGRESAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesM.btnSend}
            activeOpacity={0.3}
            onPress={() => navigation.navigate("History")}
          >
            <Text style={stylesM.textBtnSend}>HISTORIAL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Receive;
