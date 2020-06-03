import React from "react";
//import Login from "./pages/Login";
import HomeCostumer from "./pages/HomeCostumer";
import { StyleSheet } from "react-native";

export default function App() {
  return <HomeCostumer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
