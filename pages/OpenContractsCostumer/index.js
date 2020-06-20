import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import Firebase from "../../config/firebaseConfig";
import AdCostumerOpen from "../../components/AdCostumerOpen";
import styles from "./style";

const OpenContractsCostumer = (props) => {
  const { id } = props.route.params.user;
  const [list, setList] = useState([]);

  useEffect(() => {
    var query = Firebase.database().ref(`usuarios/${id}/contratosabertos`);
    query.on("value", (dataSnapshot) => {
      const valores = dataSnapshot.val();
      if (valores)
        Object.keys(valores).map((item) => {
          const provItem = valores[item];
          if (provItem.okCostumer && provItem.okDriver) {
            Firebase.database()
              .ref(`usuarios/${provItem.adOwner}/contratosfechados/${item}`)
              .set(provItem);
            Firebase.database()
              .ref(`usuarios/${provItem.driverId}/contratosfechados/${item}`)
              .set(provItem);
            Firebase.database()
              .ref(`usuarios/${provItem.adOwner}/contratosabertos/${item}`)
              .remove();
            Firebase.database()
              .ref(`usuarios/${provItem.driverId}/contratosabertos/${item}`)
              .remove();
            console.log(
              `usuarios/${provItem.driverId}/contratosabertos/${item}`
            );
          }
        });
    });
    Firebase.database()
      .ref(`usuarios/${id}/contratosabertos`)
      .on("value", (snapshot) => setList(snapshot.val()));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.markWrap}>
        <Text style={styles.titlePrimary}>
          <Text style={styles.titlePrimary}> A</Text>
          <Text style={styles.titleSecondarty}>bertos</Text>
        </Text>
      </View>
      <ScrollView style={styles.wrapper}>
        {list && Object.keys(list).length ? (
          Object.keys(list).map((item, idx) => (
            <View key={idx}>
              <View key={idx}>
                <AdCostumerOpen data={list[item]} adId={item} driverId={id} />
              </View>
            </View>
          ))
        ) : (
          <Text>Carregando anúncios</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default OpenContractsCostumer;
