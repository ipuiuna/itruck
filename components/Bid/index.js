import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Firebase from "../../config/firebaseConfig";
import styles from "./style";

const Bid = (props) => {
  const { chave, userId, idItem } = props;
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
        <TouchableOpacity
          onPress={() => {
            Firebase.database()
              .ref(`usuarios/${userId}/anuncios/${idItem}/lances/${chave}`)
              .remove();
          }}
        >
          <Icon
            name="trash-o"
            style={{
              fontSize: 30,
              color: "red",
              margin: 8,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bid;