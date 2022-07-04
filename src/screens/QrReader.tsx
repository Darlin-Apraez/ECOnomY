import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
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
import { Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import { RFValue } from "react-native-responsive-fontsize";
import * as Animatable from "react-native-animatable";
//import { Lotierror, Lotieqr } from "../components/Lottie";
import LottieView from "lottie-react-native";
import Icon from "react-native-vector-icons/Entypo";
import BarStatus from "../components/BarStatus";
import { LinearGradient } from "expo-linear-gradient";
import { Audio } from "expo-av";
import { useRoute } from "@react-navigation/native";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const sizeIcon = Platform.OS === "ios" ? 30 : 35;

const QrReader = ({ navigation }: { navigation: any }) => {
  // +++++++++++++++++++++++++++++++++++++++++Qr para iOS+++++++++++++++++++++++++++++++++++++++++

  if (Platform.OS === "ios") {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("");
    const [value, onChangeText] = useState("");
    const [valorc, setValorc] = useState("");
    const [datos, setDatos] = useState("");
    const route = useRoute();
    //sonido
    const [sound, setSound] = useState();

    //preguntando el permiso para camara
    const askForCameraPermission = () => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status == "granted");
      })();
    };

    useEffect(() => {
      askForCameraPermission();
    }, []);

    //Constantes modales
    const [anmt, setanmt] = useState("");
    const [aprobado, setaprobado] = useState(false);
    const [MostrarError, setError] = useState("");
    //const [lottie, setLottie] = useState(<Lotierror />);
    const [mostrartitulo, setmostrartitulo] = useState("");

    //Handleo del escaneado
    const handleBarCodeScanned = ({ data }) => {
      setScanned(true);
      setText(data);
      Clipboard.setString(data);
      //aqui va el envio de los props
      setmostrartitulo("QR Scaneado");
      setError("QR copiado en el portapapeles:");
      setaprobado(true);
      //setLottie(<Lotieqr />);
      setanmt("fadeInDownBig");
      // setTimeout(() => {
      //   navigation.navigate("TranExitosa", { data: data });
      // }, 2500);

      console.log(data);
    };

    //si el permiso es nulo
    if (hasPermission === null) {
      return <Text>Permiso nulo</Text>;
      copiadotxtcontaineruno;
    }

    //si el permiso es falso
    if (hasPermission === false) {
    }

    //Función sonido
    async function playSound() {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(
        require("./../../assets/audio/transaction.mp3"),
        { shouldPlay: true }
      );
      setSound(sound);
      console.log("Playing Sound");
      await sound.playAsync();
    }

    //boton volver
    function regresar() {
      setScanned(false);
      //playSound();
      //navigation.navigate("TranExitosa", { value: value });
    }

    //const { data } = route.params;
    function confirmar() {
      setScanned(false);
      // setTimeout(() => {
      navigation.navigate("TranExitosa", { data: data });
      // }, 1200);
    }

    //si el permiso es verdadero
    if (hasPermission === true) {
      return (
        <View style={styles.containeruno}>
          <Modal
            visible={aprobado}
            transparent
            onRequestClose={() => setaprobado(false)}
            hardwareAccelerated
          >
            <View style={styles.cajafull}>
              <Animatable.View animation={anmt} duration={600}>
                <View>
                  <View style={styles.ventanafull}>
                    <View style={styles.contenedortextfull}>
                      <Text style={styles.texticonfull}>{mostrartitulo}</Text>
                    </View>

                    <View>
                      <Text style={styles.notificacionfull}>
                        {MostrarError}
                      </Text>
                    </View>
                    {/* Texto copiado */}
                    <Text style={styles.copiadotxt}>{text}</Text>
                    {/* Botones modal */}
                    <View style={styles.dcVC}>
                      <View style={styles.dcV}>
                        <TouchableOpacity
                          style={styles.btnVC}
                          activeOpacity={0.5}
                          onPress={() => [
                            setScanned(false),
                            setaprobado(false),
                          ]}
                        >
                          <Text style={styles.textbtnVC}>REESCANEAR</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.dcC}>
                        <TouchableOpacity
                          style={styles.btnVC}
                          activeOpacity={0.5}
                          onPress={() => confirmar()}
                        >
                          <Text style={styles.textbtnVC}>CONFIRMAR</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </Animatable.View>
            </View>
          </Modal>

          {/* camara */}
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={[StyleSheet.absoluteFillObject, styles.colorqr]}
          >
            <View style={styles.tituloqr}>
              <Text style={styles.textqr}>ESCANEAR CÓDIGO QR</Text>
            </View>
            <Animatable.View
              style={styles.barcodebox}
              animation="pulse"
              duration={2000}
              iterationCount={"infinite"}
            ></Animatable.View>
            <View style={styles.cajavolver}>
              <TouchableOpacity
                style={styles.btnvolver}
                activeOpacity={0.5}
                onPress={() => regresar()}
              >
                <Text style={[styles.txtvolver, styles.textColorDarkGreen]}>
                  VOLVER
                </Text>
              </TouchableOpacity>
            </View>
          </BarCodeScanner>
        </View>
      );
    }
    return (
      // permiso denegado

      <View style={styles.cajaqra}>
        <Animatable.View animation={"fadeInDownBig"} duration={600}>
          <View>
            <View style={styles.ventanaqra}>
              <View style={[stylesL.JustifyAlign]}>
                <Text
                  style={[
                    stylesM.fontSizeTwentyEight,
                    stylesM.textColorWhite,
                    stylesM.textBold,
                  ]}
                >
                  Permiso Denegado
                </Text>
              </View>
              {/* Lottie */}
              {/* <View>
                <LottieView
                  style={styles.lottieqr}
                  source={require("../../assets/lottie/error.json")}
                  speed={2}
                  autoPlay
                />
              </View> */}
              <View>
                <Text
                  style={[
                    styles.textKey,
                    stylesM.textColorWhite,
                    stylesL.textAlignCenter,
                    stylesM.fontSizeEighteen,
                  ]}
                >
                  Revisa los permisos de la cámara ingresando en configuración,
                  privacidad y cámara.
                </Text>
              </View>
              <View style={styles.cajav}>
                <TouchableOpacity
                  style={styles.btnv}
                  activeOpacity={0.5}
                  onPress={() => regresar()}
                >
                  <Text style={[styles.txtv, styles.textColorDarkGreen]}>
                    VOLVER
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Animatable.View>
      </View>
    );

    // +++++++++++++++++++++++++++++++++++++++++Qr para Android+++++++++++++++++++++++++++++++++++++++++
  } else if (Platform.OS === "android") {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [scanned, setScanned] = useState(false);
    //Constantes modales
    const [anmt, setanmt] = useState("");
    const [aprobado, setaprobado] = useState(false);
    const [MostrarError, setError] = useState("");
    //const [lottie, setLottie] = useState(<Lotierror />);
    const [mostrartitulo, setmostrartitulo] = useState("");
    const [text, setText] = useState("");
    const [value, onChangeText] = useState("");
    const [cedula, setCedula] = useState("");
    const route = useRoute();
    const [valorc, setValorc] = useState("");
    const [datos, setDatos] = useState("");
    //sonido
    const [sound, setSound] = useState();

    let inData = route.params?.data;
    let sumaData = route.params?.sumaData;
    let datoVariable = route.params?.datoVariable;
    let datosVariable = route.params?.datosVariable;
    let usuario = route.params?.usuario;

    //Función sonido
    async function playSound() {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(
        require("./../../assets/audio/transaction.mp3"),
        { shouldPlay: true }
      );
      setSound(sound);
      console.log("Playing Sound");
      await sound.playAsync();
    }

    let inDatos = route.params?.datos;
    let inSumas = route.params?.inSuma;
    let acm = route.params?.acm;
    let op2 = route.params?.op2;
    //boton volver
    function regresar() {
      //playSound();
      //navigation.navigate("Balance", { data: data });
      const sumaData = Number(acm) + Number(inSumas);
      navigation.navigate("Balance", {
        value: value,
        valorc: valorc,
        sumaData: sumaData,
        acm: acm,
        datosVariable: datosVariable,
        usuario: usuario,
        op2: op2,
      });
      //setScanned(false);
    }

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }, []);

    if (hasPermission === null) {
      return (
        <View style={styles.cajaqra}>
          <Text>Acceso nulo</Text>
        </View>
      );
    }

    if (hasPermission === false) {
      return (
        <LinearGradient
          colors={["#38AA35", "#5cb032"]}
          style={stylesB.linear}
          start={{ x: 0, y: 1.6 }}
          end={{ x: 0, y: 0 }}
        >
          <SafeAreaView style={stylesB.body}>
            <BarStatus />
            <View style={[stylesB.completo, stylesL.Justify]}>
              <Animatable.View
                animation={"fadeInDownBig"}
                duration={1500}
                style={[stylesL.JustifyAlign]}
              >
                <View style={[stylesL.JustifyAlign]}>
                  <Text
                    style={[
                      stylesM.fontSizeTwentyEight,
                      stylesM.textColorWhite,
                      stylesM.textBold,
                    ]}
                  >
                    Permiso Denegado
                  </Text>
                </View>

                <Text
                  style={[
                    styles.textKey,
                    stylesM.textColorWhite,
                    stylesL.textAlignCenter,
                    stylesM.fontSizeEighteen,
                  ]}
                >
                  {`El permiso de la cámara ha sido denegado \n revisa los ajustes.`}
                </Text>

                <View style={stylesL.AlignItems}>
                  <TouchableOpacity
                    style={[
                      styles.boxBottomQr_txt,
                      styles.boxBottomQr_txt__width,
                      styles.backgroundYellowGreen,
                      stylesM.radiusTwenty,
                      stylesL.JustifyAlign,
                    ]}
                    activeOpacity={0.5}
                    onPress={() => regresar()}
                  >
                    <Text
                      style={[
                        stylesM.textBold,
                        stylesM.fontSizeFourteen,
                        styles.textColorDarkGreen,
                      ]}
                    >
                      VOLVER
                    </Text>
                  </TouchableOpacity>
                </View>
              </Animatable.View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      );
    }
    if (scanned == true) {
      // setTimeout(() => {
      //   navigation.navigate("TranExitosa", { inData: inData });
      // }, 2500);
      //return (
      // <LinearGradient
      //   colors={["#38AA35", "#5cb032"]}
      //   style={stylesB.linear}
      //   start={{ x: 0, y: 1.6 }}
      //   end={{ x: 0, y: 0 }}
      // >
      //   <SafeAreaView style={stylesB.body}>
      //     <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      //     <View style={[stylesB.completo, stylesL.Justify]}>
      //       <Animatable.View
      //         animation={"fadeInDownBig"}
      //         duration={1500}
      //         style={[stylesL.JustifyAlign]}
      //       >
      //         <View style={[stylesL.JustifyAlign, styles.topScan]}>
      //           <Text
      //             style={[
      //               stylesM.fontSizeTwentyEight,
      //               stylesM.textColorWhite,
      //               stylesM.textBold,
      //             ]}
      //           >
      //             QR Scaneado
      //           </Text>
      //         </View>
      //         <Text
      //           style={[
      //             styles.textKey,
      //             stylesM.textColorWhite,
      //             stylesL.textAlignCenter,
      //             stylesM.fontSizeEighteen,
      //           ]}
      //         >
      //           QR copiado en el portapapeles.
      //         </Text>
      //         <Text style={styles.copiadotxtAndro}>{text}</Text>
      //         <View style={[stylesL.flexRow, styles.widthRectangle]}>
      //           <View
      //             style={[styles.boxBottomQr, stylesM.widthPercentageFive]}
      //           >
      //             <TouchableOpacity
      //               style={[
      //                 styles.boxBottomQr_txt,
      //                 styles.backgroundWhite,
      //                 stylesM.radiusTwenty,
      //                 stylesL.JustifyAlign,
      //               ]}
      //               activeOpacity={0.8}
      //               onPress={() => [setScanned(false), setaprobado(false)]}
      //             >
      //               <Text
      //                 style={[styles.textbtnVCa, styles.textColorDarkGreen]}
      //               >
      //                 REESCANEAR
      //               </Text>
      //             </TouchableOpacity>
      //           </View>
      //           <View
      //             style={[styles.boxBottomQr, stylesM.widthPercentageFive]}
      //           >
      //             <TouchableOpacity
      //               style={[
      //                 styles.boxBottomQr_txt,
      //                 styles.backgroundWhite,
      //                 stylesM.radiusTwenty,
      //                 stylesL.JustifyAlign,
      //               ]}
      //               activeOpacity={0.8}
      //               onPress={() => regresar()}
      //             >
      //               <Text
      //                 style={[styles.textbtnVCa, styles.textColorDarkGreen]}
      //               >
      //                 CONFIRMAR
      //               </Text>
      //             </TouchableOpacity>
      //           </View>
      //         </View>
      //       </Animatable.View>
      //     </View>
      //   </SafeAreaView>
      // </LinearGradient>
      //);
    }
    // const handleBarCodeScanned = ({ data }) => {
    //   setScanned(true);
    //   setText(data);
    //   Clipboard.setString(data);
    //   //aqui va el envio de los props
    //   setmostrartitulo("QR Scaneado");
    //   setError("QR copiado en el portapapeles:");
    //   setaprobado(true);
    //   //setLottie(<Lotieqr />);
    //   setanmt("fadeInDownBig");
    //   navigation.navigate("Balance", { data: data });
    //   console.log(data);
    // };
    return (
      <SafeAreaView style={stylesB.body}>
        <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
        <TouchableOpacity
          activeOpacity={0.5}
          style={[stylesL.JustifyAlign, styles.goBack, styles.goBack__top]}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" size={sizeIcon} color="#fff" />
        </TouchableOpacity>
        <Camera
          onBarCodeScanned={(...args) => {
            // scanned ? undefined : handleBarCodeScanned;
            const data = args[0].data;
            const result = JSON.stringify(data);
            Clipboard.setString(data);
            setScanned(true);
            setText(data);
            //aqui va el envio de los props
            setmostrartitulo("QR Scaneado");
            setError("QR copiado en el portapapeles:");
            setaprobado(true);
            ////setLottie(<Lotieqr />);
            setanmt("fadeInDownBig");
            setTimeout(() => {
              navigation.navigate("TranExitosa", {
                data: data,
                sumaData: sumaData,
                datoVariable: datoVariable,
                datosVariable: datosVariable,
                usuario: usuario,
                op2: op2,
              });
            }, 100);
          }}
          barCodeScannerSettings={{
            barCodeTypes: ["qr"],
          }}
          style={[stylesB.completo, stylesL.Justify]}
        >
          <View
            style={[
              styles.box_titleQr,
              stylesL.AlignItems,
              stylesM.radiusSixteen,
              styles.backgroundBlackMedium,
            ]}
          >
            <Text style={stylesM.textColorWhite}>ESCANEAR CÓDIGO QR</Text>
          </View>
          <Animatable.View
            style={[styles.boxScanQr, stylesM.radiusSixteen]}
            animation="pulse"
            duration={2000}
            iterationCount={"infinite"}
          ></Animatable.View>
        </Camera>
      </SafeAreaView>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  // Style iOS
  containeruno: {
    alignItems: "center",
    height: windowHeight,
    paddingTop: RFValue(35),
    paddingLeft: RFValue(15),
    paddingRight: RFValue(15),
    width: windowWidth,
  },
  tituloqr: {
    alignItems: "center",
    backgroundColor: "rgba(29, 29, 27, 0.45)",
    borderRadius: 15,
    position: "absolute",
    padding: RFValue(20),
    top: RFValue(60),
  },
  textqr: {
    color: "white",
  },
  colorqr: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "4%",
  },
  barcodebox: {
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 5,
    borderColor: "rgba(255, 255, 255, 0.45)",
    height: windowHeight * 0.5,
    width: windowWidth * 0.9,
  },
  cajavolver: {
    alignItems: "center",
    bottom: RFValue(60),
    position: "absolute",
  },
  btnvolver: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 10,
    paddingHorizontal: RFValue(50),
    paddingVertical: RFValue(15),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  txtvolver: {
    color: "#5b298a",
    fontWeight: "bold",
    fontSize: RFValue(12),
  },

  // Modal
  cajafull: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(92, 172, 50, 1)",
    justifyContent: "center",
  },
  ventanafull: {
    alignItems: "center",
    height: windowHeight * 0.15,
    flexDirection: "column",
    width: windowWidth * 0.95,
  },
  contenedortextfull: {
    justifyContent: "center",
  },
  texticonfull: {
    color: "white",
    fontSize: RFValue(25),
    fontWeight: "bold",
    top: RFValue(-140),
  },
  icontextfull: {
    alignItems: "center",
    top: RFValue(-150),
  },
  contenedorlottiefull: {
    alignItems: "center",
    justifyContent: "center",
  },
  notificacionfull: {
    color: "white",
    fontSize: RFValue(16),
    textAlign: "center",
    top: RFValue(-80),
  },
  copiadotxt: {
    color: "white",
    fontSize: RFValue(16),
    textAlign: "center",
    top: RFValue(-70),
  },
  dcVC: {
    borderRadius: 10,
    flexDirection: "row",
    padding: RFValue(15),
    top: RFValue(-50),
  },
  dcV: {
    width: RFValue(143),
  },
  dcC: {
    width: RFValue(143),
  },
  btnVC: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 10,
    marginRight: RFValue(15),
    marginLeft: RFValue(15),
    paddingTop: RFValue(12),
    paddingBottom: RFValue(12),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  textbtnVC: {
    color: "black",
    fontWeight: "bold",
    fontSize: RFValue(11.5),
  },

  // Style Android
  container: {
    flex: 1,
  },
  cajaqra: {
    alignItems: "center",
    backgroundColor: "rgba(91, 41, 137, 1)",
    height: windowHeight,
    justifyContent: "center",
    width: windowWidth,
  },
  ventanaqra: {
    alignItems: "center",
    justifyContent: "center",
  },

  copiadotxta: {
    color: "#b9b8b8",
    fontSize: RFValue(16),
    paddingHorizontal: RFValue(20),
    textAlign: "center",
    top: RFValue(-40),
  },
  copiadotxtAndro: {
    color: "#b9b8b8",
    fontSize: RFValue(16),
    textAlign: "center",
    top: RFValue(-20),
  },
  dcVCa: {
    padding: RFValue(15),
  },
  dcVa: {
    width: RFValue(143),
  },
  dcCa: {
    width: RFValue(143),
  },

  textbtnVCa: {
    color: "#5b298a",
    fontWeight: "bold",
    fontSize: RFValue(11.5),
    zIndex: 999,
  },
  topScan: {
    marginTop: RFValue(5),
  },

  //camara

  cajavolvera: {
    alignItems: "center",
    bottom: RFValue(-40),
  },
  btnvolvera: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 10,
    paddingHorizontal: RFValue(50),
    paddingVertical: RFValue(15),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  txtvolvera: {
    color: "#5b298a",
    fontWeight: "bold",
    fontSize: RFValue(12),
  },
  cajav: {
    alignItems: "center",
  },
  btnv: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 10,
    paddingHorizontal: RFValue(50),
    paddingVertical: RFValue(15),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  txtv: {
    fontWeight: "bold",
    fontSize: RFValue(12),
  },

  //
  lottieqr: {
    width: 380,
    height: 380,
  },

  boxScanQr: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.4,
    borderWidth: 5,
    borderColor: "rgba(255, 255, 255, 0.45)",
  },
  textKey: {
    paddingHorizontal: RFValue(12),
    top: RFValue(-50),
  },
  box_titleQr: {
    padding: RFValue(20),
    top: RFValue(-40),
  },
  backgroundBlackMedium: {
    backgroundColor: "rgba(29, 29, 27, 0.45)",
  },
  goBack: {
    position: "absolute",
    marginTop: RFValue(37),
    left: RFValue(5),
    zIndex: 3,
    width: RFValue(42),
    height: RFValue(42),
  },
  textColorDarkGreen: {
    color: "#1F5326",
  },

  backgroundYellowGreen: {
    backgroundColor: "#ABCB59",
  },

  backgroundWhite: {
    backgroundColor: "white",
  },
  //////////////////////////////////

  widthRectangle: {
    width: RFValue(305),
  },
  boxBottomQr: {
    padding: RFValue(12),
  },
  boxBottomQr_txt: {
    height: RFValue(42),
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  goBack__top: {
    marginTop: RFValue(0),
  },
  boxBottomQr_txt__width: {
    width: RFValue(120),
  },
});

export default QrReader;
