import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Flip from "./Flip";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Ionicons";
import Settings from "./Settings";
import { colors } from "../config/colors";

const Tab = createBottomTabNavigator();

export default function HomeScreen({route}) {
  return (
    <>
      <StatusBar backgroundColor="black"></StatusBar>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Flip"
          component={Flip}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Icon name="book" color={color} size={size} />;
            },
            tabBarActiveTintColor: colors.secondaryAccent,
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          initialParams={route.params}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Icon name="home" color={color} size={size} />;
            },
            tabBarActiveTintColor: colors.secondaryAccent,
          }}
        />
        <Tab.Screen
          name="settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Icon name="settings" color={color} size={size} />;
            },
            tabBarActiveTintColor: colors.secondaryAccent,
          }}
        />
      </Tab.Navigator>
    </>
  );
}
