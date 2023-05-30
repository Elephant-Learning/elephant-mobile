import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomeScreen from "./app/screens/HomeScreen";
import { useFonts } from "expo-font";
import {
  Montserrat_100Thin,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";

const Stack = createStackNavigator();

export default function App() {
  const fontsLoaded = useFonts({
    Ionicons: require("./assets/Fonts/Ionicons.ttf"),
    Thin: Montserrat_100Thin,
    Light: Montserrat_300Light,
    Regular: Montserrat_400Regular,
    Semibold: Montserrat_600SemiBold,
    Bold: Montserrat_700Bold,
    Black: Montserrat_900Black,
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar backgroundColor="black"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="HomeWrapper" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
