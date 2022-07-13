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
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo";

const AccionesSost = ({ navigation }: { navigation: any }) => {
  const route = useRoute();
  let inSuma = route.params?.suma;
  let datosVariable = route.params?.datosVariable;
  let datos = route.params?.datos;
  let usuario = route.params?.usuario;
  //dato modificado identificación
  let modification = route.params?.modification;
  let newIdentification = route.params?.newIdentification;

  const [accsos, setAccsos] = useState("");
  let acti;

  //número de acción sostenible
  //acción 1: siembra de arboles
  const acc1 = String(1);
  //acción2: limpieza de playas o parques
  const acc2 = String(2);
  //acción 3: reciclaje
  const acc3 = String(3);

  const acciones = () => {
    if (accsos == acc1) {
      acc1;
      alert(acc1);
    } else if (accsos == acc2) {
      acc2;
    } else if (accsos == acc3) {
      acc2;
    }
  };

  console.log("acciones: " + acciones);

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <TouchableOpacity
          style={stylesM.return}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" size={50} color="#5cb032" />
        </TouchableOpacity>
        <Text style={[stylesM.txtActions, stylesM.txtActionsTop]}>
          SIEMBRA DE ARBOLES
        </Text>
        <View style={stylesM.containerSiembra}>
          <Image
            source={require("./../../assets/img/siembraArbol.jpg")}
            style={stylesM.siembra}
          />
        </View>
        <View style={stylesO.btnTop}>
          <TouchableOpacity
            style={stylesM.btnAñadir}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("Send", {
                acc1,
                datos: datos,
                inSuma: inSuma,
                datosVariable: datosVariable,
                usuario: usuario,
                modification: modification,
                newIdentification: newIdentification,
              })
            }
          >
            <Text style={{ color: "white" }}>AÑADIR</Text>
          </TouchableOpacity>
        </View>

        <Text style={[stylesM.txtActions, stylesM.txtActionsTop2]}>
          LIMPIEZA DE PLAYAS O PARQUES
        </Text>
        <View style={stylesM.containerLimpieza}>
          <Image
            source={require("./../../assets/img/limpiezaPlaya.jpg")}
            style={stylesM.limpieza}
          />
        </View>
        <View style={stylesO.btnTop2}>
          <TouchableOpacity
            style={stylesM.btnAñadir}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("Send", {
                acc2,
                datos: datos,
                inSuma: inSuma,
                datosVariable: datosVariable,
                usuario: usuario,
                modification: modification,
                newIdentification: newIdentification,
              })
            }
          >
            <Text style={{ color: "white" }}>AÑADIR</Text>
          </TouchableOpacity>
        </View>

        <Text style={[stylesM.txtActions, stylesM.txtActionsTop3]}>
          RECICLAJE
        </Text>
        <View style={stylesM.containerReciclaje}>
          <Image
            source={require("./../../assets/img/reciclaje.jpg")}
            style={stylesM.reciclaje}
          />
        </View>
        <View style={stylesO.btnTop3}>
          <TouchableOpacity
            style={stylesM.btnAñadir}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("Send", {
                acc3,
                datos: datos,
                inSuma: inSuma,
                datosVariable: datosVariable,
                usuario: usuario,
                modification: modification,
                newIdentification: newIdentification,
              })
            }
          >
            <Text style={{ color: "white" }}>AÑADIR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccionesSost;
