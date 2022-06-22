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

  let inSuma = route.params?.suma;
  let datoResta = route.params?.datoResta;
  let datosVariable = route.params?.datosVariable;
  const cero = 0;
  const zero = String(cero);

  const datos = valorc;
  const valor = () => {
    if (valorc === "") {
      alert("Llenar campo cantidad");
    } else if (cedula === "") {
      alert("Llenar campo cédula");
    } else if (valorc > datosVariable) {
      alert("El valor a enviar supera su balance, Fondos insuficientes.");
    } else if (valorc >= zero) {
      alert("Su balance es cero");
    } else {
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
                inSuma: inSuma,
                datosVariable: datosVariable,
              }),
          },
        ]
      );
    }

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
          <Text>BALANCE</Text>
          <Text style={stylesM.textInput}>{datosVariable}</Text>
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
