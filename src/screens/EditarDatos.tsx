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
  AsyncStorage,
} from "react-native";
import React, { useState } from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { Route, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo";

let STORAGE_KEY = "@user_input";

const EditarDatos = ({ navigation }: { navigation: any }) => {
  const [contra, setContra] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [celular, setCelular] = useState("");

  const route = useRoute();
  let usuario = route.params?.usuario;
  let contraseña = route.params?.contraseña;
  let nuevoUsuario = route.params?.nuevoUsuario;
  //origen modificación identificación
  let modification = route.params?.modification;
  let datosVariable = route.params?.datosVariable;
  let nuevaContra = route.params?.nuevaContra;
  let modifiContra = route.params?.modifiContra;

  let changeUser = modification ? modification : usuario;
  let changeContra = modifiContra ? modifiContra : contraseña;

  const [user, setUser] = useState("");
  let newIdentification = modification;
  let newContraseña = changeContra ? changeContra : contraseña;

  let changeUser2 = newIdentification ? newIdentification : changeUser;
  console.log("change: " + changeUser);

  AsyncStorage.setItem(STORAGE_KEY, newIdentification);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, newIdentification);
      alert("Datos modificados correctamente");
      navigation.navigate("Balance", {
        newIdentification,
        changeUser,
        changeContra,
      });
    } catch (error) {
      // Error saving data
      alert("Error al cambiar los datos");
    }
  };

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        {/* <TouchableOpacity
          style={stylesM.return}
          onPress={() =>
            navigation.navigate("Perfil", {
              usuario: usuario,
              contraseña: contraseña,
              modification: modification,
            })
          }
        >
          <Icon name="chevron-left" size={50} color="#5cb032" />
        </TouchableOpacity> */}

        {/* identificación */}
        <View style={[stylesL.JustifyAlign, stylesM.topForm]}>
          <Text>Identificación</Text>
          <View style={[stylesL.JustifyAlign, stylesM.flexDire]}>
            <TextInput
              style={[
                stylesM.InputEditDatos,
                stylesL.JustifyAlign,
                stylesM.LeftInput,
              ]}
              keyboardType="numeric"
              onChangeText={(text) => setUser(text)}
              value={changeUser}
              editable={false}
            />
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() =>
                navigation.navigate("EditIdentificación", {
                  usuario: usuario,
                  contraseña: contraseña,
                  modification: modification,
                  nuevoUsuario: nuevoUsuario,
                  changeUser: changeUser,
                  changeContra: changeContra,
                })
              }
            >
              <Image
                source={require("./../../assets/img/Edit.png")}
                style={stylesM.editData}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* contraseña */}
        <View style={stylesL.JustifyAlign}>
          <Text>Contraseña</Text>
          <View style={[stylesL.JustifyAlign, stylesM.flexDire]}>
            <TextInput
              style={[
                stylesM.InputEditDatos,
                stylesL.JustifyAlign,
                stylesM.LeftInput,
              ]}
              keyboardType="numeric"
              onChangeText={(text) => setContra(text)}
              value={changeContra}
              editable={false}
            />
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() =>
                navigation.navigate("EditContraseña", {
                  usuario: usuario,
                  contraseña: contraseña,
                  modifiContra: modifiContra,
                  changeContra: changeContra,
                  changeUser: changeUser,
                })
              }
            >
              <Image
                source={require("./../../assets/img/Edit.png")}
                style={stylesM.editData}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* ubicación */}
        <View style={stylesL.JustifyAlign}>
          <Text>Ubicación</Text>
          <View style={[stylesL.JustifyAlign, stylesM.flexDire]}>
            <TextInput
              style={[
                stylesM.InputEditDatos,
                stylesL.JustifyAlign,
                stylesM.LeftInput,
              ]}
              keyboardType="numeric"
              onChangeText={(text) => setUbicacion(text)}
              value={ubicacion}
              editable={false}
            />
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() => alert("En proximas versiones")}
            >
              <Image
                source={require("./../../assets/img/Edit.png")}
                style={stylesM.editData}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Celular */}
        <View style={stylesL.JustifyAlign}>
          <Text>Celular</Text>
          <View style={[stylesL.JustifyAlign, stylesM.flexDire]}>
            <TextInput
              style={[
                stylesM.InputEditDatos,
                stylesL.JustifyAlign,
                stylesM.LeftInput,
              ]}
              keyboardType="numeric"
              onChangeText={(text) => setCelular(text)}
              value={celular}
              editable={false}
            />
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() => alert("En proximas versiones")}
            >
              <Image
                source={require("./../../assets/img/Edit.png")}
                style={stylesM.editData}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={stylesM.botonScanSend}
          onPress={() =>
            // navigation.navigate("Balance", {
            //   modification: modification,
            //   nuevoUsuario: nuevoUsuario,
            //   datosVariable: datosVariable,
            // })
            storeData()
          }
        >
          <Text>Guardar datos</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditarDatos;
