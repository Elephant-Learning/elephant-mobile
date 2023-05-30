import { SafeAreaView, Text } from "react-native";
import React from "react";

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        WelcomeScreen
      </Text>
    </SafeAreaView>
  );
}
