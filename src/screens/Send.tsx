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
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import CheckBox from "@react-native-community/checkbox";

const actions = [
  { label: "01-Siembra de arboles" },
  { label: "02-Limpieza de playas" },
  { label: "03-Llevar tus propias bolsas" },
  { label: "04-Reembolso" },
];

const doubled = actions.map((text) => text);

const Send = ({ navigation }: { navigation: any }) => {
  const [dropdown, setDropdown] = useState(null);
  const route = useRoute();
  const [value, onChangeText] = useState("");
  const [cedula, setCedula] = useState("");

  var VB = 95;
  const VF = 100;
  let VE = "";

  const valor = () => {
    alert(
      "ECOpunto(s) enviado(s) " +
        "\nCantidad enviada: " +
        value +
        "\nCédula: " +
        cedula +
        "\nTipo de acción: " +
        doubled
    );
  };
  console.log(valor);

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <View style={stylesM.containerboxSend}>
          <Text style={stylesM.boxSend}>ENVIAR</Text>
        </View>
        <View style={stylesM.containerCant}>
          <Text>BALANCE</Text>
          <Text style={stylesM.textBoxSend}>{route.params.VB} </Text>
          <Text>CANTIDAD A ENVIAR</Text>
          <TextInput
            style={stylesM.textInputSend}
            keyboardType="numeric"
            {...route.params.VE}
            //key={VE}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
          {/* <Text style={stylesM.textInputSend}>{route.params.VE}</Text> */}
          <Text>CÉDULA A LA QUE ENVIA</Text>
          <TextInput
            style={stylesM.textInputSend}
            keyboardType="numeric"
            value={cedula}
            onChangeText={(text) => setCedula(text)}
          />
          <Text style={stylesM.textActions}>ACCIONES SOSTENIBLES</Text>
          <Dropdown
            data={actions}
            style={stylesM.dropDown}
            searchPlaceholder="Search"
            labelField="label"
            valueField="value"
            label="Dropdown"
            placeholder="Seleccionar acción"
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
          <TouchableOpacity style={stylesM.btnSend} onPress={valor}>
            <Text
              style={stylesM.textBtnSend}
              //onPress={() => alert(RESULT + " ECOpuntos enviados")} enviado
            >
              ENVIAR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Send;
