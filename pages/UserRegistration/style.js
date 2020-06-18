import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlePrimary: {
    fontSize: 50,
    color: "#3551B4",
    textAlign: "center",
  },
  titleSecondarty: {
    fontSize: 50,
    color: "#000",
  },
  markWrap: {
    marginTop: 50,
    justifyContent: "flex-end",
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  wrapper: {
    paddingVertical: 30,
    marginBottom: 40,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    margin: 30,
  },
  input: {
    flex: 1,
    textAlign: "center",
    fontSize: 25,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#3551B4",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    margin: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  inputs: {
    flex: 65,
  },
  checkboxContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
});

export default styles;
