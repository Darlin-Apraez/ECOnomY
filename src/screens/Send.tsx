import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import Icon from "react-native-vector-icons/Ionicons";
import CheckBox from "@react-native-community/checkbox";

const Send = ({ navigation }: { navigation: any }) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <View style={stylesM.containerboxSend}>
          <Text style={stylesM.boxSend}>ENVIAR</Text>
        </View>
        <View style={stylesM.ContainerTitulo}>
          <Text style={stylesM.textTitulo}>SELECCIONE EL ROL DEL RECEPTOR</Text>
        </View>
        <View style={stylesM.containerReceptor}>
          {/* <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={stylesM.checkbox}
          /> */}
          <TouchableOpacity style={stylesM.botonCheck}>
            <Icon name="checkbox-outline" size={30} color="#65C82C" />
          </TouchableOpacity>
          <Image
            source={require("./../../assets/img/ECOamIgo.png")}
            style={stylesM.imgAmigo}
          />

          <TouchableOpacity style={stylesM.botonCheck}>
            <Icon name="checkbox-outline" size={30} color="#65C82C" />
          </TouchableOpacity>
          <Image
            source={require("./../../assets/img/ECOafiLiado.png")}
            style={stylesM.imgAmigo}
          />
        </View>
        <View style={stylesM.containerCant}>
          <Text>CANTIDAD A ENVIAR</Text>
          <TextInput style={stylesM.textInputSend} />
          <Text>NÚMERO AL QUE ENVIA</Text>
          <TextInput style={stylesM.textInputSend} />
        </View>
        <View style={stylesM.containerQRSend}>
          <Image
            source={require("./../../assets/img/QRhumanenergy.jpeg")}
            style={stylesM.imageQR}
          />
        </View>
        <TouchableOpacity
          style={stylesM.botonScanSend}
          activeOpacity={0.3}
          onPress={() => navigation.navigate("ReaderQR")}
        >
          <Text style={stylesM.textGenerate}>Escanear QR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesM.btnSend}>
          <Text style={stylesM.textBtnSend}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Send;
