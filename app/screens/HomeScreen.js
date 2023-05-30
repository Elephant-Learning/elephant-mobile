import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Flip from "./Flip";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Ionicons";
import Settings from "./Settings";

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
        <Tab.Screen
          name="Flip"
          component={Flip}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Icon name="book" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Icon name="home" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Icon name="Settings" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}
