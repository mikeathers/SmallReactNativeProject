import React from "react"
import { View, TextInput, Text } from "react-native"

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        autoCapitalize={"none"}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
};

const styles = {
  container: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    alignItems: "center"
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  input: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  }

}

export { Input }