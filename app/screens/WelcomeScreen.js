import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import React from "react";
import Button from "../components/Button";

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.mainText}>Elephant</Text>
        <View style={styles.buttonContainer}>
          <Button
            text={"Login"}
            onPress={() => {
              navigation.navigate("HomeWrapper");
            }}
          />
          <Button
            text={"Register"}
            onPress={() => {
              navigation.navigate("HomeWrapper");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontFamily: "Bold",
    fontSize: 50,
  },
  container: {
    display: "flex",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    margin: 4,
  },
});
