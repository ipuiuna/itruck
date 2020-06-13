import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  plusButtonArea: {
    flex: 0.12,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
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
  wrapper: {
    flex: 0.76,
    marginTop: 8,
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
  signOutButton: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
    borderRadius: 64,
  },
  markWrap: {
    flex: 0.1,
    justifyContent: "flex-end",
  },
  icon: {
    color: "#FFF",
    fontSize: 20,
  },
});

export default styles;
