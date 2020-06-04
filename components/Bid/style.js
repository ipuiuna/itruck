import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginBottom: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  containerOrigemDestino: {
    flexDirection: "row",
    justifyContent: "center",
  },
  containerLocal: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  titleSecondarty: {
    fontSize: 30,
    color: "#000",
  },
  icon: {
    color: "#FFF",
    fontSize: 20,
  },
  text: {
    fontSize: 18,
    margin: 4,
  },
});

export default styles;
