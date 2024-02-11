import { StyleSheet, Text } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../config/colors";
import { View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Icon from "react-native-vector-icons/Ionicons";


export default function Login({ navigation }) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [loginStatus, setLoginStatus] = useState(true);
  const [message, setMessage] = useState("");

  const fetchRequest = async () => {
    const response = await fetch('https://elephantsuite-rearend.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ email, password }),
      mode: 'cors' 
    },
    )

    const ctx = await response.json();
    return ctx;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Login</Text>
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
        onChange={(e) => {
          setEmail(e);
        }}
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
        onChange={(e) => {
          setPassword(e);
        }}
      />
      {!loginStatus && <View>
        <Text style={styles.errorText}>
          Error: {message}
        </Text>
      </View>}
      <View style={styles.footer}>
        <Button
          text={"Login"}
          onPress={() => {
            if (!email || !password) {
              setLoginStatus(false);
              setMessage("Please complete all fields");
              return;
            }
            
            fetchRequest().then((e) => {
              setLoginStatus(e.status != "FAILURE");
              setMessage(e.message ?? "");

              const {id, decks, firstName, email, type} = e.context.user;

              console.log(e.context.user);

              if (loginStatus) {
                navigation.navigate("HomeWrapper",
                  {id, decks, firstName, email, type}
                );
              }
            });

          }}
        />
        <Button
          text={"Go Back"}
          type="secondary"
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
    marginTop: 160,
  },
  header: {
    fontSize: 43,
    fontFamily: "Bold",
    marginBottom: 15,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 25,
  },
  errorText: {
    fontFamily: 'Regular',
    color: 'red',
    fontSize: 16,
    marginTop: 15,
  }
});