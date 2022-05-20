import {
  StyleSheet,
  Platform,
  Dimensions,
  StatusBar,
  Appearance,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const fontSizeQR = Platform.OS === "ios" ? 14 : 17;
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

  // fontSizeTwelve: {
  //   fontSize: RFValue(fontSizeTwelveIos),
  // },

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
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  //estilo general
  textAccount: {
    marginLeft: RFValue(8),
    marginTop: RFValue(18),
    color: "black",
    fontSize: 15,
    fontWeight: "300",
  },
  //********************** */

  //screen Splash

  EcoLogo: {
    resizeMode: "contain",
    width: RFValue(291),
    height: RFValue(291),
    marginVertical: RFValue(182),
  },

  //End Splash

  //Screen Register
  BacColor: {
    backgroundColor: "#c2ea5b",
  },
  NameScale: {
    width: RFValue(345),
    height: RFValue(138),
    resizeMode: "contain",
    marginTop: RFValue(170),
  },
  containerButtons: {
    marginTop: RFValue(23),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCreate: {
    borderWidth: 7,
    borderColor: "#5cb032",
    width: RFValue(228),
    height: RFValue(64),
    //padding: 15,
    borderRadius: 18,
    marginBottom: RFValue(14),
    backgroundColor: "white",
    justifyContent: "center",
  },
  textButtonCreate: {
    fontSize: 20,
    textAlign: "center",
  },
  //End Register

  //Login
  containerGeneral: {
    marginTop: RFValue(25),
  },
  containerBotonLogin: {
    marginTop: RFValue(27),
    justifyContent: "center",
    alignItems: "center",
  },
  botonGreenLogin: {
    backgroundColor: "#5CB032",
    width: RFValue(98),
    height: RFValue(46),
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textBotonLogin: {
    fontWeight: "bold",
    textAlign: "center",
  },
  //End Login

  btnRegister: {
    width: 100,
    height: 50,
    backgroundColor: "green",
    margin: 20,
    borderRadius: 8,
  },

  // screen createaccount
  containerInterno: {
    marginLeft: RFValue(20),
  },
  wrapperCA: {
    marginTop: RFValue(20),
  },
  inputAccount: {
    width: RFValue(317),
    height: RFValue(45),
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#5cb032",
    backgroundColor: "#c2ea5b",
    marginTop: RFValue(13),
    padding: RFValue(8),
  },
  textBoton: {
    fontWeight: "bold",
    margin: RFValue(6),
  },
  containerCaRegister: {
    alignItems: "center",
    justifyContent: "center",
  },
  //End CreateAccount

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
    width: RFValue(295),
    height: RFValue(290),
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(73),
    borderRadius: 30,
  },

  textBalance: {
    fontSize: RFValue(92),
    marginTop: RFValue(-290),
    fontWeight: "bold",
  },

  ecoPunto: {
    width: RFValue(155),
    height: RFValue(155),
  },

  containerBotones: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: RFValue(46),
  },

  botonSend: {
    height: RFValue(45),
    width: RFValue(110),
    borderRadius: 6,
    elevation: 3,
    shadowRadius: 6,
    backgroundColor: "#5cb032",
    alignItems: "center",
    justifyContent: "center",
  },
  botonSend2: {
    height: RFValue(45),
    width: RFValue(110),
    borderRadius: 6,
    elevation: 3,
    shadowRadius: 6,
    backgroundColor: "#5cb032",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: RFValue(55),
  },

  logoECOnomY: {
    height: RFValue(100),
    width: RFValue(272),
    resizeMode: "contain",
    marginTop: RFValue(150),
  },

  //end Balance

  //Drawer
  containerDrawer: {
    marginTop: RFValue(20),
  },
  botonMenuDrawer: {
    margin: RFValue(20),
  },
  textMenuDrawer: {
    fontWeight: "bold",
    fontSize: RFValue(17),
    marginLeft: RFValue(3),
  },
  containerLogout: {
    marginTop: RFValue(95),
    alignItems: "center",
  },
  backgroundLogout: {
    backgroundColor: "#ff7777",
    height: RFValue(37),
    width: RFValue(143),
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  logout: {
    color: "black",
    fontSize: RFValue(13),
    fontWeight: "bold",
  },
  //end Drawer

  //Receive
  containerboxReceive: {
    marginTop: RFValue(9),
    marginLeft: RFValue(-227),
    height: RFValue(37),
    width: RFValue(145),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c2ea5b",
  },
  boxReceive: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: RFValue(18),
    fontWeight: "bold",
  },
  textInputBalanceReceive: {
    backgroundColor: "#c2ea5b",
    width: RFValue(300),
    height: RFValue(292),
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(27),
    borderRadius: 30,
  },
  containerimgQR: {
    marginTop: RFValue(36),
    marginLeft: RFValue(-165),
  },
  imageQR: {
    height: RFValue(91),
    width: RFValue(91),
  },
  botonGenerate: {
    backgroundColor: "#c2ea5b",
    height: RFValue(36),
    width: RFValue(182),
    borderRadius: 80,
    marginTop: RFValue(-63),
    marginLeft: RFValue(135),
    elevation: 3,
    shadowRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  textGenerate: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: RFValue(fontSizeQR),
    fontWeight: "bold",
  },
  containerNumCuenta: {
    width: RFValue(219),
    height: RFValue(91),
    marginTop: RFValue(72),
    alignItems: "center",
  },
  textContainerNumCuenta: {
    fontSize: RFValue(18),
  },
  textInputNumCuenta: {
    width: RFValue(210),
    height: RFValue(37),
    borderColor: "#c2ea5b",
    borderWidth: 2,
    borderRadius: 80,
    margin: RFValue(9),
    padding: RFValue(9),
  },
  containerCopy: {
    marginLeft: RFValue(270),
    marginTop: RFValue(-55),
    height: RFValue(30),
    width: RFValue(25),
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
    marginTop: 100,
  },
  botonReturnReceive: {
    height: 40,
    width: 150,
    borderRadius: 80,
    backgroundColor: "#c2ea5b",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -280,
    marginTop: -40,
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
    marginTop: 40,
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
  textActions: {
    marginTop: 30,
    fontWeight: "bold",
  },
  dropDown: {
    width: 180,
    height: 70,
    marginTop: 25,
    padding: 5,
    borderColor: "#c2ea5b",
    borderWidth: 2,
  },
  containerQRSend: {
    marginTop: -83,
    marginLeft: 195,
  },
  botonScanSend: {
    backgroundColor: "#c2ea5b",
    height: 40,
    width: 150,
    borderRadius: 80,
    marginTop: 20,
    marginLeft: 190,
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

  //Indicator
  containerIndicator: {
    marginTop: 40,
    alignItems: "center",
  },
  txtSostenibilidad: {
    fontSize: 20,
  },
  indicator: {
    resizeMode: "contain",
    marginTop: -25,
    height: 250,
    width: 250,
  },
  txtGraficaG: {
    fontSize: 20,
    marginTop: -25,
  },
  indicatorTwo: {
    resizeMode: "contain",
    marginTop: -50,
    height: 400,
    width: 400,
  },
  indicatorThree: {
    resizeMode: "contain",
    marginTop: -70,
    height: 300,
    width: 300,
  },
  //End Indicator

  //History
  containerHistorial: {
    marginTop: 45,
    alignItems: "center",
  },
  txtHistorial: {
    fontSize: 25,
    fontWeight: "bold",
  },
  dropDownHistory: {
    width: 250,
    height: 70,
    marginTop: 25,
    padding: 5,
    borderColor: "#5cb032",
    borderWidth: 2,
  },
  textInputHistory: {
    height: 350,
    width: 350,
    backgroundColor: "#5cb032",
    marginTop: 150,
    borderRadius: 10,
  },
  //End History

  //Variables
  colorInputs: {
    backgroundColor: "#ffeb7b",
  },
  containerInputs: {
    marginTop: 50,
  },
  sectionOne: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
  },
  inputsVariables: {
    width: 140,
    height: 140,
    margin: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  viewOne: {
    marginTop: 20,
    flexDirection: "row",
    textAlign: "center",
  },
  txtDates: {
    marginHorizontal: 15,
    fontSize: 15,
  },
  txtDates2: {
    marginHorizontal: 19.5,
    fontSize: 15,
  },
  txtDates3: {
    marginHorizontal: 10,
    fontSize: 15,
  },
  viewTwo: {
    flexDirection: "row",
    textAlign: "center",
  },
  txtDatesNum: {
    marginHorizontal: 20,
    fontSize: 15,
  },
  txtDatesNum1: {
    marginHorizontal: 17,
    fontSize: 15,
  },
  txtDatesNum2: {
    marginHorizontal: 15,
    fontSize: 15,
  },
  txtDatesNum3: {
    marginHorizontal: 21.2,
    fontSize: 15,
  },
  txtDatesNum4: {
    marginHorizontal: 23.5,
    fontSize: 15,
  },
  txtDatesNum5: {
    marginHorizontal: 15,
    fontSize: 15,
  },
  txtDatesNum6: {
    marginHorizontal: 25,
    fontSize: 15,
  },
  txtTituloT: {
    fontSize: 17,
    fontWeight: "bold",
    paddingTop: 10,
  },
  sectionTwo: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 15,
  },
  inputsVariabless: {
    width: 314.5,
    height: 90,
    margin: 10,
    borderRadius: 20,
    paddingTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },

  //End Variables
});
