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
import React from "react";
import { LotieTranFallida } from "./../components/lottie";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";

const TranFallida = () => {
  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <LotieTranFallida />
        <View>
          <Text style={stylesM.txtfallida} numberOfLines={3}>
            TRANSACCIÓN FALLIDA
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TranFallida;
