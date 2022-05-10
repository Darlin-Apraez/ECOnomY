import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Register = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      {/* <View style={stylesB.completo}> */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
          <Text>Crear Cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>

      {/* </View> */}
    </SafeAreaView>
  );
};

export default Register;
