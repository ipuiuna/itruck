import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import Firebase from "../../config/firebaseConfig";

const Ad = (props) => {
  const {
    navigation,
    idItem,
    userId,
    data: { titulo, destino, origem, peso, quantidade },
  } = props;
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AdDetail", { idItem });
            }}
          >
            <Icon
              name="pencil"
              style={{
                fontSize: 30,
                color: "#000",
                margin: 8,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Firebase.database()
                .ref(`usuarios/${userId}/anuncios/${idItem}`)
                .remove();
            }}
          >
            <Icon
              name="trash-o"
              style={{
                fontSize: 30,
                color: "#000",
                margin: 8,
              }}
            />
          </TouchableOpacity>
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
