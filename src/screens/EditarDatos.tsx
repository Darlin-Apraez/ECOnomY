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

const EditarDatos = ({ navigation }: { navigation: any }) => {
  const [user, setUser] = useState("");
  const [contra, setContra] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [celular, setCelular] = useState("");

  const route = useRoute();
  let usuario = route.params?.usuario;
  let contraseña = route.params?.contraseña;

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

        {/* identificación */}
        <View style={stylesL.JustifyAlign}>
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
              value={usuario}
              editable={false}
            />
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() =>
                navigation.navigate("EditIdentificación", { usuario: usuario })
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
              value={contraseña}
              editable={false}
            />
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() => navigation.navigate("Balance", {})}
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
              onPress={() => navigation.navigate("Balance", {})}
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
              onPress={() => navigation.navigate("Balance", {})}
            >
              <Image
                source={require("./../../assets/img/Edit.png")}
                style={stylesM.editData}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditarDatos;
