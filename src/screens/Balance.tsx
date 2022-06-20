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
  const value = "";

  const register = () => {
    navigation.navigate("Send", {
      VB: VB,
      VE: VE,
    });
  };

  const recibirCedula = () => {
    navigation.navigate("Receive", { usuario: usuario });
  };

  let firstNumber = 1;
  const lastNumber = 100;
  var Aleatorio = firstNumber + Math.floor(Math.random() * lastNumber);
  const VB = Aleatorio.toString();

  const VE = "";

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

  //dato de entrada
  let inData = route.params?.data;

  //valor vacio
  let valorInicial = 0;

  //indata guardado en una variable

  let number = generacion;

  const valorDos = String(inData);
  const valorTres = Number(valorDos);

  const valorCuatro = Number(valorInicial);

  const resta = Number(valorCuatro) - Number(valorTres);
  let suma = Number(valorInicial) + Number(valorTres);
  suma = suma + valorInicial;

  const sumaDos = Number(suma) + Number(inData);
  const valFinal = Number(resta);
  const valoFinal = Number(suma) + Number(valorTres);

  //recibir
  // function enviarData() {
  //   if (number != number) {
  //     console.log("suma: ", suma);
  //   } else if (number == 0) {
  //     console.log("number: ", number);
  //   } else if (number >= resta) {
  //     console.log("resta: ", resta);
  //   }
  // }
  // console.log(enviarData);

  // const validations = () => {
  //   if (dataInicial == 0) {
  //     alert("Fondos suficientes");
  //   } else if (inData != valorRecibido) {
  //   }
  // };

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

        <Text style={stylesM.textBalance}>{inData}</Text>
        <Text>{suma}</Text>
        <Text>{sumaDos}</Text>

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
