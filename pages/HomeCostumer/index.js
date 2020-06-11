import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Ad from "../../components/Ad";
import styles from "./style";
import Firebase from "../../config/firebaseConfig";

const HomeCostumer = (props) => {
  const [list, setList] = useState([]);
  const { id: userId } = props.route.params.user;

  useEffect(() => {
    //const getAdsData = FirebaseService.getAdsData(userId);
    const getAdsData = Firebase.database()
      .ref(`usuarios/${userId}/anuncios`)
      .on("value", (snapshot) => setList(snapshot.val()));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.markWrap}>
        <Text style={styles.titlePrimary}>
          M<Text style={styles.titleSecondarty}>eus</Text>
          <Text style={styles.titlePrimary}> A</Text>
          <Text style={styles.titleSecondarty}>núncios</Text>
        </Text>
      </View>
      <ScrollView style={styles.wrapper}>
        {list && Object.keys(list).length ? (
          Object.keys(list).map((item, idx) => (
            <View key={idx}>
              <Ad
                data={list[item]}
                idItem={item}
                navigation={props.navigation}
                userId={userId}
              />
            </View>
          ))
        ) : (
          <Text
            style={{
              marginTop: 50,
              textAlign: "center",
            }}
          >
            Você não tem anúncios criados
          </Text>
        )}
      </ScrollView>
      <View style={styles.plusButtonArea}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            height: 60,
            width: 60,
            borderRadius: 64,
          }}
          onPress={() => {
            props.navigation.navigate("NewAd", { userId });
          }}
        >
          <View style={styles.button}>
            <Icon style={styles.icon} name="plus" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeCostumer;
