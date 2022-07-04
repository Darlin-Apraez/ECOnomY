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

const EditIdentificación = () => {
  const [userOld, setUserOld] = useState("");
  const [userNew, setUserNew] = useState("");

  const route = useRoute();
  let usuario = route.params?.usuario;

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <View style={[stylesL.JustifyAlign]}>
          <Text>Identificación anterior</Text>
          <TextInput
            style={[
              stylesM.InputEditDatos,
              stylesL.JustifyAlign,
              stylesM.LeftInput,
            ]}
            keyboardType="numeric"
            onChangeText={(text) => setUserOld(text)}
            value={usuario}
          />

          <Text>Identificación Nueva</Text>
          <TextInput
            style={[
              stylesM.InputEditDatos,
              stylesL.JustifyAlign,
              stylesM.LeftInput,
            ]}
            keyboardType="numeric"
            onChangeText={(text) => setUserNew(text)}
            value={userNew}
            editable={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditIdentificación;
