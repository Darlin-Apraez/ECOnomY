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
  // const [usuario, setUsuario] = useState("");
  const route = useRoute();
  // async function SignOut() {
  //   await signOut(auth)
  //     .then(() => {
  //       alert("Sesíon cerrada exitosamente");
  //       navigation.navigate("Home");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorMessage);
  //     });
  // }
  let usuario = route.params?.usuario;
  let contraseña = route.params?.contraseña;
  let datosVariable = route.params?.datosVariable;
  let restaData2 = route.params?.restaData2;
  let inDatos = route.params?.inDatos;
  let data = route.params?.data;
  let op2 = route.params?.op2;

  // setTimeout(() => {
  //   navigation.navigate("Balance", {
  //     data,
  //     datosVariable,
  //     variante: datosVariable,
  //     restaData2,
  //     inDatos,
  //   });
  // }, 2500);

  return (
    <View style={{ flex: 1 }}>
      <View style={stylesM.containerDrawer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Balance", {
              usuario: usuario,

              datosVariable: datosVariable,
              restaData2: restaData2,
              inDatos: inDatos,
              data: data,
              op2: op2,
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
        <View style={stylesM.contUserDrawer}>
          <Text style={stylesM.userDrawer}>Número cédula: {usuario}</Text>
        </View>
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
