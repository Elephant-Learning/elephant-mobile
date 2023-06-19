import { StyleSheet, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../config/colors";
import { View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from "react";

export default function SignUp({ navigation }) {
  const [selectedType, setSelectedType] = useState("None");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <Input
        placeholder={"Email"}
        icon={
          <Icon
            name="mail-outline"
            size={24}
            color={colors.secondaryAccentGradient}
          />
        }
        width="80%"
        keyboardType="email-address"
      />
      <Input
        placeholder={"Password"}
        icon={
          <Icon
            name="lock-closed-outline"
            size={24}
            color={colors.secondaryAccentGradient}
          />
        }
        width="80%"
        password={true}
      />
      <View style={styles.accountTypeCont}>
        <Button
          text={"Individual"}
          margin={3}
          onPress={() => {
            setSelectedType("Individual");
          }}
        />
        <Button
          text={"Student"}
          margin={3}
          onPress={() => {
            setSelectedType("Student");
          }}
        />
        <Button
          text={"Instructor"}
          margin={3}
          onPress={() => {
            setSelectedType("Instructor");
          }}
        />
      </View>
      <Text style={styles.confirmText}>Selected Type: {selectedType}</Text>
      <View style={styles.footer}>
        <Button text={"Sign Up"} type="secondary" />
        <Button
          text={"Go Back"}
          type="tertiary"
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
    marginTop: 180,
  },
  header: {
    fontSize: 43,
    fontFamily: "Bold",
    marginBottom: 20,
  },
  accountTypeCont: {
    display: "flex",
    marginTop: 20,
    borderColor: "black",
    gap: 1,
    width: "70%",
  },
  confirmText: {
    fontFamily: "Light",
    fontSize: 20,
    marginTop: 10,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 37,
  },
});
