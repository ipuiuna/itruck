import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";

export default class LoginScreen extends Component {
  render() {
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
              placeholderTextColor="#c4c4c4"
              style={styles.input}
            />
          </View>
          <View style={styles.inputWrap}>
            <TextInput
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
            <TouchableOpacity activeOpacity={0.5}>
              <View>
                <Text style={styles.signupLinkText}>clique aqui</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
