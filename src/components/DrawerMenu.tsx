import { View, Text, TouchableOpacity, Alert, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { stylesM } from "../appTheme/_modules/modules";
import { stylesO } from "../appTheme/_other/other";

function DrawerMenu({ navigation }: { navigation: any }) {
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

  return (
    <View style={{ flex: 1 }}>
      <View style={stylesM.containerDrawer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Balance")}
          style={stylesM.botonMenuDrawer}
        >
          <Text style={stylesM.textMenuDrawer}>BALANCE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("History")}
          style={stylesM.botonMenuDrawer}
        >
          <Text
            style={[stylesM.textMenuDrawer, stylesO.textMenuDrawer_centerOne]}
          >
            HISTORIAL
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Indicators")}
          style={stylesM.botonMenuDrawer}
        >
          <Text
            style={[stylesM.textMenuDrawer, stylesO.textMenuDrawer_centerTwo]}
          >
            INDICADORES
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Variables")}
          style={stylesM.botonMenuDrawer}
        >
          <Text
            style={[stylesM.textMenuDrawer, stylesO.textMenuDrawer_centerThree]}
          >
            VARIABLES
          </Text>
        </TouchableOpacity>
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
