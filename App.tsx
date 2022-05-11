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

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function NavigationMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Balance" component={Balance} />
    </Tab.Navigator>
  );
}

function DrawerApp() {
  return (
    <Drawer.Navigator
      drawerContent={DrawerMenu}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "green",
          width: 300,
        },
      }}
    >
      <Drawer.Screen
        name="NavigationMenu"
        component={NavigationMenu}
        options={{
          swipeEnabled: false,
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "white",
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
          name="Verification"
          component={Verification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Balance"
          component={Balance}
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
          name="DrawerApp"
          component={DrawerApp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
