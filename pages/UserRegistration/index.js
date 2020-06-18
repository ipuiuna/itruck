import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  CheckBox,
  Alert,
} from "react-native";
import Firebase from "../../config/firebaseConfig";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function UserRegistration() {
  const [isDriver, setIsDriver] = useState(false);
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [cel, setCel] = useState();
  const [senha, setSenha] = useState();
  const navigation = useNavigation();

  const handleSignUp = () => {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((retorno) => {
        const { uid } = retorno.user;
        console.log("uid: ", uid);
        Firebase.database()
          .ref(`usuarios/${uid}`)
          .set({
            nome: nome,
            email: email,
            celular: cel,
            id: uid,
            caminhoneiro: isDriver ? "P" : "C",
          });
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log("error: ", error);
        Alert.alert("Error", error.message);
      });
  };

  // useEffect(() => {
  //   console.log("caminhoneiro", isDriver);
  // });

  return (
    <View style={styles.container}>
      <View style={styles.markWrap}>
        <Text style={styles.titlePrimary}>
          i<Text style={styles.titleSecondarty}>Truck</Text>
        </Text>
        <Text style={{ fontSize: 25, textAlign: "center" }}>Novo cadastro</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.inputWrap}>
          <TextInput
            placeholder="Nome completo"
            placeholderTextColor="#c4c4c4"
            style={styles.input}
            onChangeText={(text) => setNome(text)}
          />
        </View>
        <View style={styles.inputs}>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="e-mail"
              placeholderTextColor="#c4c4c4"
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="Celular"
              placeholderTextColor="#c4c4c4"
              style={styles.input}
              onChangeText={(text) => setCel(text)}
            />
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              placeholderTextColor="#c4c4c4"
              placeholder="Senha"
              style={styles.input}
              secureTextEntry
              onChangeText={(text) => setSenha(text)}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isDriver}
              onValueChange={() => setIsDriver(!isDriver)}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Caminhoneiro?</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={handleSignUp}
        style={{ marginTop: 210 }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
