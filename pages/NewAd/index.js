import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import Firebase from "../../config/firebaseConfig";
import styles from "./style";

export default function NewAd(props) {
  const { id } = props.route.params;
  const [titulo, setTitulo] = useState();
  const [peso, setPeso] = useState();
  const [quantidade, setQuantidade] = useState();
  const [origem, setOrigem] = useState();
  const [destino, setDestino] = useState();

  const insertNewAd = () => {
    if (
      titulo === undefined ||
      titulo === "" ||
      peso === undefined ||
      peso === "" ||
      quantidade === undefined ||
      quantidade === "" ||
      origem === undefined ||
      origem === "" ||
      destino === undefined ||
      destino === ""
    ) {
      Alert.alert("Erro", "Preencha todos dados");
      props.navigation.reset({
        index: 0,
        routes: [{ name: "HomeCostumer" }],
      });
    } else {
      Firebase.database().ref(`usuarios/${id}/anuncios`).push({
        titulo,
        peso,
        quantidade,
        origem,
        destino,
      });
      props.navigation.reset({
        index: 0,
        routes: [{ name: "HomeCostumer" }],
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
            name="titulo"
            placeholderTextColor="#c4c4c4"
            style={styles.input}
            onChangeText={(text) => {
              setTitulo(text);
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
                setPeso(text);
              }}
            />
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="quantidade"
              placeholderTextColor="#c4c4c4"
              style={styles.input}
              onChangeText={(text) => {
                setQuantidade(text);
              }}
            />
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              placeholderTextColor="#c4c4c4"
              placeholder="origem"
              style={styles.input}
              onChangeText={(text) => {
                setOrigem(text);
              }}
            />
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              placeholderTextColor="#c4c4c4"
              placeholder="destino"
              style={styles.input}
              onChangeText={(text) => {
                setDestino(text);
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
