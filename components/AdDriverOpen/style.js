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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: "center",
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    margin: 30,
  },
  input: {
    textAlign: "center",
    fontSize: 25,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
});

export default styles;
