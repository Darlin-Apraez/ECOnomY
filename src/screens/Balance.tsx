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
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import md5 from "md5";
import utf8 from "utf8";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Balance = ({ navigation }: { navigation: any }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [registro_id, setregistro_id] = useState("");
  const [ECOpuntos, setECOpuntos] = useState("");
  const [Balance, setBalance] = useState("");
  const [usuario, setUsuario] = useState("");
  //const [value, onChangeText] = useState("");
  const [cedula, setCedula] = useState("");
  const [generacion, setGeneracion] = useState("");
  const [valorc, setValorc] = useState("");
  const [datos, setDatos] = useState("");
  //const [data, setData] = useState("");

  const route = useRoute();

  const register = () => {
    // console.log(md5("12345"));

    navigation.navigate("Send", {
      suma: suma,
      datoResta: datoResta,
      datosVariable: datosVariable,
      inDatos: inDatos,
    });
  };

  const recibirCedula = () => {
    navigation.navigate("Receive", {
      usuario: usuario,
      datosVariable: datosVariable,
      suma: suma,
      inDatos: inDatos,
    });
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Espera", "¿Seguro que quieres salir?", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Si", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  //IMPORTANTE
  //const { data } = route.params;

  let restaData = route.params?.restaData;
  let restaData2 = route.params?.restaData2;
  let sumaData = route.params?.sumaData;

  //dato de entrada
  let inData = route.params?.data;

  //valor vacio
  let valorInicial = 0;

  const valorDos = String(inData);
  const valorTres = Number(valorDos);

  const valorCuatro = Number(valorInicial);

  const resta = Number(valorCuatro) - Number(valorTres);
  // let suma = Number(valorInicial) + Number(valorTres);
  // suma = suma + valorInicial;

  // const sumaDos = Number(suma) + Number(inData);
  // const valFinal = Number(resta);
  // const valoFinal = Number(suma) + Number(valorTres);

  /// prueba
  let dtVar = route.params?.datosVariable;
  let inicia = 0;

  let n = 1;
  let suma = 0;
  let numr;

  while (n <= 1) {
    numr = inData;
    //numr = prompt("introduzca numero:", "");

    numr = Number(numr);
    suma = Number(suma) + Number(numr);
    n = Number(n) + 1;
  }
  console.log("la suma de los numeros es: ", suma);

  //funcion para retornar valor de resta
  let datoInicial = inData ? suma : inicia;

  let datoResta = suma ? suma : restaData;

  let datoVariable = datoResta ? datoResta : datoInicial;

  let datosVariable = restaData2 ? restaData2 : datoInicial;

  //////////////////////////////////////////////////////
  let inDatos = route.params?.inDatos;
  //prueba suma
  let variante = route.params?.variante;

  let sumaVar = Number(datosVariable) + Number(0);
  let resulSuma = Number(sumaVar) + Number(inDatos);
  let dtsVar = resulSuma ? resulSuma : datoInicial;

  let inicial;
  inicial = 0;

  let a = Number(inicial) + Number(datoVariable);

  let sum = a + dtsVar;

  let result = a ? a : datoInicial;

  // console.log("dtsVar: " + dtsVar);
  // console.log("dtVar: " + dtVar);
  // console.log("result: " + result);

  let numero0 = 0;
  let numero1 = 0;
  variante = datoInicial;

  //datosVariable = numero0 + datosVariable;
  const numero5 = Number(inData) + Number(inicial);
  //numero1 = datosVariable + datoInicial;

  let numero3 = numero1;

  console.log("numero0: " + numero0);
  console.log("numero1: " + numero1);
  console.log("numero3: " + numero3);
  console.log("datosVariable: " + datosVariable);
  console.log("variante: " + variante);

  ///

  // const SearchUser = () => {
  //   const ECOpuntos = useState;
  //   const SearchAPIURL = "http://192.168.1.15/pruebas/consulta.php";
  //   const headers = {
  //     Accept: "application/json",
  //     "Content-type": "application/json",
  //   };

  //   fetch(SearchAPIURL, {
  //     method: "GET",
  //     headers: headers,
  //     body: JSON.stringify({
  //       ECOpuntos: ECOpuntos,
  //     }),
  //   })
  //     .then((respuesta) => respuesta.json())
  //     .then((respuestaJson) => {
  //       alert(respuestaJson);
  //     })
  //     .catch((error) => {
  //       alert("Error" + error);
  //     });
  // };

  //reverse md5
  var ReverseMd5 = require("reverse-md5");
  // var rev = ReverseMd5({
  //   lettersUpper: false,
  //   lettersLower: true,
  //   numbers: true,
  //   special: false,
  //   whitespace: true,
  //   //maxLen: 12,
  // });
  // rev(datosVariable);
  // console.log(rev);
  //md5
  //32 caracteres
  // var md = md5(datosVariable);
  // console.log(md);

  //utf8
  // const utf8 = require("utf8");

  // var utf = utf8.encode(datosVariable);

  // utf8.encode("\uD800\uDC01");

  // utf8.decode("\xF0\x90\x80\x81");

  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        {/* <ScrollView
            contentContainerStyle={stylesM.scrollView}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          > */}
        <TextInput
          // onChangeText={(ECOpuntos) => setECOpuntos(ECOpuntos)}
          // value={ECOpuntos.toString()}
          // keyboardType={"numeric"}
          editable={false}
          style={stylesM.textInputBalance}
          // {...SearchUser}
        />
        {/* <TextInput
          style={stylesM.boxEntry}
          onChangeText={(text) => setGeneracion(text)}
          value={inData}
          editable={true}
          keyboardType="numeric"
          maxLength={6}
        /> */}

        {/* <Text style={stylesM.textBalance}>{datoVariable}</Text> */}
        <Text style={stylesM.textBalance}>{datosVariable}</Text>
        {/* <Text>dtsVar: {dtsVar}</Text>
        <Text>a: {a}</Text>
        <Text>numeroAja: {numero5}</Text> */}
        {/* <Text>rev: {rev}</Text> */}
        {/* <TouchableOpacity
          onPress={() => {
            suma ? suma : restaData;
            alert("su nuevo balance es: " + datoResta);
          }}
        >
          <Image
            source={require("./../../assets/img/refresh.png")}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity> */}
        {/* <Text>Resta: {restaData}</Text> */}
        {/* <Text>Suma: {sumaData}</Text> */}
        {/* <Text>SumaAcumula: {acm}</Text> */}
        {/* <Text>{sumaDos}</Text> */}

        <Image
          source={require("./../../assets/img/ECOpunTo.png")}
          style={stylesM.ecoPunto}
        />
        <View style={stylesM.containerBotones}>
          <TouchableOpacity
            style={stylesM.botonSend}
            //onPress={() => navigation.navigate("Send")}
            onPress={register}
          >
            <Text style={stylesM.textBoton}>ENVIAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesM.botonSend2} onPress={recibirCedula}>
            <Text style={stylesM.textBoton}>RECIBIR</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("./../../assets/img/ECOnomY.Name.png")}
          style={stylesM.logoECOnomY}
        />
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default Balance;
