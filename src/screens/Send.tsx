import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//import QRCode from "react-native-qrcode-svg";
import QRCode from "react-qr-code";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import CheckBox from "@react-native-community/checkbox";

// const actions = [
//   { label: "01-Siembra de arboles" },
//   { label: "02-Limpieza de playas" },
//   { label: "03-Llevar tus propias bolsas" },
//   { label: "04-Reembolso" },
// ];

// const doubled = actions.map((text) => text);

const Send = ({ navigation }: { navigation: any }) => {
  const [dropdown, setDropdown] = useState(null);
  const route = useRoute();
  const [valorc, onChangeText] = useState("");
  const [cedula, setCedula] = useState("");

  var VB = 95;
  const VF = 100;
  let VE = "";

  const datos =
    "El usuario con cédula #: " +
    cedula +
    "\n te envía: " +
    valorc +
    " " +
    "ECOpuntos";
  const valor = () => {
    Alert.alert(
      "Confirmación de envío",
      "¿Esta seguro de los datos registrados para el envío?",
      [
        {
          text: "Cancelar",
          onPress: () => navigation.goBack(),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () =>
            navigation.navigate("QRSendPoint", {
              datos: datos,
            }),
        },
      ]
    );
    //   alert(
    //     "Confirma el envío de esta cantidad de ECOpuntos..." +
    //       "ECOpunto(s) enviado(s) " +
    //       "\nCantidad enviada: " +
    //       valorc +
    //       "\nCédula: " +
    //       cedula
    //   );
    //   navigation.navigation("Balance", { valorc: valorc });
    // };
    // console.log(valor);
  };

  return (
    <KeyboardAwareScrollView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <View style={stylesM.containerboxSend}>
          <Text style={stylesM.boxSend}>ENVIAR</Text>
        </View>
        <View style={stylesM.containerCant}>
          <Text>CANTIDAD A ENVIAR</Text>
          <TextInput
            style={stylesM.textInputSend}
            keyboardType="numeric"
            onChangeText={(text) => onChangeText(text)}
            value={valorc}
          />
          <Text>CÉDULA A LA QUE ENVIA</Text>
          <TextInput
            style={stylesM.textInputSend}
            keyboardType="numeric"
            value={cedula}
            onChangeText={(text) => setCedula(text)}
          />
          {/* <Text style={stylesM.textActions}>ACCIONES SOSTENIBLES</Text>
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
          /> */}
        </View>
        {/* <View style={stylesM.containerQRSend}>
          {/* <QRCode
            //value={cedula}
            // logo={logoImg}
            // logoSize={100}
            size={150}
            value={datos}
          /> */}
        {/*<Image
            source={require("./../../assets/img/QR-bordes.png")}
            style={stylesM.imageQR}
          />
        </View> */}
        {/* <TouchableOpacity
          style={stylesM.botonScanSend}
          activeOpacity={0.3}
          onPress={() => navigation.navigate("QrReader")}
        >
          <Text style={stylesM.textGenerate}>Escanear QR</Text>
        </TouchableOpacity> */}
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
    </KeyboardAwareScrollView>
  );
};

export default Send;
