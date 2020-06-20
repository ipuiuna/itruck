import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Firebase from "../../config/firebaseConfig";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const Bid = (props) => {
  const { chave, userId, idItem } = props;
  const { nome, valor, userId: driverId } = props.data;
  const [ad, setAd] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    Firebase.database()
      .ref(`usuarios/${userId}/anuncios/${idItem}`)
      .on("value", (snapshot) => {
        setAd(snapshot.val());
      });
    setAd({ ...ad, driverId: driverId });
  }, []);

  const newContractCreation = () => {
    console.log("ad depois de aceitar o contrato: ", ad);
    Firebase.database().ref(`todosanuncios/${idItem}`).remove();
    Firebase.database()
      .ref(`usuarios/${userId}/anuncios/${idItem}/lances`)
      .remove();
    Firebase.database()
      .ref(`usuarios/${userId}/contratosabertos/${idItem}`)
      .set(ad);
    Firebase.database()
      .ref(`usuarios/${driverId}/contratosabertos/${idItem}`)
      .set(ad);
    Firebase.database()
      .ref(`usuarios/${driverId}/contratosabertos/${idItem}/lances`)
      .remove();
    Firebase.database()
      .ref(`usuarios/${userId}/contratosabertos/${idItem}/lances`)
      .remove();
    Firebase.database().ref(`usuarios/${userId}/anuncios/${idItem}`).remove();
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>{nome} -></Text>
        <Text style={styles.text}>
          R$ {(+valor).toFixed(2).toString().replace(".", ",")}
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            newContractCreation();
          }}
        >
          <Icon
            name="check"
            style={{
              fontSize: 30,
              color: "#a6f87e",
              margin: 8,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
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
