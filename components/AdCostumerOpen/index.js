import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome5";
import Firebase from "../../config/firebaseConfig";

const AdCostumerOpen = (props) => {
  const { titulo, destino, origem, peso, quantidade, adOwner } = props.data;
  const { adId } = props;

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
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                margin: 8,
                height: 30,
                width: 60,
                borderRadius: 8,
                backgroundColor: "#3551B4",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() =>
                Firebase.database()
                  .ref(`usuarios/${adOwner}/contratosabertos/${adId}`)
                  .update({ okCostumer: 1 })
              }
            >
              <View>
                <Icon
                  name="check"
                  style={{
                    fontSize: 30,
                    color: "#a6f87e",
                    margin: 8,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                margin: 8,
                height: 30,
                width: 60,
                borderRadius: 8,
                backgroundColor: "#3551B4",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View>
                <Icon
                  name="map-marked-alt"
                  style={{
                    fontSize: 20,
                    color: "#fff",
                    margin: 8,
                  }}
                />
              </View>
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
    </>
  );
};

export default AdCostumerOpen;
