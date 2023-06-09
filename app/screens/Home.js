import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import React from "react";
import DeckCard from "../components/DeckCard";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome, Advay Patil</Text>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
          width: "100%",
          marginTop: 10,
        }}
      />
      <View style={styles.contentContainer}>
        <DeckCard
          title={"Deck 1"}
          backImg={require("../../assets/test2.jpg")}
        />
        <DeckCard
          title={"Deck 2"}
          backImg={require("../../assets/test2.jpg")}
        />
        <DeckCard
          title={"Deck 3"}
          backImg={require("../../assets/test2.jpg")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "Bold",
    fontSize: 30,
  },
  contentContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
    padding: 5,
    marginTop: 10,
  },
});
