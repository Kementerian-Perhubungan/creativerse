import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace("Login"), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient colors={["#fbe9e7", "#f3e5f5"]} style={styles.container}>
      <Text style={styles.title}>CreatiVerse</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
    color: "#8d6e63",
  },
});
