import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import Firebase from "../../config/firebaseConfig";
import AdDriverOpen from "../../components/AdDriverOpen";
import styles from "./style";

const OpenContractsDriver = (props) => {
  const { id } = props.route.params.user;
  const [list, setList] = useState([]);

  useEffect(() => {
    const getAdsData = Firebase.database()
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
                <AdDriverOpen data={list[item]} adId={item} driverId={id} />
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

export default OpenContractsDriver;
