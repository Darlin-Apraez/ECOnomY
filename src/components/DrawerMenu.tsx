import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  BackHandler,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { stylesM } from "../appTheme/_modules/modules";
import { stylesO } from "../appTheme/_other/other";

function DrawerMenu({ navigation }: { navigation: any }) {
  const route = useRoute();

  let usuario = route.params?.usuario;
  let contraseña = route.params?.contraseña;

  let datosVariable = route.params?.datosVariable;
  let restaData2 = route.params?.restaData2;
  let inDatos = route.params?.inDatos;
  let data = route.params?.data;
  let op2 = route.params?.op2;
  //dato modificado identificación
  let modification = route.params?.modification;
  let nuevoUsuario = route.params?.nuevoUsuario;
  let newIdentification = route.params?.newIdentification;
  //prueba 2
  let changeUser = route.params?.changeUser;
  let changeContra = route.params?.changeContra;

  return (
    <View style={{ flex: 1 }}>
      <View style={stylesM.containerDrawer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Balance", {
              usuario: usuario,
              contraseña: contraseña,
              datosVariable: datosVariable,
              restaData2: restaData2,
              inDatos: inDatos,
              data: data,
              op2: op2,
              modification: modification,
              nuevoUsuario: nuevoUsuario,
              changeUser: changeUser,
              changeContra: changeContra,
            })
          }
          style={stylesM.botonMenuDrawer}
        >
          <Text style={stylesM.textMenuDrawer}>BALANCE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Perfil", {
              usuario: usuario,
              contraseña: contraseña,
              modification: modification,
              datosVariable: datosVariable,
              data: data,
              nuevoUsuario: nuevoUsuario,
              newIdentification: newIdentification,
              changeUser: changeUser,
              changeContra: changeContra,
            })
          }
          style={stylesM.botonMenuDrawer}
        >
          <Text
            style={[stylesM.textMenuDrawer, stylesO.textMenuDrawer_centerOne]}
          >
            PERFIL
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Variables")}
          style={stylesM.botonMenuDrawer}
        >
          <Text
            style={[stylesM.textMenuDrawer, stylesO.textMenuDrawer_centerThree]}
          >
            SOSTENIBILIDAD
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Ecoafiliados")}
          style={stylesM.botonMenuDrawer}
        >
          <Text
            style={[stylesM.textMenuDrawer, stylesO.textMenuDrawer_centerThree]}
          >
            ECOAFILIADOS
          </Text>
        </TouchableOpacity>
        {/* <View style={stylesM.contUserDrawer}>
          <Text style={stylesM.userDrawer}>Número cédula: {usuario}</Text>
        </View> */}
      </View>
      <View style={stylesM.containerLogout}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Register")}
          style={stylesM.backgroundLogout}
        >
          <Text style={stylesM.logout}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DrawerMenu;
