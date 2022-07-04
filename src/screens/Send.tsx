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
import Icon from "react-native-vector-icons/Entypo";
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
  const [usuario, setUsuario] = useState("");
  const [accsos, setAccsos] = useState("");

  let inSuma = route.params?.suma;
  let datoResta = route.params?.datoResta;
  let datosVariable = route.params?.datosVariable;

  const cero = 0;
  const zero = String(cero);

  //primer número random para incluir en codificación
  let firstNumber = 100;
  const lastNumber = 1000;
  var Aleatorio = firstNumber + Math.floor(Math.random() * lastNumber);
  const codificacion = Aleatorio.toString();
  console.log("codificacion: " + codificacion);

  const datos = valorc;
  const valor = () => {
    if (valorc === "") {
      alert("Llenar campo cantidad");
    } else if (cedula === "") {
      alert("Llenar campo identificación");
    } else if (datos > datosVariable) {
      alert("El valor a enviar supera su balance, Fondos insuficientes.");
    } else if (datosVariable == zero) {
      alert("Su balance es cero");
    } else if (datos == zero) {
      alert("La cantidad mínima de envío es 1");
    } else {
      Alert.alert(
        "Confirmación de envío",
        "¿Está seguro de los datos registrados para el envío?",
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

  //número de acción sostenible
  //acción 1: siembra de arboles
  const acc1 = route.params?.acc1;
  //acción2: limpieza de playas o parques
  const acc2 = route.params?.acc2;
  //acción 3: reciclaje
  const acc3 = route.params?.acc3;

  let acciones = acc1 || acc2 || acc3;

  const op1 = codificacion + "-" + datos + "-" + acciones + "-" + cedula;
  const op2 = usuario + "-" + datos + "-" + cedula + "-" + acciones;

  console.log("op1: " + op1);

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
          <Text>IDENTIFICACIÓN A LA QUE ENVIA</Text>
          <TextInput
            style={stylesM.textInputSend}
            keyboardType="numeric"
            value={cedula}
            onChangeText={(text) => setCedula(text)}
          />
          <Text>ACCIÓN SOSTENIBLE</Text>
          {/* <TextInput
            style={stylesM.textInputSend}
            keyboardType="numeric"
            value={acciones}
            editable={false}
            onChangeText={(text) => setAccsos(text)}
          />*/}
          <Text style={stylesM.textInput}>{acciones}</Text>
          <View style={stylesM.btnPlus}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AccionesSost", {
                  datos: datos,
                  inSuma: inSuma,
                  datosVariable: datosVariable,
                })
              }
            >
              <Icon name="circle-with-plus" size={30} color="#5cb032" />
            </TouchableOpacity>
          </View>

          {/* <Text style={stylesM.textActions}>ACCIONES SOSTENIBLES</Text>*/}
          {/* <Dropdown
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
