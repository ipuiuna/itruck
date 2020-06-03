import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Ad from "../../components/Ad";
import styles from "./style";
import mockData from "./mockData";

const HomeCostumer = () => {
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
        {mockData.map((item, idx) => (
          <View>
            <Ad data={item} key={idx} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.plusButtonArea}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            backgroundColor: "pink",
            height: 60,
            width: 60,
            borderRadius: 64,
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
