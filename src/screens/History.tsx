import { View, Text, SafeAreaView, StatusBar, TextInput } from "react-native";
import React, { useState } from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";

const actions = [
  { label: "Transacciones" },
  { label: "Fecha" },
  { label: "Acciones" },
];

const History = () => {
  const [dropdown, setDropdown] = useState(null);
  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={[stylesB.completo, stylesM.BacColor]}>
        <View style={stylesM.containerHistorial}>
          <Text style={stylesM.txtHistorial}>HISTORIAL</Text>
          <Dropdown
            data={actions}
            style={stylesM.dropDownHistory}
            searchPlaceholder="Search"
            labelField="label"
            valueField="value"
            label="Dropdown"
            placeholder="Seleccionar filtro"
            value={dropdown}
            onChange={(item) => {
              setDropdown(item.value);
              console.log("selected", item);
            }}
          />
          <TextInput editable={false} style={stylesM.textInputHistory} />
          {/* <Text>Transacción</Text> */}
          <TextInput />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default History;
