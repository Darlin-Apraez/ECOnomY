import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  ToastAndroid,
  Clipboard,
  Alert,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import QRCode from "react-native-qrcode-svg";

const GenerateQR = ({ navigation }: { navigation: any }) => {
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
        <View style={{ marginTop: 20 }}>
          <QRCode
            value="https://humanenergysolutions.com/"
            // logo={logoImg}
            // logoSize={100}
            size={250}
          />
          <TextInput
            style={stylesM.input}
            placeholder="useless placeholder"
            value={str}
          />
          <Text>{Aleatorio}</Text>
          <TouchableOpacity
            style={stylesB.body}
            // onPress={() =>
            //   navigation.navigate("A donde tenga que ir")
            // }
          >
            <Text>Enviar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={stylesM.boton}
            onPress={() => CopyWallet()}
          >
            <Text>Copiar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GenerateQR;
