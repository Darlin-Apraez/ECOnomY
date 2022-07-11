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
import { saveUser } from "../../api";

const EditContraseña = ({ navigation }: { navigation: any }) => {
  const route = useRoute();
  let usuario = route.params?.usuario;
  let contraseña = route.params?.contraseña;
  let newIdentification = route.params?.newIdentification;
  let nuevaContra = route.params?.nuevaContra;

  const [contraOld, setContraOld] = useState("");
  const [contraNew, setContraNew] = useState("");
  let modifiContra = contraNew;

  let changeContra = contraseña ? contraseña : modifiContra;

  function changeData() {
    if (contraNew == "") {
      alert("Campo Identificación Nueva vacío");
    } else {
      saveUser(contraNew);
      navigation.navigate("EditarDatos", {
        nuevaContra: contraNew,
        contraseña: contraseña,
        modifiContra: modifiContra,
        changeContra: changeContra,
      });
    }
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
            })
          }
        >
          <Icon name="chevron-left" size={50} color="#5cb032" />
        </TouchableOpacity>
        <View style={[stylesL.JustifyAlign]}>
          <Text>Contraseña Anterior</Text>
          <TextInput
            style={[stylesM.InputEditDatos, stylesL.JustifyAlign]}
            keyboardType="numeric"
            onChangeText={(text) => setContraOld(text)}
            value={changeContra}
            editable={false}
          />

          <Text>Contraseña Nueva</Text>
          <TextInput
            style={[stylesM.InputEditDatos, stylesL.JustifyAlign]}
            onChangeText={(text) => setContraNew(text)}
            value={contraNew}
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

export default EditContraseña;
