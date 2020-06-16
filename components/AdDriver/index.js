import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Modal, Alert } from "react-native";
import styles from "./style";
import { TextInput } from "react-native-gesture-handler";
import Firebase from "../../config/firebaseConfig";

const AdDriver = (props) => {
  // console.log("addrivers props: ", props);
  const { titulo, destino, origem, peso, quantidade, adOwner } = props.data;
  const { adId, driverId } = props;
  const [showModal, setShowModal] = useState(false);
  const [nomeMotorista, setNomeMotorista] = useState("");
  const [telefoneMotorista, setTelefoneMotorista] = useState("não cadastrado");
  const [lance, setLance] = useState("");

  useEffect(() => {
    Firebase.database()
      .ref(`usuarios/${driverId}/nome`)
      .on("value", (snapshot) => {
        setNomeMotorista(snapshot.val());
      });
    Firebase.database()
      .ref(`usuarios/${driverId}/celular`)
      .on("value", (snapshot) => {
        if (snapshot.val()) {
          setTelefoneMotorista(snapshot.val());
        } else setTelefoneMotorista("não cadastrado");
      });
  }, [nomeMotorista]);

  return (
    <>
      <View
        style={{
          backgroundColor: "#c4c4c4",
          marginBottom: 8,
          borderRadius: 8,
        }}
      >
        <Modal animationType="slide" transparent={true} visible={showModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Digite o valor do seu lance:</Text>
              <TextInput
                placeholderTextColor="#c4c4c4"
                placeholder="R$ 0.00"
                keyboardType="numeric"
                style={styles.input}
                onChangeText={(valor) => setLance(valor)}
              />
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    ...styles.openButton,
                    backgroundColor: "#3551B4",
                    margin: 4,
                  }}
                  onPress={() => {
                    Firebase.database()
                      .ref(`usuarios/${adOwner}/anuncios/${adId}/lances`)
                      .push({
                        nome: nomeMotorista,
                        valor: lance,
                        userId: driverId,
                        celular: telefoneMotorista,
                      });
                    setShowModal(!showModal);
                  }}
                >
                  <Text style={styles.textStyle}>Dar lance!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    ...styles.openButton,
                    backgroundColor: "red",
                    margin: 4,
                  }}
                  onPress={() => {
                    setShowModal(!showModal);
                  }}
                >
                  <Text style={styles.textStyle}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.container}>
          <Text style={styles.text}>{titulo}</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              margin: 8,
              height: 30,
              width: 60,
              borderRadius: 8,
              backgroundColor: "#3551B4",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setShowModal(!showModal)}
          >
            <View>
              <Text style={{ color: "#fff" }}>LANCE!</Text>
            </View>
          </TouchableOpacity>
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
    </>
  );
};

export default AdDriver;
