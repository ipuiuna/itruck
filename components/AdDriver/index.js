import React from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";

const AdDriver = (props) => {
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
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            zIndex: 1,
            margin: 8,
            height: 30,
            width: 60,
            borderRadius: 8,
            backgroundColor: "#3551B4",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => Alert.alert("teste", "teste")}
        >
          <View>
            <Text style={{ color: "#fff" }}>LANCE!</Text>
          </View>
        </TouchableOpacity>
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

export default AdDriver;
