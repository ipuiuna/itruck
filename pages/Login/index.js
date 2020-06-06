import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Firebase from "../../config/firebaseConfig";
import styles from "./style";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const { email, password } = this.state;

    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("Profile"))
      .catch((error) => console.log(error));
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
            placeholderTextColor="#c4c4c4"
            style={styles.input}
          />
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            onChangeText={(password) => setPassword(password)}
            placeholderTextColor="#c4c4c4"
            placeholder="Senha"
            style={styles.input}
            secureTextEntry
          />
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.signupWrap}>
          <Text>Novo usuário</Text>
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.5} onPress={handleLogin}>
            <View>
              <Text style={styles.signupLinkText}>clique aqui</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
