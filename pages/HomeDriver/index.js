import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import Firebase from "../../config/firebaseConfig";
import AdDriver from "../../components/AdDriver";
import styles from "./style";

const HomeDriver = (props) => {
  console.log("props homedriver", props);
  const { id } = props.route.params;
  const [list, setList] = useState([]);

  useEffect(() => {
    const getAdsData = Firebase.database()
      .ref(`todosanuncios`)
      .on("value", (snapshot) => setList(snapshot.val()));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.markWrap}>
        <Text style={styles.titlePrimary}>
          <Text style={styles.titlePrimary}> A</Text>
          <Text style={styles.titleSecondarty}>núncios</Text>
        </Text>
      </View>
      <ScrollView style={styles.wrapper}>
        {list && Object.keys(list).length ? (
          Object.keys(list).map((item, idx) => (
            <View key={idx}>
              <View key={idx}>
                <AdDriver data={list[item]} adId={item} driverId={id} />
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

export default HomeDriver;
