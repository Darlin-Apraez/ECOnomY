import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

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
      <View style={{ top: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Balance")}>
          <Text>BALANCE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("History")}>
          <Text>HISTORIAL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Stats")}>
          <Text>ESTADISTICAS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Indicators")}>
          <Text>INDICADORES</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 100 }}>
        <TouchableOpacity activeOpacity={0.5}>
          {/* <View style={[stylesM.closeSesionMenu_width, stylesL.JustifyAlign]}>
        <IconX name="x-circle" size={sizeIconX} color="#fff" />
      </View> */}

          <Text style={{ color: "white" }}>Cerrar sesión.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DrawerMenu;
