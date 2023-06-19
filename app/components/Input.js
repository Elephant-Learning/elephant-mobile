import { StyleSheet, Text, SafeAreaView, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../config/colors";

export default function Input({
  label,
  placeholder,
  icon,
  password = false,
  keyboardType = "default",
  height = 40,
  width = "100%",
  spacing = 12,
}) {
  return (
    <View style={{ ...styles.container, gap: spacing }}>
      {icon}
      <TextInput
        placeholder={placeholder}
        style={{ ...styles.input, height: height, width: width }}
        secureTextEntry={password}
        keyboardType={keyboardType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    padding: 10,
    fontFamily: "Regular",
    fontSize: 18,
    borderBottomColor: colors.secondaryAccentGradient,
    marginVertical: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
