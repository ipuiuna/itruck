import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";

const Bid = (props) => {
  const { nome, valor } = props.data;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>{nome} -></Text>
        <Text style={styles.text}>
          R$ {valor.toFixed(2).toString().replace(".", ",")}
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Icon
          name="check"
          style={{
            fontSize: 30,
            color: "#a6f87e",
            margin: 8,
          }}
        />
        <Icon
          name="trash"
          style={{
            fontSize: 30,
            color: "red",
            margin: 8,
          }}
        />
      </View>
    </View>
  );
};

export default Bid;
