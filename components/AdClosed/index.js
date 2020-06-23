import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";
import Firebase from "../../config/firebaseConfig";

const AdClosed = (props) => {
  const { titulo, destino, origem, peso, quantidade, adOwner } = props.data;
  const { adId, driverId } = props;

  return (
    <>
      <View
        style={{
          backgroundColor: "#c4c4c4",
          marginBottom: 8,
          borderRadius: 8,
        }}
      >
        <View style={styles.container}>
          <Text style={styles.text}>{titulo}</Text>
          {/* <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>{driverId}</Text>
          </View> */}
        </View>
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.text}>{quantidade}</Text>
            <Text style={styles.text}>{peso}</Text>
          </View>
        </View>
        <View style={styles.containerOrigemDestino}>
          <View style={styles.containerLocal}>
            <Text style={styles.text}>{origem}</Text>
            <Text style={{ fontSize: 25 }}>-></Text>
            <Text style={styles.text}>{destino}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default AdClosed;
