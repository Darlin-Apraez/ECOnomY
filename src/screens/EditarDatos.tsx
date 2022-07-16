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

  let data = route.params?.data;
  let restaData2 = route.params?.restaData2;
  let inDatos = route.params?.inDatos;
  let op2 = route.params?.op2;
  let newIdentification = route.params?.newIdentification;
  //origen modificación identificación
  let modification = route.params?.modification;
  let datosVariable = route.params?.datosVariable;
  let nuevaContra = route.params?.nuevaContra;
  let modifiContra = route.params?.modifiContra;
  let modifiCel = route.params?.modifiCel;

  let changeUser = modification ? modification : usuario;
  let changeContra = modifiContra ? modifiContra : contraseña;

  //let changCon = contraseña ? contraseña : changeContra;
  //console.log("changCon: " + changCon);

  const [user, setUser] = useState("");

  console.log("change: " + changeUser);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, changeUser);
      alert("Datos modificados correctamente");
      navigation.navigate("Balance", {
        usuario: usuario,
        contraseña: contraseña,
        modification: modification,
        modifiContra: modifiContra,
        changeUser: changeUser,
        changeContra: changeContra,
        modifiCel: modifiCel,
      });
      setTimeout(() => {
        navigation.navigate("DrawerApp", {
          data,
          datosVariable,
          variante: datosVariable,
          restaData2,
          inDatos,
          usuario,
          contraseña,
          op2,
          modification,
          newIdentification,
          modifiContra,
          changeUser,
          changeContra,
          modifiCel,
        });
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
            {/* <TextInput
              style={[
                stylesM.InputEditDatos,
                stylesL.JustifyAlign,
                stylesM.LeftInput,
              ]}
              keyboardType="numeric"
              onChangeText={(text) => setUser(text)}
              value={changeUser}
              editable={false}
            /> */}
            <Text
              style={[
                stylesM.InputEditDatos,
                stylesL.JustifyAlign,
                stylesM.LeftInput,
              ]}
            >
              {changeUser}
            </Text>
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() =>
                navigation.navigate("EditIdentificación", {
                  usuario: usuario,
                  contraseña: contraseña,
                  modification: modification,
                  modifiContra: modifiContra,
                  changeUser: changeUser,
                  changeContra: changeContra,
                  modifiCel: modifiCel,
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
            {/* <TextInput
              style={[
                stylesM.InputEditDatos,
                stylesL.JustifyAlign,
                stylesM.LeftInput,
              ]}
              keyboardType="numeric"
              onChangeText={(text) => setContra(text)}
              value={changeContra}
              editable={false}
            /> */}
            <Text
              style={[
                stylesM.InputEditDatos,
                stylesL.JustifyAlign,
                stylesM.LeftInput,
              ]}
            >
              {changeContra}
            </Text>
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() =>
                navigation.navigate("EditContraseña", {
                  usuario: usuario,
                  contraseña: contraseña,
                  modification: modification,
                  modifiContra: modifiContra,
                  changeContra: changeContra,
                  changeUser: changeUser,
                  modifiCel: modifiCel,
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
            {/* <TextInput
              style={[
                stylesM.InputEditDatos,
                stylesL.JustifyAlign,
                stylesM.LeftInput,
              ]}
              keyboardType="numeric"
              onChangeText={(text) => setUbicacion(text)}
              value={ubicacion}
              editable={false}
            /> */}
            <Text
              style={[
                stylesM.InputEditDatos,
                stylesL.JustifyAlign,
                stylesM.LeftInput,
              ]}
            >
              {ubicacion}
            </Text>
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() => alert("En próximas versiones")}
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
            {/* <TextInput
              style={[
                stylesM.InputEditDatos,
                stylesL.JustifyAlign,
                stylesM.LeftInput,
              ]}
              keyboardType="numeric"
              onChangeText={(text) => setCelular(text)}
              value={modifiCel}
              editable={false}
            /> */}
            <Text
              style={[
                stylesM.InputEditDatos,
                stylesL.JustifyAlign,
                stylesM.LeftInput,
              ]}
            >
              {modifiCel}
            </Text>
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() =>
                navigation.navigate("EditCelular", {
                  usuario: usuario,
                  contraseña: contraseña,
                  changeUser,
                  changeContra,
                  modification: modification,
                  modifiContra: modifiContra,
                  modifiCel,
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

        <TouchableOpacity
          style={stylesM.botonScanSend}
          onPress={() => storeData()}
        >
          <Text>Guardar datos</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditarDatos;
