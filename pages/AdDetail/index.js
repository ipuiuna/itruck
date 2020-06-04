import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import Bid from "../../components/Bid";
import mockData from "./mockData";

const AdDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.markWrap}>
        <Text style={styles.titlePrimary}>
          D<Text style={styles.titleSecondarty}>etalhes</Text>
        </Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.titleSecondarty}>Batata</Text>
        <View
          style={{
            flex: 0.07,
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 8,
          }}
        >
          <Text style={{ fontSize: 20 }}>Quantidade</Text>
          <Text style={{ fontSize: 20 }}>Peso</Text>
        </View>
        <View
          style={{
            flex: 0.07,
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 8,
          }}
        >
          <Text style={{ fontSize: 20 }}>Ipuiuna</Text>
          <Text style={{ fontSize: 20 }}> -> </Text>
          <Text style={{ fontSize: 20 }}>Pouso Alegre</Text>
        </View>
        <View
          style={{
            flex: 0.07,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20 }}>Lances</Text>
        </View>
        <View
          style={{
            flex: 0.79,
            margin: 8,
            height: 35,
            borderRadius: 8,
            backgroundColor: "#c4c4c4",
          }}
        >
          <ScrollView
            style={{
              flexGrow: 1,
              margin: 8,
            }}
          >
            {mockData.map((item, idx) => (
              <View style={{ borderRadius: 8 }}>
                <Bid data={item} key={idx} />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.plusButtonArea}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            height: 60,
            width: 60,
            borderRadius: 64,
          }}
        >
          <View style={styles.button}>
            <Icon style={styles.icon} name="trash" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdDetail;
