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
    width: 350,
    height: 350,
    resizeMode: "contain",
    left: 40,
    top: 120,
  },

  btnRegister: {
    width: 100,
    height: 50,
    backgroundColor: "green",
    margin: 20,
    borderRadius: 8,
  },

  textAccount: {
    marginLeft: 20,
    marginTop: 20,
    color: "black",
  },

  inputAccount: {
    width: 150,
    height: 40,
    borderRadius: 8,
    borderWidth: 2,
    marginLeft: 20,
    borderColor: "green",
  },
});
