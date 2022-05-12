import {
  StyleSheet,
  Platform,
  Dimensions,
  StatusBar,
  Appearance,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const fontSizeTwelveIos = Platform.OS === "ios" ? 8.5 : 10;

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
    margin: "auto",
    position: "absolute",
    resizeMode: "contain",
    width: 300,
    height: 300,
    marginTop: 100,
  },

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

  textAccount: {
    marginLeft: 25,
    marginTop: 20,
    color: "black",
    width: 500,
    fontSize: 15,
    fontWeight: "300",
  },

  inputAccount: {
    width: 350,
    height: 50,
    borderRadius: 8,
    borderWidth: 2,
    marginLeft: 20,
    borderColor: "#5cb032",
    backgroundColor: "#c2ea5b",
    margin: 15,
    paddingLeft: 10,
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

  textEmailFrame: {
    width: 350,
    borderWidth: 2,
    borderColor: "#5cb032",
  },

  wrapperCA: {
    top: 50,
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

  //GnerateQR

  boton: {
    height: 50,
    width: 80,
    borderRadius: 6,
    elevation: 3,
    shadowRadius: 6,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  //ReaderQR
  container_scanner: {
    height: 300,
    width: 300,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  colorqr: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "4%",
  },

  botonScan: {
    height: 50,
    width: 80,
    borderRadius: 6,
    elevation: 3,
    shadowRadius: 6,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    top: 100,
  },
});
