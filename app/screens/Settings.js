import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../config/colors";
import { SafeAreaView } from "react-native";
import Button from "../components/Button";

export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.image} source={require("../../assets/test.jpg")} />
        <View style={styles.info}>
          <Text style={styles.nameText}>Advay Patil</Text>
          <Text style={styles.accountType}>Elephant Student</Text>
          <Text style={styles.email}>advaypatil27@gmail.com</Text>
          <Text style={styles.streak}>0 Streak</Text>
        </View>
      </View>
      <Button text="Edit" marginTop={20} />
      <Button text="Sign Out" marginTop={1} type="secondary" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    backgroundColor: colors.bgColor2,
  },
  text: {
    fontSize: 32,
    fontFamily: "Bold",
    color: colors.tertiaryAccent,
  },
  image: {
    resizeMode: "cover",
    width: 150,
    height: 150,
    borderRadius: 60,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  nameText: {
    fontFamily: "Bold",
    fontSize: 30,
  },
  accountType: {
    fontFamily: "Semibold",
    fontSize: 18,
    color: colors.secondaryAccent,
    marginTop: 2,
  },
  info: {
    marginRight: 15,
  },
  email: {
    color: "#d4d5d9",
    fontFamily: "Semibold",
    marginTop: 2,
  },
  streak: {
    color: colors.tertiaryAccent,
    fontFamily: "Semibold",
    marginTop: 2,
  },
});
