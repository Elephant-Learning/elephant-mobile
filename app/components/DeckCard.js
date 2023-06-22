import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function DeckCard({ onPress = () => {}, backImg, title }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={backImg}
        style={{
          width: 196,
          height: 160,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          resizeMode: "cover",
        }}
      ></Image>
      <View
        style={{
          display: "flex",
          height: 50,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#E2E8F0",
    width: 200,
    height: 200,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    fontFamily: "Semibold",
    marginTop: 9,
    color: "white",
  },
});
