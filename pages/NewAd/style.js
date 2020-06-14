import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    margin: 30,
    marginTop: 40,
  },
  input: {
    flex: 1,
    textAlign: "center",
    fontSize: 25,
  },
  button: {
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
  },
  inputs: {
    flex: 65,
  },
});

export default styles;
