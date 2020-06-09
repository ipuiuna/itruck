import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import styles from "./style";

export default function UserRegistration() {
  const [isDriver, setDriver] = useState(false);

  useEffect(() => {
    console.log("caminhoneiro? ", isDriver);
  });

  return (
    <View style={styles.container}>
      {/* <View style={styles.markWrap}>
        <Text style={styles.titlePrimary}>
          N<Text style={styles.titleSecondarty}>ovo </Text>
          <Text style={styles.titlePrimary}>
            U<Text style={styles.titleSecondarty}>suário</Text>
          </Text>
        </Text>
      </View> */}
      <View style={styles.wrapper}>
        <View style={styles.inputWrap}>
          <TextInput
            placeholder="Nome completo"
            placeholderTextColor="#c4c4c4"
            style={styles.input}
          />
        </View>
        <View style={styles.inputs}>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="e-mail"
              placeholderTextColor="#c4c4c4"
              style={styles.input}
            />
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="Celular"
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
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isDriver}
              onValueChange={setDriver}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Caminhoneiro?</Text>
          </View>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
