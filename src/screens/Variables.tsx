import { View, Text, SafeAreaView, StatusBar, TextInput } from "react-native";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import React from "react";

const Variables = () => {
  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={[stylesB.completo, stylesM.BacColor]}>
        <View style={stylesM.containerInputs}>
          <View style={stylesM.sectionOne}>
            {/* GAS */}
            <View style={[stylesM.inputsVariables, stylesM.colorInputs]}>
              <Text style={[stylesM.txtTitulo]}>GAS</Text>
              <View style={stylesM.viewOne}>
                <Text style={stylesM.txtDates}>CO2</Text>
                <Text style={stylesM.txtDates}>GEI</Text>
              </View>
              <View style={stylesM.viewTwo}>
                <Text style={stylesM.txtDatesNum}>35</Text>
                <Text style={stylesM.txtDatesNum}>28</Text>
              </View>
            </View>

            {/* ENERGÍA */}
            <View style={[stylesM.inputsVariables, stylesM.colorInputs]}>
              <Text style={[stylesM.txtTitulo]}>ENERGÍA</Text>
              <View style={stylesM.viewOne}>
                <Text style={stylesM.txtDates}>HYDR</Text>
                <Text style={stylesM.txtDates}>ALT</Text>
              </View>
              <View style={stylesM.viewTwo}>
                <Text style={stylesM.txtDatesNum1}>3800</Text>
                <Text style={stylesM.txtDatesNum2}>228</Text>
              </View>
            </View>
          </View>
          <View style={stylesM.sectionOne}>
            {/* TEMPERATURA */}
            <View style={[stylesM.inputsVariables, stylesM.colorInputs]}>
              <Text style={[stylesM.txtTituloT]}>TEMPERATURA</Text>
              <View style={stylesM.viewOne}>
                <Text style={stylesM.txtDates2}>MAX</Text>
                <Text style={stylesM.txtDates2}>MIN</Text>
              </View>
              <View style={stylesM.viewTwo}>
                <Text style={stylesM.txtDatesNum1}>38°C</Text>
                <Text style={stylesM.txtDatesNum2}>-10°C</Text>
              </View>
            </View>

            {/* AIRE */}
            <View style={[stylesM.inputsVariables, stylesM.colorInputs]}>
              <Text style={[stylesM.txtTituloT]}>AIRE</Text>
              <View style={stylesM.viewOne}>
                <Text style={stylesM.txtDates2}>CALIDAD</Text>
              </View>
              <View style={stylesM.viewTwo}>
                <Text style={stylesM.txtDatesNum1}>120</Text>
              </View>
            </View>
          </View>
          <View style={stylesM.sectionOne}>
            {/* AGUA */}
            <View style={[stylesM.inputsVariables, stylesM.colorInputs]}>
              <Text style={[stylesM.txtTituloT]}>AGUA</Text>
              <View style={stylesM.viewOne}>
                <Text style={stylesM.txtDates2}>POT</Text>
                <Text style={stylesM.txtDates2}>DISP</Text>
              </View>
              <View style={stylesM.viewTwo}>
                <Text style={stylesM.txtDatesNum3}>352</Text>
                <Text style={stylesM.txtDatesNum4}>255</Text>
              </View>
            </View>

            {/* RUIDO */}
            <View style={[stylesM.inputsVariables, stylesM.colorInputs]}>
              <Text style={[stylesM.txtTituloT]}>RUIDO</Text>
              <View style={stylesM.viewOne}>
                <Text style={stylesM.txtDates3}>DÍA</Text>
                <Text style={stylesM.txtDates3}>NOCHE</Text>
              </View>
              <View style={stylesM.viewTwo}>
                <Text style={stylesM.txtDatesNum5}>65</Text>
                <Text style={stylesM.txtDatesNum6}>40</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Variables;
