import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Flip from "./Flip";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <>
      <StatusBar backgroundColor="black"></StatusBar>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Flip" component={Flip} />
      </Tab.Navigator>
    </>
  );
}
