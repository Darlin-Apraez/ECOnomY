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

const EditCelular = ({ navigation }: { navigation: any }) => {
  const route = useRoute();

  let usuario = route.params?.usuario;
  let contraseña = route.params?.contraseña;
  let changeUser = route.params?.changeUser;
  let changeContra = route.params?.changeContra;
  const [celularOld, setCelularOld] = useState("");
  const [celularNew, setCelularNew] = useState("");

  let modification = route.params?.modification;
  let modifiContra = route.params?.modifiContra;

  function changeData() {
    navigation.navigate("EditarDatos", {
      usuario: usuario,
      contraseña: contraseña,
      modifiCel: celularNew,
      changeContra: changeContra,
      changeUser: changeUser,
      modification: modification,
      modifiContra: modifiContra,
    });
  }

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <TouchableOpacity
          style={stylesM.return}
          onPress={() =>
            navigation.navigate("EditarDatos", {
              usuario: usuario,
              contraseña: contraseña,
              changeContra: changeContra,
              changeUser: changeUser,
              modification: modification,
              modifiContra: modifiContra,
              modifiCel: celularNew,
            })
          }
        >
          <Icon name="chevron-left" size={50} color="#5cb032" />
        </TouchableOpacity>
        <View style={[stylesL.JustifyAlign]}>
          <Text>Añadir Número Celular</Text>
          <TextInput
            style={[stylesM.InputEditDatos, stylesL.JustifyAlign]}
            onChangeText={(text) => setCelularNew(text)}
            value={celularNew}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
        <TouchableOpacity
          style={stylesM.botonScanSend}
          onPress={() => changeData()}
        >
          <Text>Modificar Datos</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditCelular;
