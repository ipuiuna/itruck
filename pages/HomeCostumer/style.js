import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  plusButtonArea: {
    flex: 0.12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 4,
    marginTop: 4,
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
  markWrap: {
    flex: 0.1,
    justifyContent: "flex-end",
  },
  background: {
    width,
    height,
  },
  wrapper: {
    flex: 0.76,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#3551B4",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    borderRadius: 64,
  },
  icon: {
    color: "#FFF",
    fontSize: 20,
  },
});

export default styles;
