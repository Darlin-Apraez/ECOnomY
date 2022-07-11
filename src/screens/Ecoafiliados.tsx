import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Alert,
  BackHandler,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  Image,
  RefreshControl,
  ScrollView,
} from "react-native";
import React from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const Ecoafiliados = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <View style={stylesM.containerMap}>
          <MapView
            //customMapStyle={map}
            style={stylesM.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 4.570868,
              longitude: -74.297333,
              latitudeDelta: 0.9003,
              longitudeDelta: 0.9003,
            }}
          ></MapView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Ecoafiliados;
