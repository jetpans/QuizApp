import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function InputBox(props) {
  return (
    <View style={styles.inputFrame}>
      <View style={styles.upperFrame}>
        <View style={styles.textFrame}>
          <Text style={{ fontSize: 20, fontFamily: "Helvetica" }}>
            {props.title}
          </Text>
        </View>
        <View style={styles.buttonFrame}>
          {props.title != "Question:" ? (
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                borderRadius: 25,
                borderWidth: 1,
                backgroundColor: props.color,
              }}
              onPress={props.chosen}
            >
              <View></View>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
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
  circle: {
    width: "8%",
    height: "8%",
    borderRadius: 50,
  },
  upperFrame: {
    height: "50%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonFrame: {
    height: "100%",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  textFrame: {
    height: "100%",
    width: "60%",
    paddingLeft: "5%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
};
