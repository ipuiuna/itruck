import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import Firebase from "../../config/firebaseConfig";
import styles from "./style";

export default function LoginScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState(__DEV__ ? "eu@aqui.com.br" : "");
  const [password, setPassword] = useState(__DEV__ ? "123456789" : "");

  const handleLogin = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Firebase.auth().onAuthStateChanged((user) => {
          Firebase.database()
            .ref(`usuarios/${user.uid}`)
            .on("value", (snapshot) => {
              props.route.params.setUser(snapshot.val());
              props.route.params.setLogin(true);
            });
        });
      })
      .catch((error) => {
        Alert.alert("Erro", "Usuário ou senha inválidos.");
        console.log("error: ", error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.markWrap}>
        <Text style={styles.titlePrimary}>
          i<Text style={styles.titleSecondarty}>Truck</Text>
        </Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.inputWrap}>
          <TextInput
            placeholder="Usuário"
            onChangeText={(email) => setEmail(email)}
            value={email}
            placeholderTextColor="#c4c4c4"
            style={styles.input}
          />
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            onChangeText={(password) => setPassword(password)}
            placeholderTextColor="#c4c4c4"
            placeholder="Senha"
            value={password}
            style={styles.input}
            secureTextEntry
          />
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5} onPress={handleLogin}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.signupWrap}>
          <Text>Novo usuário</Text>
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.5}>
            <View>
              <Text
                style={styles.signupLinkText}
                onPress={() => navigation.push("UserRegistration")}
              >
                clique aqui
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
