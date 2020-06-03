import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

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
    flex: 1,
    justifyContent: "flex-end",
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
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
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
    height: 50,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signupLinkText: {
    color: "#3551B4",
    marginLeft: 5,
    textAlign: "center",
  },
});

export default styles;
