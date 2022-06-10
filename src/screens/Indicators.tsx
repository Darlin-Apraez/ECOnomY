import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import ReactSpeedometer from "react-d3-speedometer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Indicators = () => {
  //colores graficas
  const [grafuno, setGrafuno] = useState("#e6007e");
  const [grafdos, setGrafdos] = useState("#f29200");
  const [graftres, setGraftres] = useState("#0172ff");
  const [grafcuatro, setGrafcuatro] = useState("#00ffea");
  const [grafcinco, setGrafcinco] = useState("#00963f");
  const [grafseis, setGrafseis] = useState("#000000");
  const [grafsiete, setGrafsiete] = useState("#fefb00");

  const getColourGen = "#c3ea5b";

  const colours = ["#e6007e", "#c3ea5b"];
  const getColour = () => colours[Math.floor(Math.random() * colours.length)];

  const coloursdos = ["#f29200", "#c3ea5b"];
  const getColourdos = () =>
    coloursdos[Math.floor(Math.random() * coloursdos.length)];

  const colourstres = ["#0172ff", "#c3ea5b"];
  const getColourtres = () =>
    colourstres[Math.floor(Math.random() * colourstres.length)];

  const colourscuatro = ["#00ffea", "#c3ea5b"];
  const getColourcuatro = () =>
    colourscuatro[Math.floor(Math.random() * colourscuatro.length)];

  const colourscinco = ["#00963f", "#c3ea5b"];
  const getColourcinco = () =>
    colourscinco[Math.floor(Math.random() * colourscinco.length)];

  const coloursseis = ["#000000", "#c3ea5b"];
  const getColourseis = () =>
    coloursseis[Math.floor(Math.random() * coloursseis.length)];

  const colourssiete = ["#fefb00", "#c3ea5b"];
  const getColoursiete = () =>
    colourssiete[Math.floor(Math.random() * colourssiete.length)];

  const handleClickUno = () => {
    setGrafuno(getColour());
    setColourUno(getColour());
    setColourDos(getColourGen);
    setColourTres(getColourGen);
    setColourCuatro(getColourGen);
    setColourCinco(getColourGen);
    setColourSeis(getColourGen);
    setColourSiete(getColourGen);
  };
  const handleClickDos = () => {
    setColourUno(getColourGen);
    setColourDos(getColourdos());
    setGrafdos(getColourdos());
    setColourTres(getColourGen);
    setColourCuatro(getColourGen);
    setColourCinco(getColourGen);
    setColourSeis(getColourGen);
    setColourSiete(getColourGen);
  };
  const handleClickTres = () => {
    setColourUno(getColourGen);
    setColourDos(getColourGen);
    setGraftres(getColourtres());
    setColourTres(getColourtres());
    setColourCuatro(getColourGen);
    setColourCinco(getColourGen);
    setColourSeis(getColourGen);
    setColourSiete(getColourGen);
  };
  const handleClickCuatro = () => {
    setColourUno(getColourGen);
    setColourDos(getColourGen);
    setColourTres(getColourGen);
    setGrafcuatro(getColourcuatro());
    setColourCuatro(getColourcuatro());
    setColourCinco(getColourGen);
    setColourSeis(getColourGen);
    setColourSiete(getColourGen);
  };
  const handleClickCinco = () => {
    setColourUno(getColourGen);
    setColourDos(getColourGen);
    setColourTres(getColourGen);
    setColourCuatro(getColourGen);
    setGrafcinco(getColourcinco());
    setColourCinco(getColourcinco());
    setColourSeis(getColourGen);
    setColourSiete(getColourGen);
  };
  const handleClickSeis = () => {
    setColourUno(getColourGen);
    setColourDos(getColourGen);
    setColourTres(getColourGen);
    setColourCuatro(getColourGen);
    setGrafseis(getColourseis());
    setColourSeis(getColourseis());
    setColourSiete(getColourGen);
  };
  const handleClickSiete = () => {
    setColourUno(getColourGen);
    setColourDos(getColourGen);
    setColourTres(getColourGen);
    setColourCuatro(getColourGen);
    setColourCinco(getColourGen);
    setColourSeis(getColourGen);
    setGrafsiete(getColoursiete());
    setColourSiete(getColoursiete());
  };

  //color interno
  const [colour, setColourUno] = useState("#e6007e");
  const [colourdos, setColourDos] = useState("#f29200");
  const [colourtres, setColourTres] = useState("#0172ff");
  const [colourcuatro, setColourCuatro] = useState("#00ffea");
  const [colourcinco, setColourCinco] = useState("#00963f");
  const [colourseis, setColourSeis] = useState("#000000");
  const [coloursiete, setColourSiete] = useState("#fefb00");

  //color borde
  const [border, setBorderUno] = useState("#e6007e");
  const [borderdos, setBorderDos] = useState("#f29200");
  const [bordertres, setBorderTres] = useState("#0172ff");
  const [bordercuatro, setBorderCuatro] = useState("#00ffea");
  const [bordercinco, setBorderCinco] = useState("#00963f");
  const [borderseis, setBorderSeis] = useState("#000000");
  const [bordersiete, setBorderSiete] = useState("#fefb00");

  //datos gráfica
  const data = [
    {
      name: "LUN",
      tu: Math.random() * 100,
      gru: Math.random() * 100,
      bar: Math.random() * 100,
      emp: Math.random() * 100,
      ciu: Math.random() * 100,
      pai: Math.random() * 100,
      glo: Math.random() * 100,
    },
    {
      name: "MAR",
      tu: Math.random() * 100,
      gru: Math.random() * 100,
      bar: Math.random() * 100,
      emp: Math.random() * 100,
      ciu: Math.random() * 100,
      pai: Math.random() * 100,
      glo: Math.random() * 100,
    },
    {
      name: "MIE",
      tu: Math.random() * 100,
      gru: Math.random() * 100,
      bar: Math.random() * 100,
      emp: Math.random() * 100,
      ciu: Math.random() * 100,
      pai: Math.random() * 100,
      glo: Math.random() * 100,
    },
    {
      name: "JUE",
      tu: Math.random() * 100,
      gru: Math.random() * 100,
      bar: Math.random() * 100,
      emp: Math.random() * 100,
      ciu: Math.random() * 100,
      pai: Math.random() * 100,
      glo: Math.random() * 100,
    },
    {
      name: "VIE",
      tu: Math.random() * 100,
      gru: Math.random() * 100,
      bar: Math.random() * 100,
      emp: Math.random() * 100,
      ciu: Math.random() * 100,
      pai: Math.random() * 100,
      glo: Math.random() * 100,
    },
  ];

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
      {/* <ReactSpeedometer
        value={Math.random() * 1000}
        currentValueText="Medición"
        customSegmentLabels={[
          {
            text: "Muy mala",
            color: "#555",
            fontSize: "12",
          },
          {
            text: "Mala",
            color: "#555",
          },
          {
            text: "Regular",
            color: "#555",
          },
          {
            text: "Buena",
            color: "#555",
          },
          {
            text: "Muy buena",
            color: "#555",
            fontSize: "12",
          },
        ]}
        needleColor={"black"}
      /> */}
    </SafeAreaView>
  );
};

export default Indicators;
