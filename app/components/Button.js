import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../config/colors";

export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: colors.primaryAccent,
    borderRadius: 8,
    margin: 4,
  },
  text: {
    color: colors.bgColor1,
    fontFamily: "Semibold",
    fontSize: 20,
  },
});
