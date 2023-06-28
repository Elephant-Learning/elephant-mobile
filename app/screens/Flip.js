import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from "react-native";
import React, { useState, useRef } from "react";
import { colors } from "../config/colors";
import Icon from "react-native-vector-icons/Ionicons";

export default function Flip() {
  const terms = ["asdf", "asd", "asdff", "dd", "asf", "as"];
  const definitions = ["a", "b", "c", "d", "e", "f"];
  const [textRotateValue, setTextRotateValue] = useState("0deg");

  const flipAnimation = useRef(new Animated.Value(0)).current;

  const flipCard = () => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [onTerm, setOnTerm] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          flipAnimation.setValue(0);
          flipCard();
          setOnTerm(!onTerm);
          setTextRotateValue("180deg");
        }}
      >
        <Animated.View
          style={{
            ...styles.termContainer,
            transform: [
              {
                rotateY: flipAnimation.interpolate({
                  inputRange: [0, 180],
                  outputRange: ["0deg", "180deg"],
                }),
              },
            ],
          }}
        >
          <Text
            style={{
              ...styles.text,
              fontFamily: onTerm ? "Bold" : "Regular",
              transform: [
                {
                  rotateY: textRotateValue,
                },
              ],
            }}
          >
            {onTerm ? terms[currentIndex] : definitions[currentIndex]}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            setCurrentIndex(Math.max(currentIndex - 1, 0));
          }}
        >
          <Icon
            name="chevron-back-outline"
            size={80}
            color={colors.darkBorderColor}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrentIndex(Math.min(currentIndex + 1, terms.length - 1));
          }}
        >
          <Icon
            name="chevron-forward-outline"
            size={80}
            colors={colors.grayBorderColor}
          />
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
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 40,
    gap: 160,
  },
});
