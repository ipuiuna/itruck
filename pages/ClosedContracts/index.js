import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import Firebase from "../../config/firebaseConfig";
import AdClosed from "../../components/AdClosed";
import styles from "./style";

const ClosedContracts = (props) => {
  const { id } = props.route.params.user;
  const [list, setList] = useState([]);

  useEffect(() => {
    const getAdsData = Firebase.database()
      .ref(`usuarios/${id}/contratosfechados`)
      .on("value", (snapshot) => setList(snapshot.val()));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.markWrap}>
        <Text style={styles.titlePrimary}>
          <Text style={styles.titlePrimary}>C</Text>
          <Text style={styles.titleSecondarty}>oncluídos</Text>
        </Text>
      </View>
      <ScrollView style={styles.wrapper}>
        {list && Object.keys(list).length ? (
          Object.keys(list).map((item, idx) => (
            <View key={idx}>
              <View key={idx}>
                <AdClosed data={list[item]} adId={item} driverId={id} />
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

export default ClosedContracts;
