import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerOrigemDestino: {
    flexDirection: "row",
    justifyContent: "center",
  },
  containerLocal: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  titlePrimary: {
    fontSize: 30,
    color: "#3551B4",
    textAlign: "center",
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
