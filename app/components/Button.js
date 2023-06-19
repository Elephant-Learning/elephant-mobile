import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../config/colors";

export default function Button({
  text,
  onPress,
  marginTop,
  type = "primary",
  ...otherStyles
}) {
  const backgroundColor =
    type === "primary"
      ? colors.primaryAccent
      : type === "secondary"
      ? colors.secondaryAccent
      : colors.tertiaryAccent;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.button,
        marginTop: marginTop,
        backgroundColor: backgroundColor,
        ...otherStyles,
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: colors.primaryAccent,
    borderRadius: 10,
    margin: 10,
  },
  text: {
    color: colors.bgColor1,
    fontFamily: "Semibold",
    fontSize: 20,
    textAlign: "center",
  },
});
