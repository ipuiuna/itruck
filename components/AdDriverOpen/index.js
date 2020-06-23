import React from "react";
import { Text, View, TouchableOpacity, Linking } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome5";
import Firebase from "../../config/firebaseConfig";

const AdDriverOpen = (props) => {
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
              onPress={() => {
                Firebase.database()
                  .ref(`usuarios/${adOwner}/contratosabertos/${adId}`)
                  .update({ okDriver: 1 });
                Firebase.database()
                  .ref(`usuarios/${adOwner}/contratosabertos/${adId}`)
                  .update({ driverId: driverId });
              }}
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
              onPress={() =>
                Linking.openURL(
                  `https://www.google.com/maps/dir/?api=1&origin=${origem}&destination=${destino}`
                )
              }
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
                  name="route"
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

export default AdDriverOpen;
