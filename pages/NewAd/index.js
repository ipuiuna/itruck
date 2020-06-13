import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import Firebase from "../../config/firebaseConfig";
import styles from "./style";

export default function NewAd(props) {
  const { userId } = props.route.params;
  console.log("props:>>>>> ", props);
  const [newAd, setNewAd] = useState({
    titulo: "",
    peso: "",
    quantidade: "",
    origem: "",
    destino: "",
  });

  const insertNewAd = async () => {
    if (
      !newAd.titulo ||
      !newAd.peso ||
      !newAd.quantidade ||
      !newAd.origem ||
      !newAd.destino
    ) {
      Alert.alert("Erro", "Preencha todos dados");
    } else {
      console.log("userid para novo anuncio: ", userId);
      const key = await Firebase.database()
        .ref(`usuarios/${userId}/anuncios`)
        .push(newAd)
        .getKey();
      Firebase.database().ref(`todosanuncios/${key}`).set(newAd);
      props.navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.markWrap}>
        <Text style={styles.titlePrimary}>
          N<Text style={styles.titleSecondarty}>ovo</Text>
          <Text style={styles.titlePrimary}> A</Text>
          <Text style={styles.titleSecondarty}>núncio</Text>
        </Text>
      </View>
      <View>
        <View style={styles.inputWrap}>
          <TextInput
            placeholder="título"
            placeholderTextColor="#c4c4c4"
            style={styles.input}
            onChangeText={(text) => {
              setNewAd({
                ...newAd,
                titulo: text,
              });
            }}
          />
        </View>
        <View style={styles.inputs}>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="peso"
              placeholderTextColor="#c4c4c4"
              style={styles.input}
              onChangeText={(text) => {
                setNewAd({
                  ...newAd,
                  peso: text,
                });
              }}
            />
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="quantidade"
              placeholderTextColor="#c4c4c4"
              style={styles.input}
              onChangeText={(text) => {
                setNewAd({
                  ...newAd,
                  quantidade: text,
                });
              }}
            />
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              placeholderTextColor="#c4c4c4"
              placeholder="origem"
              style={styles.input}
              onChangeText={(text) => {
                setNewAd({
                  ...newAd,
                  origem: text,
                });
              }}
            />
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              placeholderTextColor="#c4c4c4"
              placeholder="destino"
              style={styles.input}
              onChangeText={(text) => {
                setNewAd({
                  ...newAd,
                  destino: text,
                });
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "#3551B4",
              width: "auto",
              height: 50,
              justifyContent: "center",
              alignContent: "center",
              margin: 30,
            }}
          >
            <TouchableOpacity onPress={insertNewAd}>
              <Text style={styles.buttonText}>Criar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
