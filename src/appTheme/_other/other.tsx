import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const stylesO = StyleSheet.create({
  colorp: {
    backgroundColor: "red",
  },
  completo__flexGrow: {
    flexGrow: 1,
    flex: 0,
  },
  botonGreen_alineacion: {
    marginTop: 50,
  },

  //DrawerMenu
  textMenuDrawer_centerOne: {
    marginRight: 5,
  },
  textMenuDrawer_centerTwo: {
    marginRight: 5,
  },
  textMenuDrawer_centerThree: {
    marginRight: 5,
  },

  //end DrawerMenu

  //AccionesSost
  btnTop: {
    position: "absolute",
    marginTop: RFValue(215),
  },

  btnTop2: {
    marginTop: RFValue(-30),
  },

  btnTop3: {
    marginTop: RFValue(-30),
  },
  //End AccionesSost
});
