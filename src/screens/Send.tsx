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
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import Icon from "react-native-vector-icons/Ionicons";
import CheckBox from "@react-native-community/checkbox";

const actions = [
  { label: "01-Siembra de arboles" },
  { label: "02-Limpieza de playas" },
  { label: "03-Llevar tus propias bolsas" },
  { label: "04-Reembolso" },
];
const VB = "";
Number(VB);
const Balance = VB;
const VE = "";
// const RESULT = VB - VE;

const Send = ({ navigation }: { navigation: any }) => {
  const [dropdown, setDropdown] = useState(null);

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <View style={stylesM.containerboxSend}>
          <Text style={stylesM.boxSend}>ENVIAR</Text>
        </View>
        <View style={stylesM.containerCant}>
          <Text>CANTIDAD A ENVIAR</Text>
          <TextInput style={stylesM.textInputSend} {...VE} />
          <Text>USUARIO AL QUE ENVIA</Text>
          <TextInput style={stylesM.textInputSend} />
          <Text style={stylesM.textActions}>ACCIONES SOSTENIBLES</Text>
          <Dropdown
            data={actions}
            style={stylesM.dropDown}
            searchPlaceholder="Search"
            labelField="label"
            valueField="value"
            label="Dropdown"
            placeholder="Select item"
            value={dropdown}
            onChange={(item) => {
              setDropdown(item.value);
              console.log("selected", item);
            }}
          />
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
          onPress={() => navigation.navigate("QrReader")}
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
          <TouchableOpacity style={stylesM.btnSend}>
            <Text style={stylesM.textBtnSend}>ENVIAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Send;
