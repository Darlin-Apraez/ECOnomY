import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { readUser } from "../../api";

const Analyzer = ({ navigation }: { navigation: any }) => {
  const [usuario, setUsuario] = useState("");
  readUser().then((value) => {
    console.log("Este es el valor" + value);
    setUsuario(value);
  });

  function navegar() {
    if (usuario === null) {
      navigation.navigate("Splash", { text: "Register" });
    } else if (usuario != "") {
      navigation.navigate("Splash", { text: "Login" });
    }
  }

  useEffect(() => {
    navegar();
  }, [usuario]);

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Analyzer;
