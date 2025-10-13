import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen({ navigation }) {
  return (
    <LinearGradient colors={["#fbe9e7", "#f3e5f5"]} style={styles.container}>
      <Text style={styles.title}>CreatiVerse</Text>

      <View style={styles.form}>
        <Text style={styles.header}>Wellcome!</Text>
        <Text style={styles.sub}>Login to your Account</Text>

        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Don’t have an account?{" "}
          <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>
            Sign up
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 32, fontWeight: "600", color: "#8d6e63", marginBottom: 20 },
  form: {
    backgroundColor: "rgba(255,255,255,0.4)",
    padding: 25,
    borderRadius: 20,
    width: "85%",
    alignItems: "center",
  },
  header: { fontSize: 24, fontWeight: "700", color: "#5d4037" },
  sub: { fontSize: 14, color: "#6d4c41", marginBottom: 20 },
  input: {
    width: "90%",
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 25,
    padding: 10,
    marginVertical: 6,
    textAlign: "center",
  },
  button: {
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 25,
    paddingVertical: 10,
    width: "50%",
    marginTop: 10,
  },
  buttonText: { textAlign: "center", color: "#6d4c41", fontWeight: "600" },
  footer: { marginTop: 20, color: "#6d4c41" },
  link: { color: "#0277bd", fontWeight: "bold" },
});
