import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";

const Ad = (props) => {
  const { titulo, destino, origem, peso, quantidade } = props.data;
  return (
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
          <Icon
            name="pencil"
            style={{
              fontSize: 30,
              color: "#000",
              margin: 8,
            }}
          />
          <Icon
            name="trash-o"
            style={{
              fontSize: 30,
              color: "#000",
              margin: 8,
            }}
          />
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
  );
};

export default Ad;

{
  /* <View style={styles.markWrap}>
<Text style={styles.titlePrimary}>
  M<Text style={styles.titleSecondarty}>eus</Text>
  <Text style={styles.titlePrimary}> A</Text>
  <Text style={styles.titleSecondarty}>núncios</Text>
</Text>
</View>
<ScrollView style={styles.wrapper}>
<Text style={{ color: "#fff", backgroundColor: "blue", margin: 8 }}>
  Meus anuncios
</Text>
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
</View> */
}
