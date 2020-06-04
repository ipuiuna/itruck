import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";

const Ad = (props) => {
  const { titulo, destino, origem, peso, quantidade } = props.data;
  return (
    <View
      style={{
        backgroundColor: "#c4c4c4",
        marginBottom: 8,
        borderRadius: 8,
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{titulo}</Text>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="gavel"
            style={{
              fontSize: 30,
              color: "#000",
              margin: 8,
            }}
          />
        </View>
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
  );
};

export default Ad;
