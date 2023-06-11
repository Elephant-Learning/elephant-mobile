import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../config/colors";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    backgroundColor: colors.bgColor2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    fontFamily: "Bold",
    color: colors.tertiaryAccent,
  },
});
