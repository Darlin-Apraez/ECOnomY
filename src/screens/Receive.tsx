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
import React from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import QRCode from "react-native-qrcode-svg";

const Receive = ({ navigation }: { navigation: any }) => {
  const firstNumber = 10000;
  const lastNumber = 99999;
  var Aleatorio = firstNumber + Math.floor(Math.random() * lastNumber);
  const str = Aleatorio.toString();
  console.log(Aleatorio);

  const CopyWallet = () => {
    Clipboard.setString(str);
    if (Platform.OS === "android") {
      ToastAndroid.show("Dirección copiada", ToastAndroid.SHORT);
    } else {
      Alert.alert("Dirección copiada");
    }
  };
  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <View style={stylesM.containerboxReceive}>
          <Text style={stylesM.boxReceive}>RECIBIR</Text>
        </View>
        <View style={stylesM.containerQR}>
          <QRCode
            value="https://humanenergysolutions.com/"
            // logo={logoImg}
            // logoSize={100}
            size={250}
          />
          <TextInput
            style={stylesM.textInputNumCuenta}
            placeholder="0"
            value={str}
            editable={false}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={stylesM.boton}
            onPress={() => CopyWallet()}
          >
            <Text>Copiar</Text>
          </TouchableOpacity>
        </View>

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
