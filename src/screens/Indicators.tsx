import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
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
        <ScrollView style={stylesM.scrollView}>
          <View style={stylesM.containerIndicator}>
            <Text style={stylesM.txtSostenibilidad}>TÚ APORTE</Text>
            <Image
              source={require("./../../assets/img/IndicadorPersonal.png")}
              style={stylesM.indicator}
            />
            <Text style={stylesM.txtGraficaG}>GRÁFICA GENERAL</Text>
            <Image
              source={require("./../../assets/img/LinealGrafica.jpeg")}
              style={stylesM.indicatorTwo}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Indicators;
