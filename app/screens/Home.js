import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import React from "react";
import DeckCard from "../components/DeckCard";

export default function Home({navigation, route}) {

  const {id, firstName, decks} = route.params;


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome, {firstName}</Text>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
          width: "100%",
          marginTop: 10,
        }}
      />
      <View style={styles.contentContainer}>
        {decks.map((e, idx) => {
          return <DeckCard title={e.name} 
          backImg={require("../../assets/test2.jpg")} key={idx} onPress={() => {
            navigation.navigate("Flip", {cards: e.cards});
          }}/>
        })}
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
