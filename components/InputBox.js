import React from "react";
import { View, Text, TextInput } from "react-native";

export default function InputBox(props) {
  return (
    <View style={styles.inputFrame}>
      <Text style={{ fontSize: 20, fontFamily: "Helvetica" }}>
        {props.title}
      </Text>
      <TextInput
        style={styles.textBox}
        value={props.question}
        onChangeText={props.function}
        placeholder={props.placeholder}
      ></TextInput>
    </View>
  );
}

const styles = {
  inputFrame: {
    height: "12%",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textBox: {
    height: "40%",
    width: "80%",
    borderWidth: 1,
    paddingLeft: 2,
    paddingRight: 2,
    fontSize: 14,
    outline: "None",
  },
};
