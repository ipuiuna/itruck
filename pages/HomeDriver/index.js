import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Firebase from "../../config/firebaseConfig";
import AdDriver from "../../components/AdDriver";
import styles from "./style";

const HomeDriver = (props) => {
  const [list, setList] = useState([]);
  const fetchData = async () => {
    Firebase.database()
      .ref(`todosanuncios`)
      .on("value", (snapshot) => {
        const rows = snapshot.val();
        const newList = [];
        Object.keys(rows).map((key) => {
          newList.push(rows[key]);
        });
        setList(newList);
      });
  };

  useEffect(() => {
    fetchData();
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
        {list.map((item, idx) => (
          <View key={idx}>
            <AdDriver data={item} />
          </View>
        ))}
      </ScrollView>
      {/* <View style={styles.plusButtonArea}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            height: 60,
            width: 60,
            borderRadius: 64,
          }}
        >
          <View style={styles.button}>
            <Icon style={styles.icon} name="plus" />
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default HomeDriver;
