import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerMenu from "./src/components/DrawerMenu";

import Splash from "./src/screens/Splash";
import CreateAccount from "./src/screens/CreateAccount";
import Verification from "./src/screens/Verification";
import Balance from "./src/screens/Balance";
import Receive from "./src/screens/Receive";
import Send from "./src/screens/Send";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import History from "./src/screens/History";
import Stats from "./src/screens/Stats";
import Indicators from "./src/screens/Indicators";
import GenerateQR from "./src/screens/GenerateQR";
//import ReaderQR from "./src/screens/ReaderQR";
import Variables from "./src/screens/Variables";
import QrReader from "./src/screens/QrReader";
import Analyzer from "./src/screens/Analyzer";
import QRSendPoint from "./src/screens/QRSendPoint";
import Sound from "./src/screens/Sound";
import SinInternet from "./src/screens/SinInternet";
import TranExitosa from "./src/screens/TranExitosa";
import TranFallida from "./src/screens/TranFallida";
import FondoInsufi from "./src/screens/FondoInsufi";

import React, { useEffect, useState } from "react";

const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

function DrawerApp() {
  return (
    <Drawer.Navigator
      drawerContent={DrawerMenu}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#c2ea5b",
          width: 300,
          // alignItems: "center",
        },
      }}
    >
      <Drawer.Screen
        name="Balance"
        component={Balance}
        options={{
          swipeEnabled: false,
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "grey",
        }}
      />
      <Drawer.Screen
        name="History"
        component={History}
        options={{
          swipeEnabled: false,
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "grey",
        }}
      />
      <Drawer.Screen
        name="Indicators"
        component={Indicators}
        options={{
          swipeEnabled: false,
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "grey",
        }}
      />
      <Drawer.Screen
        name="Variables"
        component={Variables}
        options={{
          swipeEnabled: false,
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "grey",
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Analyzer"
          component={Analyzer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DrawerApp"
          component={DrawerApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Receive"
          component={Receive}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Send"
          component={Send}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QRSendPoint"
          component={QRSendPoint}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TranFallida"
          component={TranFallida}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TranExitosa"
          component={TranExitosa}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QrReader"
          component={QrReader}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SinInternet"
          component={SinInternet}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FondoInsufi"
          component={FondoInsufi}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
