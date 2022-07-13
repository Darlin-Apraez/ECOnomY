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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveUser } from "../../api";

let STORAGE_KEY = "@user_input";

const EditIdentificación = ({ navigation }: { navigation: any }) => {
  const [userOld, setUserOld] = useState("");
  const [userNew, setUserNew] = useState("");

  const route = useRoute();
  let usuario = route.params?.usuario;
  let contraseña = route.params?.contraseña;
  //dato modificado identificación
  let modification = userNew;

  let changeUser = route.params?.changeUser;
  let changeContra = route.params?.changeContra;

  AsyncStorage.setItem(STORAGE_KEY, modification);

  function changeData() {
    if (userNew == "") {
      alert("Campo Identificación Nueva vacío");
    } else {
      //saveUser(userNew);
      navigation.navigate("EditarDatos", {
        //nuevoUsuario: userNew,
        contraseña: contraseña,
        modification: userNew,
        changeUser: changeUser,
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
              changeUser: changeUser,
              modification: modification,
              changeContra: changeContra,
            })
          }
        >
          <Icon name="chevron-left" size={50} color="#5cb032" />
        </TouchableOpacity>
        <View style={[stylesL.JustifyAlign]}>
          <Text>Identificación Anterior</Text>
          <TextInput
            style={[stylesM.InputEditDatos, stylesL.JustifyAlign]}
            keyboardType="numeric"
            onChangeText={(text) => setUserOld(text)}
            value={changeUser}
            editable={false}
          />

          <Text>Identificación Nueva</Text>
          <TextInput
            style={[stylesM.InputEditDatos, stylesL.JustifyAlign]}
            keyboardType="numeric"
            onChangeText={(text) => setUserNew(text)}
            value={userNew}
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

export default EditIdentificación;
