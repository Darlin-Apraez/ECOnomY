import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Clipboard,
  Platform,
  Dimensions,
  Modal,
  Button,
  SafeAreaView,
  StatusBar,
} from "react-native";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { BarCodeScanner } from "expo-barcode-scanner";

const ReaderQR = ({ navigation }: { navigation: any }) => {
  // -------------------------- QR para Android --------------------------

  if (Platform.OS === "android") {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("");

    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
      setScanned(true);
      setText(data);
      Clipboard.setString(data);
      alert("QR Escaneado");
    };

    //si el permiso es nulo
    if (hasPermission === null) {
      return <Text>Permiso nulo</Text>;
    }
    if (hasPermission === false) {
      return <Text>No acceso a la camara</Text>;
    }

    return (
      <SafeAreaView style={stylesB.body}>
        <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
        <View style={stylesB.completo}>
          {/* <View style={stylesM.container_scanner}> */}
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={[StyleSheet.absoluteFillObject, stylesM.BarCode]}
          >
            {scanned}
          </BarCodeScanner>

          <View style={stylesM.containerReScan}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={stylesM.botonScan}
            >
              <Text>Regresar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setScanned(false)}
              style={stylesM.botonReScan}
            >
              <Text>Escanear de nuevo</Text>
            </TouchableOpacity>
          </View>
          {/* </View> */}
        </View>
      </SafeAreaView>
    );

    // -------------------------- QR para IOS --------------------------
  } else if (Platform.OS === "ios") {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("");

    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
      setScanned(true);
      setText(data);
      Clipboard.setString(data);
      alert("QR Escaneado");
    };

    //si el permiso es nulo
    if (hasPermission === null) {
      return <Text>Permiso nulo</Text>;
    }
    if (hasPermission === false) {
      return <Text>No acceso a la camara</Text>;
    }

    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <View style={stylesM.container_scanner}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={[StyleSheet.absoluteFillObject, stylesM.colorqr]}
          >
            {scanned}
          </BarCodeScanner>
          <View style={stylesM.containerReScan}>
            <TouchableOpacity
              onPress={() => setScanned(false)}
              style={stylesM.botonReScan}
            >
              <Text>Escanear de nuevo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={stylesM.botonScan}
        >
          <Text>Regresar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
  }
};

export default ReaderQR;
