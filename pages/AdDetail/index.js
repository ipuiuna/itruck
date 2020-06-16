import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import Firebase from "../../config/firebaseConfig";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import Bid from "../../components/Bid";

const AdDetail = (props) => {
  // console.log("props on details", props.navigation);
  const { idItem, userId } = props.route.params;
  const [adDetails, setAdDetails] = useState();
  const [lancesList, setLancesList] = useState();

  const getDetails = () => {
    Firebase.database()
      .ref(`usuarios/${userId}/anuncios/${idItem}`)
      .on("value", (snapshot) => {
        setAdDetails(snapshot.val());
      });
    Firebase.database()
      .ref(`usuarios/${userId}/anuncios/${idItem}/lances`)
      .on("value", (snapshot) => {
        setLancesList(snapshot.val());
      });
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.markWrap}>
        <Text style={styles.titlePrimary}>
          D<Text style={styles.titleSecondarty}>etalhes</Text>
        </Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.titleSecondarty}>
          {!adDetails ? "loading" : adDetails.titulo}
        </Text>
        <View
          style={{
            flex: 0.07,
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 8,
          }}
        >
          <Text style={{ fontSize: 20 }}>
            {!adDetails ? "" : adDetails.quantidade}
          </Text>
          <Text style={{ fontSize: 20 }}>
            {!adDetails ? "" : adDetails.peso}
          </Text>
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
          <Text style={{ fontSize: 20 }}>
            {!adDetails ? "" : adDetails.origem}{" "}
          </Text>
          <Text style={{ fontSize: 20 }}> -> </Text>
          <Text style={{ fontSize: 20 }}>
            {!adDetails ? "" : adDetails.destino}
          </Text>
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
            {lancesList && Object.keys(lancesList).length ? (
              Object.keys(lancesList).map((item, idx) => (
                <View key={idx}>
                  <Bid
                    data={lancesList[item]}
                    chave={item}
                    userId={userId}
                    idItem={idItem}
                    adDetails={adDetails}
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
                Esse anúncio ainda não teve lances.
              </Text>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default AdDetail;
