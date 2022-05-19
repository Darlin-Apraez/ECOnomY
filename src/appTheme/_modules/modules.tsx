import {
  StyleSheet,
  Platform,
  Dimensions,
  StatusBar,
  Appearance,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const fontSizeTwelveIos = Platform.OS === "ios" ? 8.5 : 10;
const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

export const stylesM = StyleSheet.create({
  // =====================================================================
  // UNITY VARIABLES
  // =====================================================================
  textColorWhite: {
    color: "white",
  },

  textBold: {
    fontWeight: "bold",
  },

  textMedium: {
    fontWeight: "500",
  },

  textLight: {
    fontWeight: "normal",
  },

  fontSizeTwelve: {
    fontSize: RFValue(fontSizeTwelveIos),
  },

  fontSizeFourteen: {
    fontSize: RFValue(12),
  },

  fontSizeSixteen: {
    fontSize: RFValue(13),
  },

  fontSizeEighteen: {
    fontSize: RFValue(15),
  },

  fontSizeTwenty: {
    fontSize: RFValue(17),
  },

  fontSizeTwentyTwo: {
    fontSize: RFValue(18),
  },

  fontSizeTwentyFour: {
    fontSize: RFValue(20),
  },

  fontSizeTwentyEight: {
    fontSize: RFValue(23),
  },

  fontSizeFortyEight: {
    fontSize: RFValue(40),
  },

  fontSizeSixtyFour: {
    fontSize: RFValue(53.5),
  },

  fontSizeOneHundredTwenty: {
    fontSize: RFValue(100),
  },

  backgroundRed: {
    backgroundColor: "#764129",
  },

  backgroundWhite: {
    backgroundColor: "white",
  },

  radiusFour: {
    borderRadius: 4,
  },

  radiusFive: {
    borderRadius: 5,
  },

  radiusSix: {
    borderRadius: 6,
  },

  radiusSeven: {
    borderRadius: 7,
  },

  radiusTen: {
    borderRadius: 10,
  },

  radiusSixteen: {
    borderRadius: 16,
  },

  radiusTwenty: {
    borderRadius: 20,
  },

  widthPercentageFive: {
    width: "50%",
  },

  // =====================================================================
  // END UNITY VARIABLES.
  // =====================================================================

  //Boton verde general
  botonGreen: {
    backgroundColor: "#5CB032",
    width: 105,
    height: 50,
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center",
    alignContent: "center",
  },

  //Login
  containerBotonLogin: {
    marginTop: 30,
    alignItems: "center",
  },
  botonGreenLogin: {
    backgroundColor: "#5CB032",
    width: 105,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    alignContent: "center",
  },
  textBotonLogin: {
    fontWeight: "bold",
    margin: 15,
  },
  //end Login

  //screen Splash
  SplashScale: {
    width: 270,
    height: 270,
    display: "flex",
    resizeMode: "contain",
    // marginTop: 0,
    // left: 10,
    // backgroundColor: "red",
  },

  SplashContain: {
    width: 400,
    height: 400,
    margin: "auto",
    top: 150,
    // backgroundColor: "red",
  },

  SplashUnder: {
    left: 250,
    marginTop: 350,
  },

  EcoLogo: {
    resizeMode: "contain",
    width: 300,
    height: 300,
    marginVertical: 200,
  },

  //end screen Splash

  NameScale: {
    width: 370,
    height: 370,
    resizeMode: "contain",
    // left: 40,
    // top: 120,
    left: "1.5%",
    top: 100,
  },

  btnRegister: {
    width: 100,
    height: 50,
    backgroundColor: "green",
    margin: 20,
    borderRadius: 8,
  },
  // screen createaccount
  wrapperCA: {
    marginLeft: -15,
  },

  textAccount: {
    marginLeft: 10,
    marginTop: 20,
    color: "black",
    fontSize: 15,
    fontWeight: "300",
  },

  inputAccount: {
    width: 350,
    height: 50,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#5cb032",
    backgroundColor: "#c2ea5b",
    marginTop: 15,
    padding: 10,
  },

  textBoton: {
    fontWeight: "bold",
    margin: 8,
  },

  buttonCreate: {
    borderWidth: 7,
    borderColor: "#5cb032",
    width: 250,
    height: 70,
    padding: 15,
    borderRadius: 18,
    marginLeft: 55,
    marginTop: 20,
    backgroundColor: "white",
  },

  BacColor: {
    backgroundColor: "#c2ea5b",
  },

  txtButtonSend: {
    backgroundColor: "#5CB032",
    width: 105,
    height: 50,
    marginTop: 20,
    marginLeft: 40,
    borderRadius: 8,
    padding: 13,
    paddingLeft: 23,
    right: -105,
    top: 70,
    fontWeight: "300",
  },

  //

  //Balance
  textInputBalance: {
    backgroundColor: "#c2ea5b",
    width: 330,
    height: 320,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    borderRadius: 30,
  },

  textBalance: {
    fontSize: 100,
    marginTop: -320,
    fontWeight: "bold",
  },

  ecoPunto: {
    width: 170,
    height: 170,
  },

  containerBotones: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 50,
  },

  botonSend: {
    height: 50,
    width: 120,
    borderRadius: 6,
    elevation: 3,
    shadowRadius: 6,
    backgroundColor: "#5cb032",
    alignItems: "center",
    justifyContent: "center",
  },
  botonSend2: {
    height: 50,
    width: 120,
    borderRadius: 6,
    elevation: 3,
    shadowRadius: 6,
    backgroundColor: "#5cb032",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
  },

  logoECOnomY: {
    height: 300,
    width: 300,
    resizeMode: "contain",
    marginTop: 60,
  },

  //end Balance

  //Drawer
  botonMenuDrawer: {
    margin: 20,
  },
  textMenuDrawer: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 5,
  },
  containerLogout: {
    marginTop: 100,
    alignItems: "center",
  },
  backgroundLogout: {
    backgroundColor: "#ff7777",
    height: 40,
    width: 150,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  logout: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  //end Drawer

  //Receive
  containerboxReceive: {
    marginTop: 10,
    marginLeft: -250,
    alignItems: "center",
    justifyContent: "center",
  },
  boxReceive: {
    height: 40,
    width: 150,
    backgroundColor: "#c2ea5b",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  textInputBalanceReceive: {
    backgroundColor: "#c2ea5b",
    width: 330,
    height: 320,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 30,
  },
  containerimgQR: {
    marginTop: 40,
    marginLeft: -170,
  },
  imageQR: {
    height: 100,
    width: 100,
  },
  botonGenerate: {
    backgroundColor: "#c2ea5b",
    height: 40,
    width: 200,
    borderRadius: 80,
    marginTop: -70,
    marginLeft: 150,
    elevation: 3,
    shadowRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  textGenerate: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  containerNumCuenta: {
    width: 240,
    height: 100,
    marginTop: 80,
    alignItems: "center",
  },
  textContainerNumCuenta: {
    fontSize: 20,
  },
  textInputNumCuenta: {
    width: 230,
    height: 40,
    borderColor: "#c2ea5b",
    borderWidth: 2,
    borderRadius: 80,
    marginTop: 10,
    padding: 10,
  },
  containerCopy: {
    marginLeft: 295,
    marginTop: -59,
  },
  botonCopy: {
    height: 50,
    width: 50,
  },
  botonHistorial: {
    height: 40,
    width: 150,
    borderRadius: 80,
    backgroundColor: "#c2ea5b",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 280,
    marginTop: 30,
  },
  //end Receive
  //GenerateQR
  containerQR: {
    alignItems: "center",
    marginTop: 40,
  },
  boton: {
    height: 50,
    width: 80,
    borderRadius: 6,
    elevation: 3,
    shadowRadius: 6,
    backgroundColor: "#5cb032",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  //end GenerateQR

  //Send
  containerboxSend: {
    marginTop: 15,
    marginLeft: -250,
    alignItems: "center",
    justifyContent: "center",
  },
  boxSend: {
    height: 40,
    width: 150,
    backgroundColor: "#c2ea5b",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  ContainerTitulo: {
    width: 300,
    marginTop: 30,
    marginLeft: -40,
  },
  textTitulo: {
    fontSize: 15,
    fontWeight: "bold",
  },
  // checkbox: {
  //   alignSelf: "center",
  // },
  containerReceptor: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: -65,
  },
  botonCheck: {
    padding: 10,
  },
  imgAmigo: {
    resizeMode: "contain",
    height: 100,
    width: 100,
  },
  containerCant: {
    marginLeft: -60,
  },
  textInputSend: {
    width: 280,
    height: 40,
    borderColor: "#c2ea5b",
    borderWidth: 2,
    borderRadius: 80,
    marginTop: 10,
    padding: 10,
    marginBottom: 20,
  },
  containerQRSend: {
    marginTop: 40,
    marginLeft: -150,
  },
  botonScanSend: {
    backgroundColor: "#c2ea5b",
    height: 40,
    width: 150,
    borderRadius: 80,
    marginTop: -70,
    marginLeft: 150,
    elevation: 3,
    shadowRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  btnSend: {
    backgroundColor: "#00e37c",
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 80,
    marginTop: 80,
  },
  textBtnSend: {
    fontSize: 20,
    fontWeight: "bold",
  },
  //end Send

  //ReaderQR
  container_scanner: {
    width: 500,
    height: 340,
    alignItems: "center",
    justifyContent: "center",
  },
  BarCode: {
    alignItems: "center",
    justifyContent: "center",
  },

  colorqr: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "4%",
  },
  containerReScan: {
    marginTop: 665,
    alignItems: "center",
    flexDirection: "row",
  },

  botonReScan: {
    height: 50,
    width: 150,
    borderRadius: 6,
    backgroundColor: "#c2ea5b",
    alignItems: "center",
    justifyContent: "center",
  },

  botonScan: {
    height: 50,
    width: 80,
    borderRadius: 6,
    backgroundColor: "#c2ea5b",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  //end ReaderQR
});
