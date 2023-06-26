import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../config/colors";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableHighlight } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";

export default function Flip() {
  const terms = ["asdf", "asd", "asdff", "dd", "asf", "as"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = (amount) => {
    setCurrentIndex(currentIndex + amount);
    if (amount < 0) {
      setCurrentIndex(Math.max(currentIndex, 0));
      return;
    }
    setCurrentIndex(Math.min(currentIndex, terms.length));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.termContainer}>
        <Text style={styles.text}>{terms[currentIndex]}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            setCurrentIndex(Math.max(currentIndex - 1, 0));
            console.log(currentIndex);
          }}
        >
          <Icon name="caret-back-circle-outline" size={80} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrentIndex(Math.min(currentIndex + 1, terms.length - 1));
          }}
        >
          <Icon name="caret-forward-circle-outline" size={80} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  },
  termContainer: {
    height: "40%",
    width: "90%",
    borderWidth: 1,
    borderColor: colors.grayBorderColor,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 40,
  },
});
