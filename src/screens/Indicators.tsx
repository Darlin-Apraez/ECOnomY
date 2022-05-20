import { View, Text, SafeAreaView, StatusBar, Image } from "react-native";
import React from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
// import {
//   Chart,
//   Line,
//   Area,
//   HorizontalAxis,
//   VerticalAxis,
// } from "react-native-responsive-linechart";
// import { Line } from "react-chartjs-2";
// import faker from "faker";

const Indicators = () => {
  // const labels = ["Personal", "Barrio", "Comuna", "Ciudad", "Pais", "Global"];

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "Dataset 1",
  //       data: labels.map(() =>
  //         faker.datatype.number({ min: -1000, max: 1000 })
  //       ),
  //       borderColor: "rgb(255, 99, 132)",
  //       backgroundColor: "rgba(255, 99, 132, 0.5)",
  //     },
  //     {
  //       label: "Dataset 2",
  //       data: labels.map(() =>
  //         faker.datatype.number({ min: -1000, max: 1000 })
  //       ),
  //       borderColor: "rgb(53, 162, 235)",
  //       backgroundColor: "rgba(53, 162, 235, 0.5)",
  //     },
  //   ],
  // };
  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: "top" as const,
  //     },
  //     title: {
  //       display: true,
  //       text: "Chart.js Line Chart",
  //     },
  //   },
  // };
  return (
    <SafeAreaView style={stylesB.body}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={[stylesB.completo, stylesM.BacColor]}>
        <View style={stylesM.containerIndicator}>
          <Text style={stylesM.txtSostenibilidad}>NIVEL DE SOSTENIBILIDAD</Text>
          <Image
            source={require("./../../assets/img/indicadorUno.png")}
            style={stylesM.indicator}
          />
          <Text style={stylesM.txtGraficaG}>GRÁFICA GENERAL</Text>
          <Image
            source={require("./../../assets/img/Grafica-Lineal.jpeg")}
            style={stylesM.indicatorTwo}
          />
          <Text style={stylesM.txtGraficaG}>GRÁFICA PERSONAL</Text>
          <Image
            source={require("./../../assets/img/Personal.jpeg")}
            style={stylesM.indicatorThree}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Indicators;
