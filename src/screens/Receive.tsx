import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import Icon from "react-native-vector-icons/FontAwesome5";

const Receive = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={stylesB.completo}>
        <View style={stylesM.containerboxReceive}>
          <Text style={stylesM.boxReceive}>RECIBIR</Text>
        </View>
        <TextInput
          // onChangeText={(ECOpuntos) => setECOpuntos(ECOpuntos)}
          // value={ECOpuntos.toString()}
          // keyboardType={"numeric"}
          editable={false}
          style={stylesM.textInputBalanceReceive}
          // {...SearchUser}
        />
        <Text style={stylesM.textBalance}>5</Text>
        <Image
          source={require("./../../assets/img/ECOpunTo.png")}
          style={stylesM.ecoPunto}
        />
        <View style={stylesM.containerimgQR}>
          <Image
            source={require("./../../assets/img/QRhumanenergy.jpeg")}
            style={stylesM.imageQR}
          />
        </View>
        <TouchableOpacity
          style={stylesM.botonGenerate}
          activeOpacity={0.3}
          onPress={() => navigation.navigate("GenerateQR")}
        >
          <Text style={stylesM.textGenerate}>Generar codigo QR</Text>
        </TouchableOpacity>
        <View style={stylesM.containerNumCuenta}>
          <Text style={stylesM.textContainerNumCuenta}>
            NÚMERO DE LA CUENTA
          </Text>
          <TextInput style={stylesM.textInputNumCuenta} />
        </View>
        <View style={stylesM.containerCopy}>
          <TouchableOpacity activeOpacity={0.3} style={stylesM.botonCopy}>
            <Icon name="copy" size={30} color="#65C82C" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={stylesM.botonHistorial}
          activeOpacity={0.3}
          onPress={() => navigation.navigate("History")}
        >
          <Text>HISTORIAL</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Receive;
